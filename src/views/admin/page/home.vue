<template>
  <div id="home">
    <div class="container mt-4">
      <div class="row row-cols-md-4 row-cols-2 g-md-5 g-2">
        <div class="col">
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
        <div class="col">
          <div class="card h-card shadow-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-4 text-center">
                  <vue-feather type="user" class="h-ico"></vue-feather>
                </div>
                <div class="col-8">
                  <div class="h-count">{{ users.mentor }}</div>
                  <div class="h-label">Mentors Total</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-card shadow-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-4 text-center">
                  <vue-feather type="user" class="h-ico"></vue-feather>
                </div>
                <div class="col-8">
                  <div class="h-count">{{ users.editor }}</div>
                  <div class="h-label">Editors Total</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-card shadow-sm">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-4 text-center">
                  <vue-feather type="user" class="h-ico"></vue-feather>
                </div>
                <div class="col-8">
                  <div class="h-count">{{ users.alumni }}</div>
                  <div class="h-label">Alumni Total</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-md-5 g-2 mt-2">
        <div class="col-12">
          <h5>Recent Activities</h5>
          <hr />
          <div
            class="row row-cols-md-2 row-cols-1 g-md-4 g-2 align-items-stretch"
          >
            <div class="col">
              <div class="card card-act border-0 px-2 py-3 h-100">
                <v-1on1></v-1on1>
              </div>
            </div>
            <div class="col">
              <div class="card card-act border-0 px-2 py-3 h-100">
                <v-transaction></v-transaction>
              </div>
            </div>
            <div class="col">
              <div class="card card-act border-0 px-2 py-3 h-100">
                <v-webinar></v-webinar>
              </div>
            </div>
            <div class="col">
              <div class="card card-act border-0 px-2 py-3 h-100">
                <v-event></v-event>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Call from "@/components/admin/home/1on1";
import Transaction from "@/components/admin/home/transaction";
import Webinar from "@/components/admin/home/webinar.vue";
import Event from "@/components/admin/home/event.vue";

export default {
  name: "adminHome",
  components: {
    "v-1on1": Call,
    "v-transaction": Transaction,
    "v-webinar": Webinar,
    "v-event": Event,
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
        .get(this.$url + "overview/admin/total", {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
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