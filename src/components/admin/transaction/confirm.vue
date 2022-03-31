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
              <th>Proof of Payment</th>
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
                <i class="fa-regular fa-calendar fa-fw"></i> 24 March 2022
              </td>
              <td @click="check = true">
                <vue-feather
                  type="search"
                  size="18"
                  class="float-start mt-1 me-3"
                ></vue-feather>
                Check
              </td>
              <td>
                <select name="" class="form-control form-mentoring" id="">
                  <option value="">Confirmation Need</option>
                  <option value="Confirmerd">Confirmed</option>
                </select>
              </td>
              <td>
                <button
                  class="btn btn-sm btn-outline-info me-2"
                  @click="report = 'invoice'"
                >
                  <i class="fa-regular fa-file fa-fw"></i>Invoice
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <nav class="mt-2">
          <ul class="pagination justify-content-center">
            <li class="page-item" v-if="confirms.current_page != 1">
              <a class="page-link" @click="getPage(confirms.links[0].url)">
                <i class="fa-solid fa-chevron-left"></i>
              </a>
            </li>
            <div v-for="i in confirms.last_page" :key="i">
              <li
                class="page-item"
                v-if="
                  confirms.current_page - 2 < i && confirms.current_page + 2 > i
                "
              >
                <a
                  class="page-link"
                  :class="
                    confirms.current_page == i ? 'bg-primary text-white' : ''
                  "
                  href="#"
                  @click="getPage(confirms.path + '?page=' + i)"
                  >{{ i }}</a
                >
              </li>
            </div>
            <li
              class="page-item"
              v-if="confirms.current_page != confirms.last_page"
            >
              <a class="page-link" @click="getPage(confirms.next_page_url)">
                <i class="fa-solid fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <transition name="fade">
      <div class="p-3" v-if="check">
        <div class="vue-modal vue-modal-md">
          <h6>Proof of Payment</h6>
          <hr />
          <img src="https://picsum.photos/500" class="w-100" alt="" />
        </div>
        <div class="vue-modal-overlay" @click="check = false"></div>
      </div>
    </transition>

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
  name: "confirm",
  components: {
    "v-invoice": Invoice,
  },
  data() {
    return {
      confirms: [],
      check: false,
      report: "",
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(this.$url + "list/transaction/need-confirmation", {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.confirms = response.data.data;
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
          this.confirms = response.data.data;
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
.form-control {
  box-shadow: none;
}
</style>