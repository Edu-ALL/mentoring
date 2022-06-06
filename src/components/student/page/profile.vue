<template>
  <div id="profile">
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <div class="ps-3" style="top: 100px">
            <i class="fa-solid fa-arrow-left me-2"></i>
            <h5 class="d-inline">My Profile</h5>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <div class="row">
                <div class="col-md-4 mb-3">
                  <ul
                    class="list-group sticky-top"
                    style="top: 135px; z-index: 100"
                  >
                    <a
                      href="#info"
                      class="list-group-item list-group-item-action"
                      :class="section == 'info' ? 'active' : ''"
                      @click="section = 'info'"
                    >
                      Personal Information
                    </a>
                    <a
                      href="#sosmed"
                      class="list-group-item list-group-item-action"
                      :class="section == 'sosmed' ? 'active' : ''"
                      @click="section = 'sosmed'"
                    >
                      Social Media
                    </a>
                    <a
                      href="#interest"
                      class="list-group-item list-group-item-action"
                      :class="section == 'interest' ? 'active' : ''"
                      @click="section = 'interest'"
                    >
                      Interest
                    </a>
                    <a
                      href="#competition"
                      class="list-group-item list-group-item-action"
                      :class="section == 'competition' ? 'active' : ''"
                      @click="section = 'competition'"
                    >
                      Competition
                    </a>
                    <a
                      href="#academic"
                      class="list-group-item list-group-item-action"
                      :class="section == 'academic' ? 'active' : ''"
                      @click="section = 'academic'"
                    >
                      Academic
                    </a>
                    <a
                      href="#"
                      :class="modal == 'change-password' ? 'active' : ''"
                      @click="modal = 'change-password'"
                      class="list-group-item list-group-item-action"
                    >
                      Change Password
                    </a>
                  </ul>
                </div>
                <div class="col-md-8">
                  <v-personal></v-personal>
                  <v-sosmed></v-sosmed>
                  <v-interest @check-delete="checkDelete"></v-interest>
                  <v-competition @check-delete="checkDelete"></v-competition>
                  <v-academic @check-delete="checkDelete"></v-academic>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
    <transition name="pop">
      <div class="vue-modal vue-modal-sm" v-if="modal == 'change-password'">
        <h5>Change Password</h5>
        <hr class="my-0" />
        <div class="row">
          <div class="col-md-12">
            <div class="mb-2 mt-3">
              <small>New Password</small>
              <input type="text" name="" class="form-mentoring w-100" />
            </div>
          </div>
          <div class="col-md-12">
            <div class="mb-4">
              <small>Confirm Password</small>
              <input type="text" name="" class="form-mentoring w-100" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <button
              class="btn-mentoring btn-warning btn-sm"
              @click="modal = ''"
            >
              Cancel
            </button>
          </div>
          <div class="col-md-6 text-end">
            <button class="btn-mentoring btn-outline-success btn-sm">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- delete  -->
    <transition name="pop">
      <div class="vue-modal vue-modal-sm bg-primary" v-if="modal == 'delete'">
        <div class="text-center">
          <i class="fa-solid fa-circle-exclamation fa-2xl"></i>
          <h5 class="mt-2">Are you sure to delete?</h5>
          <div class="mt-3">
            <button
              class="btn-mentoring btn-warning btn-sm py-1 mx-1"
              @click="modal = ''"
            >
              Cancel</button
            ><button
              class="btn-mentoring btn-outline-success btn-sm py-1 mx-1"
              @click="deleteProcess"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import personal from "@/components/student/page/profile-detail/personal-info";
import sosmed from "@/components/student/page/profile-detail/sosmed";
import interest from "@/components/student/page/profile-detail/interest";
import competition from "@/components/student/page/profile-detail/competition";
import academic from "@/components/student/page/profile-detail/academic";

export default {
  name: "profile",
  components: {
    "v-personal": personal,
    "v-sosmed": sosmed,
    "v-interest": interest,
    "v-competition": competition,
    "v-academic": academic,
  },
  data() {
    return {
      section: "info",
      modal: "",
      deleteUrl: "",
    };
  },
  methods: {
    checkDelete(i) {
      if (i) {
        this.modal = "delete";
        this.deleteUrl = i;
      } else {
        this.deleteUrl = "";
      }
    },

    deleteProcess() {
      alert(this.deleteUrl);
      this.modal = "";
    },
  },
  created() {},
};
</script>

<style>
.heading {
  background: #f0ab54;
  padding: 5px 20px 10px 20px;
  font-weight: bold;
  color: #f7f7f7;
}

.desc {
  border-left: 1px solid #dedede;
  border-right: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
  padding: 10px 20px;
}

.field {
  margin-bottom: 15px;
}

.label {
  font-size: 0.8em;
  color: #223872;
}
</style>

<style scoped>
.active {
  background: #223872 !important;
}
</style>