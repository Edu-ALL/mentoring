<template>
  <div id="uniList">
    <!-- LIST  -->
    <div class="container mt-4">
      <div class="row">
        <div class="col-12">
          <div class="ps-3 pointer" style="top: 100px" @click="redirect">
            <i class="fa-solid fa-arrow-left me-2"></i>
            <h5 class="d-inline">University List</h5>
          </div>
        </div>
      </div>

      <transition name="fade">
        <div
          class="row mt-2 row-cols-md-4 row-cols-1"
          v-if="menu.submenu == ''"
        >
          <div class="col mb-3" v-for="i in 5" :key="i">
            <div class="card border-0 shadow card-uni" @click="detail(i)">
              <div class="card-body">
                <div class="uni-name">
                  <h5 class="text-muted my-0">University Name</h5>
                  <div class="badge bg-primary rounded-pill">Applied</div>
                </div>
                <div class="uni-progress">
                  <div class="progress" style="height: 20px">
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      style="width: 50%"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div class="float-start">
                    <small>Progression</small>
                  </div>
                  <div class="float-end">5/10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <transition name="fade">
        <div class="row mt-2" v-if="menu.submenu != ''">
          <div class="col-md-3 mb-3 sidebar">
            <div class="mb-3" v-for="i in 5" :key="i">
              <div
                class="card border-0 shadow card-uni"
                :class="menu.key == i ? 'active' : ''"
                @click="detail(i)"
              >
                <div class="card-body">
                  <div class="uni-name">
                    <h5 class="text-muted my-0">University Name</h5>
                    <div class="badge bg-primary rounded-pill">Applied</div>
                  </div>
                  <div class="uni-progress">
                    <div class="progress" style="height: 20px">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style="width: 50%"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="float-start">
                      <small>Progression</small>
                    </div>
                    <div class="float-end">5/10</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <v-view v-if="menu.submenu == 'applied'"></v-view>
          </div>
        </div>
      </transition>
    </div>

    <!-- VIEW  -->
  </div>
</template>

<script>
import View from "@/components/student/page/unilist-detail/view";

export default {
  name: "uniList",
  components: {
    "v-view": View,
  },
  data() {
    return {
      menu: {
        menu: "",
        submenu: "",
        key: "",
      },
    };
  },
  methods: {
    detail(i) {
      this.$router.push({ path: "/user/uni-list/applied/" + i });
    },
  },
  watch: {
    $route(to) {
      this.menu.menu = to.params.menu;
      this.menu.submenu = to.params.submenu;
      this.menu.key = to.params.key;
    },
  },
  created() {
    this.menu.menu = this.$route.params.menu;
    this.menu.submenu = this.$route.params.submenu;
    this.menu.key = this.$route.params.key;
  },
};
</script>

<style scoped>
.card-uni {
  border-radius: 20px;
  cursor: pointer;
}

.uni-name {
  min-height: 110px;
  display: block;
  margin-bottom: 15px;
}

.uni-progress {
  position: absolute;
  width: 90%;
  margin: 5%;
  left: 0;
  bottom: 0;
}

.card-uni {
  transition: all 0.3s ease-in-out;
}

.card-uni.active,
.card-uni:hover {
  background: #e0dfed;
}

.sidebar {
  height: 80vh;
  overflow: auto;
}

@media only screen and (max-width: 600px) {
  .sidebar {
    width: 90%;
    height: auto;
    margin: 0 5%;
    padding: 0 5%;
    display: flex;
    overflow: auto;
  }

  .sidebar .card-uni {
    min-width: 280px;
    margin-right: 15px;
  }
}

/* Scrollbar */
/* width */
.sidebar::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

/* Track */
.sidebar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.sidebar::-webkit-scrollbar-thumb {
  background: rgb(140, 147, 210);
  transition: all 0.3s ease-in-out;
  border-radius: 20px;
}

/* Handle on hover */
.sidebar::-webkit-scrollbar-thumb:hover {
  background: rgb(49, 89, 145);
}
</style>