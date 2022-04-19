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
                <div class="h-count">{{ users.student }}</div>
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
                <div class="h-count">{{ users.activities }}</div>
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
            <div class="float-end">Status</div>
            <div class="">1on1 Call</div>
          </h6>
          <table class="table table-borderless">
            <tbody>
              <v-1on1-waiting></v-1on1-waiting>
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
              <v-1on1-history></v-1on1-history>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import History from "@/components/mentor/home/1on1-history";
import Waiting from "@/components/mentor/home/1on1-waiting";
export default {
  name: "homeMentor",
  components: {
    "v-1on1-history": History,
    "v-1on1-waiting": Waiting,
},
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getusers() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "overview/mentor/total", {
          headers: {
            Authorization: "Bearer " + this.$mentorToken,
          },
        })
        .then((response) => {
          this.$alert.close();
          this.users = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error.response.data);
        });
    },
  },
  created() {
    this.getusers();
  },
};

</script>

<style>
</style>