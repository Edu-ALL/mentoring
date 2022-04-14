<template>
  <div id="home">
    <div class="row">
      <h5>Overview</h5>
      <div class="col-md-3">
        <div class="card h-card shadow-sm">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-4 text-center">
                <vue-feather type="user" class="h-ico"></vue-feather>
              </div>
              <div class="col-8">
                <div class="h-count">700</div>
                <div class="h-label">Students Total</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card h-card shadow-sm">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-4 text-center">
                <vue-feather type="phone-call" class="h-ico"></vue-feather>
              </div>
              <div class="col-8">
                <div class="h-count">700</div>
                <div class="h-label">1on1 Call</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <h5>Recent Activities</h5>
      <div class="col-md-6">
        <div class="card-white">
          <h6 class="act-title">
            <div class="float-end">Pending</div>
            <div class="">1on1 Call</div>
          </h6>
          <table class="table table-borderless">
            <tbody>
              <tr v-for="i in 3" :key="i">
                <td>Full Name</td>
                <td class="text-end">23 January 2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card-white">
          <h6 class="act-title">
            <div class="float-end">History</div>
            <div class="">1on1 Call</div>
          </h6>
          <table class="table table-borderless">
            <tbody>
              <tr class="align-middle" v-for="i in 3" :key="i">
                <td>Full Name</td>
                <td class="text-center">23 January 2022</td>
                <td class="text-end">
                  <button class="btn btn-sm btn-mentoring btn-type-1 m-0 py-1">
                    Result
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeMentor",


};

</script>

<style>
</style>