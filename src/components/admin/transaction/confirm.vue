<template>
  <div id="confirm">
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
      <!-- {{ confirms }} -->
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
            <tr v-for="(i, index) in confirms.data" :key="index">
              <td>{{ confirms.from + index }}</td>
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
              <td @click="check = true">
                <vue-feather
                  type="search"
                  size="18"
                  class="float-start mt-1 me-3"
                ></vue-feather>
                Check
              </td>
              <td>
                <select
                  class="form-control form-mentoring"
                  @change="confirmPayment(i.id)"
                >
                  <option value="">Confirmation Need</option>
                  <option value="Confirmerd">Confirmed</option>
                </select>
              </td>
              <td>
                <a
                  :href="$base_url + 'transaction/' + i.trx_id + '/invoice'"
                  target="_blank"
                  class="btn btn-sm btn-outline-info me-2"
                >
                  <i class="fa-regular fa-file fa-fw"></i>Invoice
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-center" v-if="confirms.from == null">
          <hr />
          <h6>Sorry, data is not found</h6>
        </div>
        <v-pagination :datas="confirms.from" @result="getPage" />
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
      search: {
        bar: false,
        name: "",
      },
      confirms: [],
      check: false,
      report: "",
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(this.$url + "list/transaction/need-confirmation")
        .then((response) => {
          this.confirms = response.data.data;
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
          this.confirms = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    confirmPayment(i) {
      this.$axios
        .post(
          this.$url + "switch/transaction/paid",
          {
            transaction_id: i,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then(() => {
          this.$alert.toast("success", "Payment has been confirmed");
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    searchData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/transaction/paid?keyword=" + this.search.name)
        .then((response) => {
          this.$alert.close();
          this.paids = response.data.data;
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
.form-control {
  box-shadow: none;
}
</style>