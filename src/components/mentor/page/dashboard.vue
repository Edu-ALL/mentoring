<template>
  <div id="dashboard">
    <div class="row border py-3 px-2">
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
                <h5 class="text-white">Meeting</h5>
                <div
                  class="
                    d-flex
                    text-white
                    align-items-center
                    justify-content-between
                  "
                >
                  <div>New Request</div>
                  <h6 class="my-0 text-end">8</h6>
                </div>
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
                <h5 class="text-white">Meeting</h5>
                <div
                  class="
                    d-flex
                    text-white
                    align-items-center
                    justify-content-between
                  "
                >
                  <div>Upcoming</div>
                  <h6 class="my-0 text-end">8</h6>
                </div>
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
                <h5 class="text-white">Group Meeting</h5>
                <div
                  class="
                    d-flex
                    text-white
                    align-items-center
                    justify-content-between
                  "
                >
                  <div>Upcoming</div>
                  <h6 class="my-0 text-end">8</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2 border py-3 px-2">
      <h5>Recent Activities</h5>
      <div class="col-md-6">
        <div class="card-white">
          <h6 class="act-title text-secondary">
            <div class="float-end">Request</div>
            <div class="">Meetings</div>
          </h6>
          <table class="table">
            <tbody>
              <tr v-for="i in 3" :key="i" class="py-0">
                <td>Full Name</td>
                <td class="text-center">23 January 2022</td>
                <td class="text-end">
                  <button
                    class="
                      btn-mentoring btn-outline-success btn-sm
                      py-1
                      px-3
                      mx-1
                    "
                  >
                    Accept
                  </button>
                  <button
                    class="
                      btn-mentoring btn-outline-danger btn-sm
                      py-1
                      px-3
                      mx-1
                    "
                  >
                    Reject
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="card-white mt-2">
          <h6 class="act-title text-secondary">
            <div class="float-end">Upcoming</div>
            <div class="">Meetings</div>
          </h6>
          <table class="table">
            <tbody>
              <tr v-for="i in 3" :key="i" class="py-0">
                <td>Full Name</td>
                <td class="text-center">23 January 2022</td>
                <td class="text-end">
                  <button class="btn-mentoring btn-primary btn-sm py-1 px-3">
                    Join
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card-white">
          <h6 class="act-title text-secondary">
            <div class="float-end">Attendance</div>
            <div class="">Group Meetings</div>
          </h6>
          <table class="table">
            <tbody>
              <tr v-for="i in 3" :key="i" class="py-0">
                <td>Group Name</td>
                <td class="text-center">23 January 2022</td>
                <td class="text-end">
                  <button
                    class="btn-mentoring btn-outline-success btn-sm py-1 px-3"
                  >
                    Yes
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="card-white mt-2">
          <h6 class="act-title text-secondary">
            <div class="float-end">Upcoming</div>
            <div class="">Group Meetings</div>
          </h6>
          <table class="table">
            <tbody>
              <tr v-for="i in 3" :key="i" class="py-0">
                <td>Group Name</td>
                <td class="text-center">23 January 2022</td>
                <td class="text-end">
                  <button class="btn-mentoring btn-primary btn-sm py-1 px-3">
                    Join
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
  name: "mentorDashboard",
};
</script>

<style>
</style>