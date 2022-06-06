<template>
  <div id="dashboard" v-if="!loading">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-3 text-md-start text-center">
          <div class="picture">
            <div class="user-picture-overlay">
              <div class="row align-items-center h-100">
                <div class="col text-center user-picture-font">
                  <vue-feather type="camera" size="30"></vue-feather> <br />
                  Change <br />
                  Profile Picture
                </div>
              </div>
            </div>
            <img
              src="@/assets/img/saeka.webp"
              class="user-picture"
              alt="ALL-in Mentoring"
            />
          </div>
        </div>
        <div class="col-md-9 py-3 text-md-start text-center">
          <h5>Hello,</h5>
          <h2 class="user-name">Saeka</h2>
          <div class="user-desc d-md-block d-none">
            <div class="d-md-flex d-block">
              <div class="py-1 me-3">
                <vue-feather
                  size="25"
                  type="mail"
                  class="float-start mt-md-1 me-2"
                ></vue-feather>
                saeka@all-inedu.com
              </div>
              <div class="py-1">
                <vue-feather
                  size="25"
                  type="phone"
                  class="float-start mt-md-1 me-2"
                ></vue-feather>
                +62 8712492xxx
              </div>
            </div>
            <div class="d-md-flex d-block">
              <div class="py-1 me-3">
                <vue-feather
                  type="facebook"
                  stroke="blue"
                  class="float-start mt-md-1 me-1"
                ></vue-feather>
                saeka
              </div>
              <div class="py-1 me-3">
                <vue-feather
                  type="instagram"
                  stroke="#DB554A"
                  class="float-start mt-md-1 me-1"
                ></vue-feather>
                saeka
              </div>
              <div class="py-1">
                <vue-feather
                  type="linkedin"
                  stroke="#0A66C2"
                  class="float-start mt-md-1 me-1"
                ></vue-feather>
                saeka
              </div>
            </div>
          </div>

          <button class="btn btn-allin bg-primary mt-md-4">
            <router-link to="/user/my-profile">My Profile </router-link>
          </button>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <!-- Group Project  -->
      <div class="row row-cols-md-3 row-cols-1 align-items-stretch">
        <div class="col mb-2">
          <div class="card shadow h-100">
            <div class="card-body">
              <div class="text-center text-uppercase">Group Project</div>
              <div class="row">
                <div class="col-6 text-center border-end">
                  <div class="counts">10</div>
                  <div class="groups-status">Active</div>
                </div>
                <div class="col-6 text-center">
                  <div class="counts">10</div>
                  <div class="groups-status">Past</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-2">
          <div class="card shadow h-100">
            <div class="card-body text-center" style="padding-top: 8%">
              <div class="text-uppercase">Upcoming Meeting</div>
              <div class="counts">10</div>
            </div>
          </div>
        </div>
        <div class="col mb-2">
          <div class="card shadow h-100">
            <div class="card-body text-center" style="padding-top: 8%">
              <div class="text-uppercase">Meeting Request</div>
              <div class="counts">10</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-4">
      <!-- Uni List  -->
      <div class="row row-cols-md-4 row-cols-1 align-items-stretch">
        <!-- Applied  -->
        <div class="col mb-2">
          <div class="card shadow">
            <div class="card-body">
              <div class="float-end">
                <i class="fas fa-paper-plane"></i>
              </div>
              <h5 class="text-uppercase text-muted">Applied</h5>
              <hr class="mt-0 mb-2" />
              <div class="uni-list" v-for="i in 5" :key="i">
                <div class="float-start me-3 text-primary">
                  <i class="fa-regular fa-circle-right mt-1"></i>
                </div>
                Lorem Ipusmu {{ i }}
              </div>
            </div>
          </div>
        </div>

        <!-- Waitlisted  -->
        <div class="col mb-2">
          <div class="card shadow">
            <div class="card-body">
              <div class="float-end">
                <i class="fas fa-clock"></i>
              </div>
              <h5 class="text-uppercase text-muted">Waitlisted</h5>
              <hr class="mt-0 mb-2" />
              <div class="uni-list" v-for="i in 5" :key="i">
                <div class="float-start me-3 text-warning">
                  <i class="fa-regular fa-clock mt-1"></i>
                </div>
                Lorem Ipusmu {{ i }}
              </div>
            </div>
          </div>
        </div>

        <!-- Accepted  -->
        <div class="col mb-2">
          <div class="card shadow">
            <div class="card-body">
              <div class="float-end">
                <i class="fas fa-check"></i>
              </div>
              <h5 class="text-uppercase text-muted">Accepted</h5>
              <hr class="mt-0 mb-2" />
              <div class="uni-list" v-for="i in 5" :key="i">
                <div class="float-start me-3 text-success">
                  <i class="fa-regular fa-circle-check mt-1"></i>
                </div>
                Lorem Ipusmu {{ i }}
              </div>
            </div>
          </div>
        </div>

        <!-- Rejected  -->
        <div class="col mb-2">
          <div class="card shadow">
            <div class="card-body">
              <div class="float-end">
                <i class="fas fa-times"></i>
              </div>
              <h5 class="text-uppercase text-muted">Rejected</h5>
              <hr class="mt-0 mb-2" />
              <div class="uni-list" v-for="i in 5" :key="i">
                <div class="float-start me-3 text-danger">
                  <i class="fa-regular fa-circle-xmark mt-1"></i>
                </div>
                Lorem Ipusmu {{ i }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-4 mb-4">
      <div class="row">
        <div class="col">
          <div class="card shadow">
            <div class="card-body">
              <div class="text-uppercase">Todos</div>
              <hr class="my-2 mt-0" />
              <div class="todos" v-for="i in 5" :key="i">
                <div class="row align-items-center">
                  <div class="col-10">
                    <div class="d-flex align-items-center">
                      <div class="me-3">
                        <i
                          class="fa-solid fa-clock text-warning"
                          v-if="i < 5"
                        ></i>
                        <i
                          class="fa-solid fa-circle-check text-success"
                          v-if="i == 5"
                        ></i>
                      </div>
                      <div class="task">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam magni sit autem odit, a in maiores totam quas
                        quia Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Necessitatibus veniam explicabo,
                      </div>
                    </div>
                  </div>
                  <div class="col-2 text-end">24 July 2022</div>
                </div>
                <hr class="my-3 bg-info" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dashboard",
  props: {
    newTab: String,
    newLoading: Boolean,
  },
  components: {},
  data() {
    return {
      loading: true,
      tab: "",
    };
  },
  methods: {
    load(status) {
      this.loading = status;
    },
  },
  created() {
    document.title = "Your Dashboard";
    setTimeout(() => {
      this.load(false);
    }, 100);

    if (this.newTab) {
      this.tab = this.newTab;
    }
  },
};
</script>
<style scoped>
a {
  color: white !important;
  text-decoration: none !important;
}

#dashboard {
  padding-top: 40px;
  padding-bottom: 10px;
  min-height: 100vh;
  background: rgb(197, 225, 242);
  background: linear-gradient(
    20deg,
    rgba(197, 225, 242, 1) 0%,
    rgba(255, 255, 255, 0.9668242296918768) 57%
  );
}

.card {
  border-radius: 20px;
  border: 0;
}

.card-body .text-uppercase {
  font-size: 1.2em;
  font-weight: bold;
  color: rgb(99, 99, 99);
}

.counts {
  margin-top: 10px;
  margin-bottom: -10px;
  font-size: 1.5em;
  font-weight: bold;
}

.groups-status {
  font-size: 1.2em;
  color: #222672;
}

.user-picture {
  width: 15em;
  height: 15em;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
}

.user-picture-overlay {
  position: absolute;
  width: 15em;
  height: 15em;
  margin-top: 40;
  background: rgb(240, 171, 84);
  background: linear-gradient(
    180deg,
    rgba(240, 171, 84, 1) 10%,
    rgba(244, 200, 144, 1) 65%
  );
  border-radius: 50%;
  opacity: 0;
  transition: all 0.4s ease-in;
}

.picture:hover .user-picture-overlay {
  opacity: 1 !important;
  cursor: pointer;
}

.user-picture-font {
  font-size: 18px;
  font-weight: 500;
}

.user-name {
  font-size: 4.5em;
  font-weight: bold;
  letter-spacing: 0px;
  color: #223872;
  margin-top: -20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.user-desc {
  width: 70%;
  font-size: 1.4em;
}

.card-main {
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  color: #223872;
  position: relative;
  border-radius: 15px;
  z-index: 99;
}

.card-main:hover {
  background: #f0ab54;
  /* color: #fff; */
}

.user-main {
  margin-bottom: 10px;
}

.user-layout-picture {
  height: auto;
  overflow: hidden;
}

.user-main-picture {
  height: 150px;
  width: 100%;
  transition: transform 0.5s ease;
  object-fit: cover;
}

.user-main-picture:hover,
.card:hover .user-main-picture {
  transform: scale(1.2);
}

.dashboard-corner {
  width: 50%;
  position: relative;
  margin-top: -31%;
  margin-bottom: -40px;
  left: 50%;
  z-index: 98;
}

@media only screen and (max-width: 800px) {
  #dashboard {
    padding-bottom: 0;
  }

  .user-desc {
    width: 100%;
    font-size: 1.2em;
  }

  .dashboard-corner {
    width: 100%;
    left: 0%;
    margin-top: -400px;
    margin-bottom: -165px;
  }

  .user-picture-overlay {
    position: relative;
    margin-bottom: -15em;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
