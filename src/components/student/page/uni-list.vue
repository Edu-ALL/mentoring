<template>
  <div id="uniList">
    <!-- LIST  -->
    <div class="container mt-4">
      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <div class="row">
            <div class="col-12">
              <div class="pointer" style="top: 100px" @click="redirect">
                <h5 class="d-inline">University List</h5>
              </div>
            </div>
          </div>

          <!-- Tabs  -->
          <div class="row mt-3">
            <div class="col-12 menu-tab">
              <button
                class="btn-mentoring btn-sm mx-1"
                :class="
                  tab == '' || tab == 'waitlisted' ? 'btn-type-1' : 'btn-type-2'
                "
                @click="tab = 'waitlisted'"
              >
                Waitlisted
              </button>
              <button
                class="btn-mentoring btn-sm mx-1"
                :class="tab == 'applied' ? 'btn-type-1' : 'btn-type-2'"
                @click="tab = 'applied'"
              >
                Applied
              </button>
              <button
                class="btn-mentoring btn-sm mx-1"
                :class="tab == 'accepted' ? 'btn-type-1' : 'btn-type-2'"
                @click="tab = 'accepted'"
              >
                Accepted
              </button>
              <button
                class="btn-mentoring btn-sm mx-1"
                :class="tab == 'rejected' ? 'btn-type-1' : 'btn-type-2'"
                @click="tab = 'rejected'"
              >
                Rejected
              </button>
            </div>
          </div>

          <!-- Content  -->
          <div class="row mt-3 row-cols-md-4 row-cols-1">
            <div class="col mb-3" v-for="i in 5" :key="i">
              <div class="card border-1 shadow-sm card-uni">
                <div class="uni-icon">
                  <i class="fa-solid fa-clock" v-if="tab == 'waitlisted'"></i>
                  <i
                    class="fa-solid fa-paper-plane"
                    v-if="tab == 'applied'"
                  ></i>
                  <i
                    class="fa-solid fa-clipboard-check"
                    v-if="tab == 'accepted'"
                  ></i>
                  <i
                    class="fa-solid fa-file-circle-xmark"
                    v-if="tab == 'rejected'"
                  ></i>
                </div>
                <div class="card-body">
                  <div class="uni-name">
                    <h5 class="my-0">University Name</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- VIEW  -->
  </div>
</template>

<script>
export default {
  name: "uniList",
  components: {},
  data() {
    return {
      tab: "waitlisted",
    };
  },
  methods: {
    changeTab(tab) {
      this.tab = tab;
    },
  },
  created() {},
};
</script>

<style scoped>
.card-uni {
  position: relative;
  border-radius: 20px;
  height: 80px !important;
  transition: all 0.3s ease-in-out;
  color: #626262;
  cursor: pointer;
  border: 1px solid #e9e9e9;
}

.card-uni .card-body {
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
}

.uni-icon {
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 20px;
  color: #dddddd;
}

.uni-name {
  display: block;
  width: 100%;
}

.card-uni.active,
.card-uni:hover {
  background: #223872;
  color: #fff !important;
}
</style>