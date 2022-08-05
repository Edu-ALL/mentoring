<template>
  <div id="paid">
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
      <!-- {{ paids }} -->
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
            <tr v-for="(i, index) in paids.data" :key="index">
              <td>{{ paids.from + index }}</td>
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
              <td style="text-transform: capitalize">{{ i.status }}</td>
              <td>
                <!-- <a
                  :href="$base_url + 'transaction/' + i.trx_id + '/invoice'"
                  target="_blank"
                  class="btn btn-sm btn-outline-info me-2"
                >
                  <i class="fa-regular fa-file fa-fw"></i>
                  Invoice
                </a> -->
                <a
                  :href="$base_url + 'transaction/' + i.trx_id + '/receipt'"
                  target="_blank"
                  class="btn btn-sm btn-outline-success"
                >
                  <i class="fa-regular fa-file fa-fw"></i>
                  Receipt
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-center" v-if="paids.from == null">
          <hr />
          <h6>Sorry, data is not found</h6>
        </div>
        <v-pagination :datas="paids.from" @result="getPage" />
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
      <div class="" v-if="report != ''">
        <div class="vue-modal vue-modal-lg">
          <v-invoice v-if="report == 'invoice'" />
          <v-receipt v-if="report == 'receipt'" />
        </div>
        <div class="vue-modal-overlay" @click="report = ''"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import Invoice from "@/components/admin/transaction/report/invoice";
import Receipt from "@/components/admin/transaction/report/receipt";

export default {
  name: "paid",
  components: {
    "v-invoice": Invoice,
    "v-receipt": Receipt,
  },
  data() {
    return {
      search: {
        bar: false,
        name: "",
      },
      paids: [],
      check: false,
      report: "",
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(this.$url + "list/transaction/paid")
        .then((response) => {
          this.paids = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getPage(link) {
      this.$axios
        .get(link)
        .then((response) => {
          this.paids = response.data.data;
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
.form-control,
.btn {
  box-shadow: none;
}
</style>