<template>
  <div id="pending">
    <div class="row mb-4">
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
    </div>
    <div class="row">
      <!-- {{ pendings }} -->
      <div class="col">
        <table class="table table-hover pointer">
          <thead>
            <tr>
              <th width="1%">No</th>
              <th>Full Name</th>
              <th>Service</th>
              <th>Date</th>
              <th>Status</th>
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i, index) in pendings.data" :key="index">
              <td>{{ pendings.from + index }}</td>
              <td>
                {{
                  i.student_activities.students.first_name +
                  " " +
                  i.student_activities.students.last_name
                }}
              </td>
              <td>
                <div v-if="!i.student_activities.programme_details">
                  {{ i.student_activities.prog_id == 1 ? "1on1 Call" : "" }}
                </div>
                <div v-if="i.student_activities.programme_details">
                  {{ i.student_activities.programme_details.dtl_name }}
                </div>
              </td>
              <td>
                <i class="fa-regular fa-calendar fa-fw"></i>
                {{ $customDate.date(i.created_at) }}
              </td>
              <td class="text-warning">
                <i class="fa-regular fa-clock fa-fw"></i> {{ i.status }}
              </td>
              <td>
                <!-- @click="report = 'invoice'" -->
                <a
                  :href="$base_url + 'transaction/' + i.trx_id + '/invoice'"
                  target="_blank"
                  class="btn btn-sm btn-outline-info me-2"
                >
                  <i class="fa-regular fa-file fa-fw"></i>
                  Invoice
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-center" v-if="pendings.from == null">
          <hr />
          <h6>Sorry, data is not found</h6>
        </div>
        <nav class="mt-2" v-if="pendings.from != null">
          <ul class="pagination justify-content-center">
            <li class="page-item" v-if="pendings.current_page != 1">
              <a class="page-link" @click="getPage(pendings.links[0].url)">
                <i class="fa-solid fa-chevron-left"></i>
              </a>
            </li>
            <div v-for="(i, index) in pendings.last_page" :key="index">
              <li
                class="page-item"
                v-if="
                  pendings.current_page - 2 < i && pendings.current_page + 2 > i
                "
              >
                <a
                  class="page-link"
                  :class="
                    pendings.current_page == i ? 'bg-primary text-white' : ''
                  "
                  href="#"
                  @click="getPage(pendings.path + '?page=' + i)"
                  >{{ i }}</a
                >
              </li>
            </div>
            <li
              class="page-item"
              v-if="pendings.current_page != pendings.last_page"
            >
              <a class="page-link" @click="getPage(pendings.next_page_url)">
                <i class="fa-solid fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <transition name="fade">
      <div class="" v-if="report == 'invoice'">
        <div class="vue-modal vue-modal-lg">
          <v-invoice />
        </div>
        <div class="vue-modal-overlay" @click="report = ''"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import Invoice from "@/components/admin/transaction/report/invoice";
export default {
  name: "pending",
  components: {
    "v-invoice": Invoice,
  },
  data() {
    return {
      search: {
        bar: false,
        name: "",
      },
      pendings: [],
      report: "",
    };
  },
  methods: {
    getData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/transaction/pending")
        .then((response) => {
          this.$alert.close();
          this.pendings = response.data.data;
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
          this.pendings = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    searchData() {
      this.$alert.loading();
      this.$axios
        .get(
          this.$url + "list/transaction/pending?keyword=" + this.search.name,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          this.$alert.close();
          this.pendings = response.data.data;
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

<style scoped>
</style>