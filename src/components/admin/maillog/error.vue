<template>
  <div id="errorMail">
    <!-- {{ mails }} -->
    <div class="card-white">
      <div class="row mb-2 align-items-center justify-content-between">
        <div class="col-md-6">
          <button
            type="button"
            class="btn-sm btn-mentoring py-1 position-relative me-3"
            :class="menus.submenu == '' ? 'btn-type-1' : ' btn-type-2'"
            @click="this.$router.push({ path: '/admin/mail/' })"
          >
            Error
            <span
              class="
                position-absolute
                top-0
                start-100
                translate-middle
                badge
                rounded-pill
                bg-primary
              "
              v-if="mails_count.error > 0"
            >
              {{ mails_count.error > 99 ? "99+" : mails_count.error }}
            </span>
          </button>
          <button
            type="button"
            class="btn-sm btn-mentoring py-1 position-relative me-3"
            :class="menus.submenu == 'success' ? 'btn-type-1' : ' btn-type-2'"
            @click="this.$router.push({ path: '/admin/mail/success' })"
          >
            Success
            <span
              class="
                position-absolute
                top-0
                start-100
                translate-middle
                badge
                rounded-pill
                bg-primary
              "
              v-if="mails_count.success > 0"
            >
              {{ mails_count.success > 99 ? "99+" : mails_count.success }}
            </span>
          </button>
        </div>

        <div class="col-md-3">
          <input-group>
            <input
              type="text"
              class="form-mentoring form-control w-100"
              v-model="search.name"
              @change="searchData"
              placeholder="Search"
              id="search"
            />
            <label for="search">Search</label>
          </input-group>
          <span
            class="badge bg-primary px-3 d-inline-block float-end mt-1"
            v-if="search.bar && search.name != ''"
          >
            {{ search.name }}
            <i class="fa-solid fa-close ms-3 pointer" @click="closeSearch"></i>
          </span>
        </div>
        <!-- <div class="col-md-6 text-md-end text-center">
        <button class="btn-mentoring btn-type-1 me-2">
          Sync Students Data
        </button>
        <button class="btn-mentoring btn-type-2">Add a New Student</button>
      </div> -->
      </div>

      <div class="table-responsive">
        <table class="table table-bordered align-middle table-hover">
          <thead>
            <tr class="text-center">
              <th>No</th>
              <th>Receiver</th>
              <th>Sender</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-center"
              v-for="(i, index) in mails.data"
              :key="index"
            >
              <td>{{ mails.from + index }}</td>
              <td>
                <i class="fa-regular fa-user fa-fw"></i> {{ i.recipient }}
              </td>
              <td><i class="fa-regular fa-user fa-fw"></i> {{ i.sender }}</td>
              <td>{{ i.subject }}</td>
              <td>
                <i class="fa-regular fa-calendar fa-fw"></i>
                {{ $customDate.date(i.date_sent) }}
              </td>
              <td class="pointer text-danger" @click="checkDetail(i)">
                <i class="fa-solid fa-triangle-exclamation fa-fw"></i>
                Error
              </td>
              <td class="pointer">
                <i
                  class="fa-solid fa-triangle-exclamation fa-fw"
                  @click="solveMail(i.id)"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-center" v-if="mails.from == null">
        <hr />
        <h6>Sorry, data is not found</h6>
      </div>
      <v-pagination :datas="mails" @result="getPage" />
    </div>

    <transition name="fade">
      <div class="" v-if="detail">
        <div class="vue-modal vue-modal-md">
          <h6>Error Description</h6>
          <hr class="my-0 mb-2" />
          <p>
            {{ detailData.error_message }}
          </p>
        </div>
        <div class="vue-modal-overlay" @click="detail = false"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "errorMail",
  props: {
    menus: Object,
    mails_count: Object,
  },
  data() {
    return {
      mails: [],
      detail: false,
      detalData: [],
      search: {
        bar: false,
        name: "",
      },
    };
  },
  methods: {
    checkDetail(i) {
      this.detailData = i;
      this.detail = true;
    },

    getData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/mail/log/error")
        .then((response) => {
          this.$alert.close();
          this.mails = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error);
        });
    },

    getPage(link) {
      this.$axios
        .get(link)
        .then((response) => {
          this.mails = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    solveMail(id) {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "update/mail/log/" + id)
        .then((response) => {
          // console.log(response.data);
          this.$emit("check", "");
          this.getData();
          this.$alert.toast("success", response.data.message);
        })
        .catch((error) => {
          console.log(error.response);
          this.$alert.toast("error", "Please try again.");
        });
    },

    searchData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/mail/log/error?keyword=" + this.search.name)
        .then((response) => {
          this.$alert.close();
          this.mails = response.data.data;
          this.search.bar = true;
          // console.log(response);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error);
        });
    },

    closeSearch() {
      this.search.bar = false;
      this.search.name = "";
      this.getData();
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
</style>