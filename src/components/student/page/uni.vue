<template>
  <div id="Uni">
    <div class="container mt-4">
      <div class="row g-3">
        <div class="col-md-3">
          <div class="card shadow-sm border-0 sticky-md-top uni-top">
            <div class="card-body">
              <h5>University</h5>
              <ul class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="university == 'shortlisted' ? 'active' : ''"
                  @click="univCheck('shortlisted')"
                >
                  <i class="bi bi-list-columns me-1"></i>
                  Shortlisted
                  <div class="float-end">
                    <i class="fa-solid fa-arrow-circle-right"></i>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="university == 'requirements' ? 'active' : ''"
                  @click="univCheck('requirements')"
                >
                  <i class="bi bi-card-checklist me-1"></i>
                  Requirements
                  <div class="float-end">
                    <i class="fa-solid fa-arrow-circle-right"></i>
                  </div>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <!-- University  -->
          <transition name="fade">
            <v-uni-list
              v-if="university == 'shortlisted' || university == ''"
            ></v-uni-list>
          </transition>

          <!-- Requirements  -->
          <transition name="fade">
            <v-uni-req v-if="university == 'requirements'"></v-uni-req>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Shortlisted from "@/components/student/page/uni/uni-list";
import Requirements from "@/components/student/page/uni/uni-req";

export default {
  name: "activity",
  components: {
    "v-uni-list": Shortlisted,
    "v-uni-req": Requirements,
  },
  data() {
    return {
      university: "shortlisted",
      menu: {
        menu: "",
        submenu: "",
        key: "",
        key2: "",
      },
    };
  },
  methods: {
    univCheck(data) {
      this.$router.push({ path: "/user/uni/" + data });
      this.university = data;
    },

    redirectUrl(i) {
      window.open(i, "_blank");
    },
  },
  watch: {
    $route(to) {
      this.menu.menu = to.params.menu;
      this.menu.submenu = to.params.submenu;
      this.menu.key = to.params.key;
      this.menu.key2 = to.params.key2;

      if (to.params.submenu) {
        this.university = to.params.submenu;
      } else {
        this.university = "meeting";
      }
    },
  },
  created() {
    this.menu.menu = this.$route.params.menu;
    this.menu.submenu = this.$route.params.submenu;
    this.menu.key = this.$route.params.key;
    this.menu.key2 = this.$route.params.key2;

    if (this.$route.params.submenu) {
      this.university = this.$route.params.submenu;
    }
  },
};
</script>

<style scoped>
.uni-top {
  top: 13vh;
}

.list-group-item {
  position: relative;
  background: #fff;
  border: 1px solid rgb(224, 224, 224);
  overflow: hidden;
}

.list-group-item .float-end {
  position: absolute;
  top: 10px;
  right: -100px;
  transition: all 0.3s;
}

.list-group-item:hover {
  background: #223872;
  border: 1px solid rgb(22, 39, 88);
  color: #fff;
}

.list-group-item.active .float-end,
.list-group-item:hover .float-end {
  top: 10px;
  right: 10px;
}

.list-group-item.active {
  background: #efa859;
  border: 1px solid #c5863f;
}

.content-card {
  border-radius: 10px;
  padding: 10px 20px;
  box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
}

.content-title {
  font-weight: 600;
  width: 100%;
  margin-bottom: 20px;
  font-size: 2em;
}
.content-desc {
  font-size: 1.2em;
  width: 80%;
}
.card-corner {
  position: absolute;
  width: 30% !important;
  bottom: -1px;
  right: -1px;
}

@media only screen and (max-width: 800px) {
  .uni-top {
    top: 0vh;
  }

  .content-card {
    padding: 10px;
  }
  .content-title {
    width: 100%;
    font-size: 1.3em;
    line-height: 1.5;
    margin-bottom: 15px;
  }
  .content-desc {
    width: 100%;
    font-size: 1em;
    text-align: justify;
  }
}
</style>