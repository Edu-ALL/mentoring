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
              <td>Full Name</td>
              <td>Events</td>
              <td>24 March 2022</td>
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
                  Invoice
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <nav class="mt-2">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link" href="#">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
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
      check: false,
      report: "",
    };
  },
};
</script>

<style scoped>
.form-control {
  box-shadow: none;
}
</style>