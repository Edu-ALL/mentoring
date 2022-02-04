<template>
  <div id="activity">
    <div class="container my-5">
      <div class="row g-3">
        <div class="col-md-3">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <h5>Activity</h5>
              <ul class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="activity == '1on1' ? 'active' : ''"
                  @click="activityCheck('1on1')"
                >
                  1 on 1 Call
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="activity == 'webinar' ? 'active' : ''"
                  @click="activityCheck('webinar')"
                  >Webinar</a
                >
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="activity == 'transaction' ? 'active' : ''"
                  @click="activityCheck('transaction')"
                >
                  Transaction
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="card shadow-sm border-0">
            <!-- 1on1 Call  -->
            <transition name="fade">
              <div class="card-body" v-if="activity == '1on1'">
                <b class="text-primary">1 on 1 Call History</b>
                <hr class="my-1" />
                <div class="table-responsive">
                  <table class="table align-middle">
                    <thead>
                      <tr class="text-center">
                        <th>No</th>
                        <th>Call with</th>
                        <th>Category</th>
                        <th>Date & Time</th>
                        <th>Status</th>
                        <th>Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="text-center">
                        <td>1</td>
                        <td>Devi Kasih</td>
                        <td>Life Skill - Mentor</td>
                        <td>
                          <small>
                            20 Feburary 2022 <br />
                            14.00 WIB
                          </small>
                        </td>
                        <td>Waiting</td>
                        <td>-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </transition>

            <!-- Webinar  -->
            <transition name="fade">
              <div class="card-body" v-if="activity == 'webinar'">
                <b class="text-primary">Webinar History</b>
                <hr class="my-1" />
                <div class="table-responsive">
                  <table class="table align-middle">
                    <thead>
                      <tr class="text-center">
                        <th>No</th>
                        <th>Topic</th>
                        <th>Category</th>
                        <th>Date & Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="text-center">
                        <td>1</td>
                        <td>Career Meetup 101</td>
                        <td>Career Exploration</td>
                        <td>
                          <small>
                            20 Feburary 2022 <br />
                            14.00 WIB
                          </small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </transition>

            <!-- Transaction  -->
            <transition name="fade">
              <div class="card-body" v-if="activity == 'transaction'">
                <b class="text-primary">Transaction History</b>
                <hr class="my-1" />
                <div class="table-responsive">
                  <table class="table align-middle">
                    <thead>
                      <tr class="text-center">
                        <th>No</th>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="text-center">
                        <td>1</td>
                        <td>Subscription</td>
                        <td>1 Month</td>
                        <td>
                          <small> 1 Feburary 2022 - 1 March 2022 </small>
                        </td>
                        <td>Paid</td>
                        <td>
                          <button class="btn btn-allin bg-secondary btn-sm">
                            View
                          </button>
                        </td>
                      </tr>
                      <tr class="text-center">
                        <td>1</td>
                        <td>Add-Ons</td>
                        <td>1 on 1 Call</td>
                        <td>
                          <small> 20 Feburary 2022 </small>
                        </td>
                        <td>Pending</td>
                        <td>
                          <button class="btn btn-allin bg-secondary btn-sm">
                            View
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "activity",
  data() {
    return {
      activity: "1on1",
    };
  },
  methods: {
    activityCheck(data) {
      this.activity = data;
    },
  },
  created() {},
};
</script>