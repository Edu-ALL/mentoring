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
                  <div class="h-count">700</div>
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
                  <div class="h-count">700</div>
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
                  <div class="h-count">700</div>
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
                  <div class="h-count">700</div>
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
          <div class="row row-cols-md-2 row-cols-1 g-md-4 g-2">
            <div class="col">
              <div class="card card-act border-0 px-2 py-3">
                <v-1on1></v-1on1>
              </div>
            </div>
            <div class="col">
              <div class="card card-act border-0 px-2 py-3">
                <v-transaction></v-transaction>
              </div>
            </div>
            <div class="col">
              <div class="card card-act border-0 px-2 py-3">
                <v-webinar></v-webinar>
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

export default {
  name: "adminHome",
  components: {
    "v-1on1": Call,
    "v-transaction": Transaction,
    "v-webinar": Webinar,
  },
  data() {
    return {};
  },
  created() {},
};
</script>
<style>
.act-title {
  color: #223872;
  padding-left: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(226, 226, 226);
}
</style>
<style scoped>
.h-card {
  background: #efa859;
  border-radius: 15px;
  border: 0;
  padding: 5px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.h-card:hover {
  background: #223872;
}

.h-ico {
  color: #fff;
  width: 40px;
}

.h-count {
  font-size: 1.2em;
  color: #fff;
}

.h-label {
  font-size: 1em;
  color: #fff;
}

.card-act {
  border-radius: 15px;
}

@media only screen and (max-width: 800px) {
  .h-ico {
    width: 25px;
  }

  .h-count {
    font-size: 0.9em;
  }

  .h-label {
    font-size: 0.8em;
  }
}
</style>