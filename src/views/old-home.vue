<template>
  <div id="login">
    <div class="container-fluid">
      <div class="row vh-100">
        <div class="col-md-8 text-white align-items-center px-md-5 px-3 py-3">
          <nav class="navbar navbar-expand-lg text-white">
            <div class="container-fluid p-0">
              <a class="navbar-brand text-white" href="#">MENTORING</a>
              <button
                class="navbar-toggler text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav me-auto mb-2 mb-lg-0"></div>
                <div class="d-flex">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">Guideline</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

          <img src="../assets/mentoring.png" class="home-img mx-auto d-block" />
          <h2 class="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <h6 class="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            perferendis repudiandae nisi mollitia nesciunt eligendi doloremque.
          </h6>
        </div>
        <div class="col-md-4 bg-login d-flex align-items-center py-4 px-md-5">
          <div class="card shadow box">
            <div class="card-body" v-if="form_name == 'login'">
              <form @submit.prevent="loginProcess">
                <h3>Log In</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="mb-3">
                  <label>Username</label>
                  <input
                    v-model="login.email"
                    type="text"
                    name="email"
                    class="form-control"
                  />
                  <p class="text-danger small" v-if="error_form.login.email">
                    {{ error_form.login.email[0] }}
                  </p>
                </div>
                <div class="mb-3">
                  <label>Password</label>
                  <input
                    v-model="login.password"
                    type="password"
                    name="password"
                    class="form-control"
                  />
                  <p class="text-danger small" v-if="error_form.login.password">
                    {{ error_form.login.password[0] }}
                  </p>
                </div>
                <div class="d-grid gap-2 mb-3">
                  <button class="btn btn-primary" type="submit">Log In</button>
                </div>
                <hr />
                <div class="text-center">
                  <span class="me-3 pointer" @click="form('forgot')"
                    >Forgot Password</span
                  >
                  |
                  <span class="ms-3 pointer" @click="form('register')"
                    >Sign Up</span
                  >
                </div>
              </form>
            </div>

            <div class="card-body" v-if="form_name == 'forgot'">
              <form @submit.prevent="forgotProcess">
                <h3>Forgot Password</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <label>Username</label>
                <input
                  v-model="forgot.email"
                  type="text"
                  name="email"
                  class="form-control mb-3"
                />
                <div class="d-grid gap-2 mt-3 mb-3">
                  <button class="btn btn-primary" type="submit">Submit</button>
                </div>
                <hr />
                <div class="text-center">
                  <span class="pointer" @click="form('login')">Log In</span>
                </div>
              </form>
            </div>

            <div class="card-body" v-if="form_name == 'reset_password'">
              <form @submit.prevent="resetProcess">
                <h3>Reset Password</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="mb-3">
                  <label>Username</label>
                  <input
                    v-model="forgot.email"
                    type="text"
                    name="email"
                    readonly
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <label>Password</label>
                  <input
                    v-model="forgot.password"
                    type="password"
                    name="password"
                    class="form-control"
                  />
                  <p
                    class="text-danger small"
                    v-if="error_form.forgot.password"
                  >
                    {{ error_form.forgot.password[0] }}
                  </p>
                </div>
                <div class="mb-3">
                  <label>Password Confirmation</label>
                  <input
                    v-model="forgot.password_confirmation"
                    type="password"
                    name="password_confirmation"
                    class="form-control"
                  />
                </div>
                <div class="d-grid gap-2 mt-3 mb-3">
                  <button class="btn btn-primary" type="submit">Submit</button>
                </div>
                <hr />
                <div class="text-center">
                  <span class="pointer" @click="form('login')">Log In</span>
                </div>
              </form>
            </div>

            <div class="card-body" v-if="form_name == 'register'">
              <form @submit.prevent="registerProcess">
                <h3>Sign Up as {{ role }}</h3>
                <hr />
                <ul class="nav nav-tabs mb-3" style="font-size: 12px">
                  <li class="nav-item">
                    <a
                      class="nav-link pointer"
                      :class="register.role_id == 1 ? 'active' : ''"
                      @click="signUpAs('1')"
                      >Student</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link pointer"
                      :class="register.role_id == 4 ? 'active' : ''"
                      @click="signUpAs('4')"
                      >Alumni</a
                    >
                  </li>
                </ul>
                <div class="row">
                  <div class="col-md-6 mb-2">
                    <label>First Name</label>
                    <input
                      v-model="register.first_name"
                      type="text"
                      name="first_name"
                      class="form-control"
                    />
                    <p
                      class="text-danger small"
                      v-if="error_form.register.first_name"
                    >
                      {{ error_form.register.first_name[0] }}
                    </p>
                  </div>
                  <div class="col-md-6 mb-2">
                    <label>Last Name</label>
                    <input
                      v-model="register.last_name"
                      type="text"
                      name="last_name"
                      class="form-control"
                    />
                    <p
                      class="text-danger small"
                      v-if="error_form.register.last_name"
                    >
                      {{ error_form.register.last_name[0] }}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 mb-2">
                    <label>Email</label>
                    <input
                      v-model="register.email"
                      type="email"
                      name="email"
                      class="form-control"
                    />
                    <p
                      class="text-danger small"
                      v-if="error_form.register.email"
                    >
                      {{ error_form.register.email[0] }}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 mb-2">
                    <label>Birth Day</label>
                    <datepicker
                      v-model="nfbirthday"
                      inputFormat="dd MMMM yyyy"
                      class="bday"
                      readonly="false"
                      style="
                        --vdp-bg-color: #fff;
                        --vdp-hover-bg-color: #363caa;
                        --vdp-selected-bg-color: #e59c3d;
                        --vdp-divider-color: #363caa;
                      "
                    />
                    <!-- <input
                      v-model="register.birthday"
                      type="date"
                      name="birthday"
                      class="form-control"
                    /> -->
                    <p
                      class="text-danger small"
                      v-if="error_form.register.birthday"
                    >
                      {{ error_form.register.birthday[0] }}
                    </p>
                  </div>
                  <div class="col-md-12 mb-2">
                    <label>Phone Number</label>
                    <vue-tel-input
                      :value="register.phone_number"
                      @input="onInput"
                    ></vue-tel-input>
                    <p
                      class="text-danger small"
                      v-if="error_form.register.phone_number"
                    >
                      {{ error_form.register.phone_number[0] }}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-2">
                    <label>Password</label>
                    <input
                      v-model="register.password"
                      type="password"
                      name="password"
                      class="form-control"
                    />
                    <p
                      class="text-danger small"
                      v-if="error_form.register.password"
                    >
                      {{ error_form.register.password[0] }}
                    </p>
                  </div>
                  <div class="col-md-6 mb-2">
                    <label>Password Confirm</label>
                    <input
                      v-model="register.password_confirmation"
                      type="password"
                      name="password_confirmation"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="d-grid gap-2 mt-3">
                  <button class="btn btn-primary" type="submit">Sign Up</button>
                </div>
                <hr />
                <div class="text-center">
                  <span class="ms-3 pointer" @click="form('login')"
                    >Log in</span
                  >
                </div>
              </form>
            </div>

            <div class="card-body" v-if="form_name == 'verify'">
              <form @submit.prevent="loginProcess">
                <h3>Almost there ..</h3>
                <hr />
                <p>
                  Please check your email (<b>{{
                    login.email || register.email
                  }}</b
                  >) to confirm your account
                </p>
                <div class="row mb-4">
                  <div class="col-3">
                    <input
                      type="text"
                      maxlength="1"
                      min="0"
                      class="form-control text-center"
                      v-model="verify.n1"
                    />
                  </div>
                  <div class="col-3">
                    <input
                      type="text"
                      maxlength="1"
                      min="0"
                      class="form-control text-center"
                      v-model="verify.n2"
                    />
                  </div>
                  <div class="col-3">
                    <input
                      type="text"
                      maxlength="1"
                      min="0"
                      class="form-control text-center"
                      v-model="verify.n3"
                    />
                  </div>
                  <div class="col-3">
                    <input
                      type="text"
                      maxlength="1"
                      min="0"
                      class="form-control text-center"
                      @change="verifyProcess"
                      v-model="verify.n4"
                    />
                  </div>
                </div>
                <span v-if="!resend">
                  for resend the verification please wait
                  {{ timerCount }} second
                </span>
                <span v-if="resend">
                  I haven't received the verification code yet, please resend to
                  my email
                  <a class="pointer text-primary" @click="resendProcess"
                    >here</a
                  >
                </span>
                <hr />
                <div class="text-center">
                  <a href="/" class="text-dark text-decoration-none">
                    <span class="pointer">Log In</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import datepicker from "vue3-datepicker";
import moment from "moment";

export default {
  name: "Home",
  components: {
    datepicker,
  },
  data() {
    return {
      token: "",
      nfbirthday: new Date(),
      timerCount: 0,
      form_name: "login",
      role: "",
      resend: false,
      login: {
        email: "",
        password: "",
      },
      error_form: {
        login: [],
        register: [],
        forgot: [],
      },
      register: {
        first_name: "",
        last_name: "",
        email: "",
        birthday: "",
        phone_number: "",
        role_id: "",
        password: "",
        password_confirmation: "",
      },
      forgot: {
        email: "",
        password: "",
        password_confirmation: "",
      },
      verify: {
        n1: "",
        n2: "",
        n3: "",
        n4: "",
      },
    };
  },
  methods: {
    loading() {
      Swal.fire({
        title: "Please wait a minute",
      });
      Swal.showLoading();
    },
    form(name) {
      this.form_name = name;
    },
    signUpAs(role_id = 1) {
      if (role_id == 1) {
        this.role = "Student";
      } else if (role_id == 2) {
        this.role = "Mentor";
      } else if (role_id == 3) {
        this.role = "Editor";
      } else if (role_id == 4) {
        this.role = "Alumni";
      }
      this.register.role_id = role_id;
    },
    registerProcess() {
      this.loading();
      this.register.birthday = moment(this.nfbirthday).format("YYYY-MM-DD");
      axios
        .post("https://services.all-inedu.com/api/v1/register", this.register)
        .then((response) => {
          Swal.close();
          this.token = response.data.token;
          this.toast("warning", "Please, verify your email first!");
          this.login.email = this.register.email;
          this.form_name = "verify";
          this.timerCount = 60;
          this.countDownTimer();
        })
        .catch((error) => {
          this.error_form.register = error.response.data.error;
          Swal.fire("Ooops !", error.response.data.error, "warning");
          // console.log(error.response);
          Swal.close();
        });
    },
    loginProcess() {
      this.loading();
      axios
        .post("https://services.all-inedu.com/api/v1/login", this.login)
        .then((response) => {
          Swal.close();
          if (response.data.success == true) {
            if (response.data.data.is_verified == 1) {
              // login success
              sessionStorage.setItem("user", JSON.stringify(response.data));
              this.toast("success", "You have successfully logged in");
              if (response.data.data.role_id == 1) {
                this.$router.push({ path: "/student" });
              }
            } else {
              // verify
              this.token = response.data.data.token;
              this.toast("warning", "Please, verify your email first!");
              this.form_name = "verify";
              this.resendProcess();
            }
          }
        })
        .catch((error) => {
          if (typeof error.response.data.error == "object") {
            this.error_form.login = error.response.data.error;
            Swal.close();
          } else {
            Swal.fire("Ooops !", error.response.data.error, "warning");
            this.reset();
          }
        });
    },
    verifyProcess() {
      this.loading();
      const code =
        this.verify.n1 + this.verify.n2 + this.verify.n3 + this.verify.n4;
      axios
        .get("https://services.all-inedu.com/api/v1/user/verify/" + code)
        .then((response) => {
          Swal.close();
          if (response.data.success == false) {
            this.verify.n1 = "";
            this.verify.n2 = "";
            this.verify.n3 = "";
            this.verify.n4 = "";
            Swal.fire("Ooops !", response.data.error, "warning");
          } else {
            Swal.fire("Horay !", response.data.message, "success");
            this.form_name = "login";
          }
        })
        .catch((error) => {
          console.log(error.response);
          // this.error_form.register = error.response.data.error;
          Swal.close();
        });
    },
    resendProcess() {
      this.loading();
      axios
        .post(
          "https://services.all-inedu.com/api/v1/email/verification-notification",
          "",
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        )
        .then(() => {
          Swal.close();
          Swal.fire("Verification code has been sent", "", "success");
          this.timerCount = 60;
          this.countDownTimer();
        })
        .catch((error) => {
          console.log(error);
          Swal.close();
        });
    },
    forgotProcess() {
      this.loading();
      axios
        .post(
          "https://services.all-inedu.com/api/v1/password/reset",
          this.forgot
        )
        .then((response) => {
          Swal.close();
          this.toast("success", response.data.data.message);
        })
        .catch((error) => {
          Swal.close();
          console.log(error);
        });
    },
    resetProcess() {
      this.loading();
      axios
        .post(
          "https://services.all-inedu.com/api/v1/password/reset/" + this.token,
          this.forgot
        )
        .then((response) => {
          Swal.close();
          this.form_name = "login";
          this.toast("success", response.data.data.message);
          this.$router.push("../");
        })
        .catch((error) => {
          Swal.close();
          this.error_form.forgot = error.response.data.error;
        });
    },
    reset() {
      this.login.email = "";
      this.login.password = "";
      this.register.first_name = "";
      this.register.last_name = "";
      this.register.email = "";
      this.register.birthday = "";
      this.register.phone_number = "";
      this.register.password = "";
      this.register.password_confirmation = "";
      this.error_form.login = [];
      this.error_form.register = [];
    },
    countDownTimer() {
      if (this.timerCount > 0) {
        this.resend = false;
        setTimeout(() => {
          this.timerCount -= 1;
          this.countDownTimer();
        }, 1000);
      } else if (this.timerCount == 0) {
        this.resend = true;
      }
    },
    toast(status, title) {
      const Toast = Swal.mixin({
        toast: true,
        width: "33%",
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: status,
        title: title,
      });
    },
    onInput(phone, phoneObject) {
      if (phoneObject?.formatted) {
        this.register.phone_number = phoneObject.formatted;
      }
    },
  },
  created() {
    this.signUpAs(1);
    if (this.$route.params.page == "reset") {
      this.form_name = "reset_password";
      this.token = this.$route.params.token;
      axios
        .get("https://services.all-inedu.com/api/v1/reset/" + this.token)
        .then((response) => {
          // console.log(response);
          this.forgot.email = response.data.data.email;
        })
        .catch(() => {
          this.toast("warning", "Token is invalid");
          this.form_name = "login";
          this.$router.push({ path: "/" });
        });
    }
    // sessionStorage.removeItem("user");
    // Cek User
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      this.toast("success", "You have already logged in");
      if (user.data.role_id == 1) {
        this.$router.push({ path: "/student" });
      }
    }
  },
};
</script>
<style scoped>
#login {
  height: auto;
  background: url("../assets/bg.jpg");
  background-size: cover;
  padding: auto 5%;
}

.bg-login {
  background: url("../assets/bg-login.webp");
  background-size: cover;
}

.home-img {
  width: 50%;
}

.vue-tel-input {
  border: 0;
  border-bottom: 1.5px solid #dedede;
  border-radius: 0;
}

.vue-tel-input:focus-within,
input[type="tel"]:focus {
  border-color: rgba(235, 127, 26, 0.8) !important;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0) inset, 0 0 8px rgba(239, 169, 104, 0);
  outline: 0 none !important;
  /* padding-left: 7px !important; */
}
</style>
