<template>
  <div id="successMail">
    <div class="row my-4">
      <div class="col-md-6 text-start">
        <input
          type="text"
          class="form-mentoring"
          v-model="search.name"
          @change="searchData"
          placeholder="Search"
        />
        <br />
        <span class="badge bg-primary px-3 d-inline-block" v-if="search.bar">
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
    <div class="card-white">
      <!-- {{ mails }} -->
      <div class="table-responsive">
        <table class="table align-middle table-hover">
          <thead>
            <tr class="text-center">
              <th>No</th>
              <th>Receiver</th>
              <th>Sender</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Status</th>
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
              <td class="pointer">
                <div
                  class="text-primary"
                  v-if="i.error_status"
                  @click="checkDetail(i)"
                >
                  <i class="fa-solid fa-triangle-exclamation fa-fw"></i>
                  Solved
                </div>
                <div class="text-success" v-if="!i.error_status">
                  <i class="fa-regular fa-circle-check fa-fw"></i>
                  Success
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-center" v-if="mails.from == null">
        <hr />
        <h6>Sorry, data is not found</h6>
      </div>
      <nav class="mt-2" v-if="mails.from != null">
        <ul class="pagination justify-content-center">
          <li class="page-item" v-if="mails.current_page != 1">
            <a class="page-link" @click="getPage(mails.links[0].url)">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </li>
          <div v-for="(i, index) in mails.last_page" :key="index">
            <li
              class="page-item"
              v-if="mails.current_page - 2 < i && mails.current_page + 2 > i"
            >
              <a
                class="page-link"
                :class="mails.current_page == i ? 'bg-primary text-white' : ''"
                href="#"
                @click="getPage(mails.path + '?page=' + i)"
                >{{ i }}</a
              >
            </li>
          </div>
          <li class="page-item" v-if="mails.current_page != mails.last_page">
            <a class="page-link" @click="getPage(mails.next_page_url)">
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
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
  name: "successMail",
  data() {
    return {
      mails: [],
      search: {
        bar: false,
        name: "",
      },
      detail: false,
      detalData: [],
    };
  },
  methods: {
    checkDetail(i) {
      this.detailData = i;
      this.detail = true;
    },

    getData() {
      this.$axios
        .get(this.$url + "list/mail/log/success")
        .then((response) => {
          this.mails = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
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

    searchData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/mail/log/success?keyword=" + this.search.name)
        .then((response) => {
          this.$alert.close();
          this.mails = response.data.data;
          this.search.bar = true;
          console.log(response);
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