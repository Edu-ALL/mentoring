<template>
  <div id="profile">
    <div class="container mt-4 pb-5">
      <div class="row g-3">
        <div class="col-md-4 mb-3">
          <div class="card border-0 shadow-sm sticky-md-top profile-top">
            <div class="card-body">
              <div class="pointer" style="top: 100px" @click="redirect">
                <h5 class="">My Profile</h5>
              </div>
              <ul
                class="list-group sticky-top"
                style="top: 100px; z-index: 100"
              >
                <a
                  href="#info"
                  class="list-group-item list-group-item-action"
                  :class="section == 'info' ? 'active' : ''"
                  @click="section = 'info'"
                >
                  <i class="bi bi-person-badge me-1"></i>
                  Personal Information
                </a>
                <a
                  href="#sosmed"
                  class="list-group-item list-group-item-action"
                  :class="section == 'sosmed' ? 'active' : ''"
                  @click="section = 'sosmed'"
                >
                  <i class="bi bi-facebook me-1"></i>
                  Social Media
                </a>
                <a
                  href="#interest"
                  class="list-group-item list-group-item-action"
                  :class="section == 'interest' ? 'active' : ''"
                  @click="section = 'interest'"
                >
                  <i class="bi bi-hand-thumbs-up"></i>
                  Interest
                </a>
                <a
                  href="#competition"
                  class="list-group-item list-group-item-action"
                  :class="section == 'competition' ? 'active' : ''"
                  @click="section = 'competition'"
                >
                  <i class="bi bi-award me-1"></i>
                  Competition
                </a>
                <a
                  href="#academic"
                  class="list-group-item list-group-item-action"
                  :class="section == 'academic' ? 'active' : ''"
                  @click="section = 'academic'"
                >
                  <i class="bi bi-journal-bookmark me-1"></i>
                  Academic
                </a>
                <a
                  href="#"
                  :class="modal == 'change-password' ? 'active' : ''"
                  @click="modal = 'change-password'"
                  class="list-group-item list-group-item-action"
                >
                  <i class="bi bi-key me-1"></i>
                  Change Password
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-8">
          <div class="card border-0 shadow-sm">
            <div class="card-body">
              <v-personal :mentee="mentee"></v-personal>
              <v-sosmed :id="mentee.id"></v-sosmed>
              <v-interest></v-interest>
              <v-competition></v-competition>
              <v-academic></v-academic>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
    <!-- Change Password  -->
    <transition name="pop">
      <div class="vue-modal vue-modal-sm" v-if="modal == 'change-password'">
        <h5>Change Password</h5>
        <hr class="my-0" />
        <form @submit.prevent="handleSubmit">
          <div class="row">
            <div class="col-md-12">
              <div class="mb-2 mt-3 position-relative">
                <small>Old Password</small>
                <div
                  class="position-absolute"
                  style="right: 10px; margin-top: 7px"
                  @click="displayPassword(0, d_password[0])"
                >
                  <i
                    class="fa-solid fa-eye-slash pointer"
                    v-if="!d_password[0]"
                  ></i>
                  <i class="fa-solid fa-eye pointer" v-if="d_password[0]"></i>
                </div>
                <input
                  :type="d_password[0] ? 'text' : 'password'"
                  v-model="password.old_password"
                  class="form-mentoring w-100"
                />
                <small
                  class="text-danger"
                  v-if="error_password && error_password.old_password"
                >
                  {{ error_password.old_password[0] }}
                </small>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-2 position-relative">
                <small>New Password</small>
                <div
                  class="position-absolute"
                  style="right: 10px; margin-top: 7px"
                  @click="displayPassword(1, d_password[1])"
                >
                  <i
                    class="fa-solid fa-eye-slash pointer"
                    v-if="!d_password[1]"
                  ></i>
                  <i class="fa-solid fa-eye pointer" v-if="d_password[1]"></i>
                </div>
                <input
                  :type="d_password[1] ? 'text' : 'password'"
                  v-model="password.new_password"
                  class="form-mentoring w-100"
                />
                <small
                  class="text-danger"
                  v-if="error_password && error_password.new_password"
                >
                  {{ error_password.new_password[0] }}
                </small>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-4 position-relative">
                <small>Confirm Password</small>
                <div
                  class="position-absolute"
                  style="right: 10px; margin-top: 7px"
                  @click="displayPassword(2, d_password[2])"
                >
                  <i
                    class="fa-solid fa-eye-slash pointer"
                    v-if="!d_password[2]"
                  ></i>
                  <i class="fa-solid fa-eye pointer" v-if="d_password[2]"></i>
                </div>
                <input
                  :type="d_password[2] ? 'text' : 'password'"
                  v-model="password.new_password_confirmation"
                  class="form-mentoring w-100"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <button
                type="button"
                class="btn-mentoring btn-warning btn-sm"
                @click="modal = ''"
              >
                Cancel
              </button>
            </div>
            <div class="col-md-8 text-end">
              <button
                type="submit"
                class="btn-mentoring btn-outline-success btn-sm"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
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
  props: {
    mentee: Object,
  },
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
      password: {
        old_password: "",
        new_password: "",
        new_password_confirmation: "",
      },
      d_password: [false, false, false],
      error_password: [],
    };
  },
  methods: {
    displayPassword(index, i) {
      this.d_password[index] = !i;
    },

    async handleSubmit() {
      this.modal = "";
      this.$alert.loading();
      try {
        const response = await this.$axios.put(
          "student/change/password",
          this.password
        );

        this.password = {
          old_password: "",
          new_password: "",
          new_password_confirmation: "",
        };

        this.$alert.toast("success", response.data.message);
        // console.log(response.data);
      } catch (e) {
        this.$alert.close();
        this.error_password = e.response.data.error;
        this.modal = "change-password";
        // console.log(e.response);
      }
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
.profile-top {
  top: 13vh;
}

.active {
  background: #223872 !important;
}

@media only screen and (max-width: 800px) {
  .profile-top {
    top: 0;
  }
}
</style>