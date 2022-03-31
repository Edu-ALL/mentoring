<template>
  <div id="pending">
    <div class="row mb-4">
      <div class="col-md-6 text-start">
        <input type="text" class="form-mentoring" placeholder="Search" />
      </div>
    </div>
    <div class="row">
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
            <tr v-for="i in 10" :key="i">
              <td>{{ i }}</td>
              <td>Full Name</td>
              <td>Events</td>
              <td>
                <i class="fa-regular fa-calendar fa-fw"></i>
                24 March 2022
              </td>
              <td class="text-warning">
                <i class="fa-regular fa-clock fa-fw"></i> Pending
              </td>
              <td>
                <button
                  class="btn btn-sm btn-outline-info me-2"
                  @click="report = 'invoice'"
                >
                  <i class="fa-regular fa-file fa-fw"></i>
                  Invoice
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <nav class="mt-2">
          <ul class="pagination justify-content-center">
            <li class="page-item" v-if="pendings.current_page != 1">
              <a class="page-link" @click="getPage(pendings.links[0].url)">
                <i class="fa-solid fa-chevron-left"></i>
              </a>
            </li>
            <div v-for="i in pendings.last_page" :key="i">
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
      pendings: [],
      report: "",
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(this.$url + "list/transaction/pending", {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.pendings = response.data.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getPage(link) {
      this.$axios
        .get(link, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.pendings = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
</style>