<template>
  <div id="group">
    <div class="container my-4">
      <!-- List  -->
      <div
        class=""
        v-if="
          menu.menu == 'my-activity' &&
          menu.submenu == 'group' &&
          menu.key == '' &&
          menu.key2 == ''
        "
      >
        <div class="row">
          <div class="col-12">
            <div class="ps-3 pointer" style="top: 100px" @click="redirect">
              <h5 class="d-inline">Groups</h5>
            </div>
          </div>
        </div>

        <!-- Tabs  -->
        <div class="row mt-3">
          <div class="col-md-9 col-8 menu-tab">
            <button
              class="btn-mentoring btn-sm mx-1 py-1"
              :class="tab == 'request' ? 'btn-type-1' : 'btn-type-2'"
              @click="tab = 'request'"
            >
              New Request
            </button>
            <button
              class="btn-mentoring btn-sm mx-1 py-1"
              :class="
                tab == '' || tab == 'progress' ? 'btn-type-1' : 'btn-type-2'
              "
              @click="tab = 'progress'"
            >
              In Progress
            </button>
            <button
              class="btn-mentoring btn-sm mx-1 py-1"
              :class="tab == 'completed' ? 'btn-type-1' : 'btn-type-2'"
              @click="tab = 'completed'"
            >
              Completed
            </button>
          </div>
          <div class="col-md-3 col-4 text-end">
            <button
              class="btn-mentoring btn-sm btn-type-3 mx-1"
              @click="modal = 'add'"
            >
              <i class="fa-solid fa-add"></i>
            </button>
          </div>
        </div>

        <!-- Content  -->
        <div class="row mt-2">
          <div class="col">
            <div class="card border-0 shadow">
              <transition name="fade">
                <v-request v-if="tab == 'request'"></v-request>
              </transition>
              <transition name="fade">
                <v-progress
                  v-if="tab == '' || tab == 'progress'"
                  :check="modal"
                  @modal="checkModal"
                ></v-progress>
              </transition>
              <transition name="fade">
                <v-complete v-if="tab == 'completed'"></v-complete>
              </transition>
            </div>
          </div>
        </div>
      </div>

      <!-- View Detail  -->
      <v-view
        :menu="menu"
        v-if="
          menu.menu == 'my-activity' &&
          menu.submenu == 'group' &&
          menu.key != ''
        "
      ></v-view>
    </div>

    <!-- MODAL  -->
    <div
      class="vue-modal-overlay"
      v-if="modal != '' || alert != ''"
      @click="modal = ''"
    ></div>
    <transition name="pop">
      <div class="vue-modal vue-modal-lg" v-if="modal == 'add'">
        <v-add @modal="checkModal" @data="checkData"></v-add>
      </div>
    </transition>

    <transition name="pop">
      <div class="vue-modal vue-modal-md" v-if="alert == 'new-group'">
        <div class="text-center">
          <i class="fa-solid fa-check-circle fa-2xl text-success"></i>
          <h5 class="mt-2 mb-3">Group successfully created !</h5>
        </div>
        <div class="text-center" v-if="group_data.error">
          <div class="text-danger">* Notes</div>
          {{ group_data.error?.exists }}
          {{ group_data.error?.joined }}
        </div>

        <div class="row justify-content-center mt-3">
          <div class="col-3 text-center">
            <button
              class="btn btn-mentoring bg-primary w-100"
              @click="alert = ''"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// import Multiselect from "vue-multiselect";

import Request from "@/components/student/page/activity/group-detail/request";
import Progress from "@/components/student/page/activity/group-detail/progress";
import Complete from "@/components/student/page/activity/group-detail/complete";
import Add from "@/components/student/page/activity/group-detail/add";
import View from "@/components/student/page/activity/group-detail/view";

export default {
  name: "groups",
  components: {
    "v-request": Request,
    "v-progress": Progress,
    "v-complete": Complete,
    "v-add": Add,
    "v-view": View,
  },
  data() {
    return {
      tab: "",
      modal: "",
      alert: "",
      menu: {
        menu: "",
        submenu: "",
        key: "",
        key2: "",
      },
      group_data: [],
    };
  },
  methods: {
    checkModal(i) {
      this.modal = i;
    },

    checkData(i) {
      this.group_data = i;
      this.alert = "new-group";
      this.modal = "new-group";
    },

    redirect() {
      this.$router.push({ path: "/user" });
    },
  },
  watch: {
    $route(to) {
      this.menu.menu = to.params.menu;
      this.menu.submenu = to.params.submenu;
      this.menu.key = to.params.key;
      this.menu.key2 = to.params.key2;
    },
  },
  created() {
    this.menu.menu = this.$route.params.menu;
    this.menu.submenu = this.$route.params.submenu;
    this.menu.key = this.$route.params.key;
    this.menu.key2 = this.$route.params.key2;
  },
};
</script>
<style scoped>
a {
  color: white !important;
  text-decoration: none !important;
}

label {
  width: 100%;
}

label::after {
  content: "";
}

.card-input-element {
  display: none;
}

.card-input {
  width: 100%;
  background: #fff;
  border: 3px solid #fff;
  color: #223872;
  text-align: center;
  border-radius: 20px;
  padding: 5px;
  height: 65px;
  display: flex;
  align-items: center;
}

.panel-heading {
  width: 100%;
  display: block;
  font-size: 1.2em;
  line-height: 1em;
  text-align: center;
}

.card-input:hover {
  cursor: pointer;
}

.card-input-element:checked + .card-input {
  border: 3px solid #fff;
  color: #fff;
  background: #223872;
}
</style>