<template>
  <div id="login">
    <div
      class="vue-modal vue-modal-sm"
      :class="login_as == 'student' ? 'bg-primary' : 'bg-secondary'"
    >
      <form @submit.prevent="handleSubmit">
        <div class="text-center mb-4">
          <img
            src="@/assets/img/logo-white.webp"
            alt="ALL-in Eduspace"
            class="vue-modal-logo"
          />
        </div>
        <h4
          class="mb-4 text-center"
          :class="login_as == 'student' ? 'text-secondary' : 'text-primary'"
        >
          <strong> Login to Your Account </strong>
        </h4>
        <div class="mb-3">
          <div class="input-group">
            <input
              v-model="login.email"
              type="email"
              autocomplete="off"
              class="form-control v-form"
            />
            <label
              :class="login_as == 'student' ? 'bg-primary' : 'bg-secondary'"
              >Email</label
            >
          </div>
          <p class="text-warning mt-1 small" v-if="error_login.email">
            {{ error_login.email[0] }}
          </p>
        </div>
        <div class="mb-3">
          <div class="input-group">
            <input
              v-model="login.password"
              type="password"
              autocomplete="off"
              class="form-control v-form"
            />
            <label
              :class="login_as == 'student' ? 'bg-primary' : 'bg-secondary'"
              >Password</label
            >
          </div>
          <p class="text-warning mt-1 small" v-if="error_login.password">
            {{ error_login.password[0] }}
          </p>
          <p
            class="mt-3 pointer text-center"
            @click="this.$emit('show', 'forgot')"
          >
            Forgot Password
          </p>
        </div>
        <div class="text-center">
          <button
            class="btn btn-allin my-3 px-5"
            :class="login_as == 'student' ? 'bg-secondary' : 'bg-primary'"
            type="submit"
          >
            <strong> Sign In </strong>
          </button>
          <!-- <p class="mb-0">
            Don't have an account? <br />
            <u
              class="text-secondary pointer"
              @click="this.$emit('show', 'register')"
              >Take our profile quiz</u
            >
            to create one!
          </p> -->
          <p>
            Sign in as
            <span
              :class="login_as == 'student' ? 'text-secondary' : 'text-primary'"
              @click="login_as = 'mentor'"
              v-if="login_as == 'student'"
            >
              Mentor</span
            >
            <span
              :class="login_as == 'student' ? 'text-secondary' : 'text-primary'"
              @click="login_as = 'student'"
              v-if="login_as == 'mentor'"
            >
              Student</span
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      login_as: "student",
      error_login: [],
    };
  },
  methods: {
    async handleSubmit() {
      this.$alert.loading();

      if (this.login_as == "student") {
        try {
          const response = await this.$axios.post("auth/s/login", {
            email: this.login.email,
            password: this.login.password,
          });
          this.$emit("show", "");

          // Mentee Data
          localStorage.setItem("role", "mentee");
          localStorage.setItem("token", response.data.data.access_token);
          localStorage.setItem(
            "mentee",
            JSON.stringify(response.data.data.student)
          );
          this.$alert.close();
          this.$alert.toast("success", "You Successfully Login");

          window.location.href = "/user";
          // this.$router.push({ path: "/user" });
        } catch (e) {
          this.error_login = e.response.data.error;
          if (e.response.status == 400) {
            this.$emit("show", "");
            this.$alert.toast("error", e.response.data.error);
          } else {
            this.$alert.close();
          }
          // console.log(e.response);
        }
      } else if (this.login_as == "mentor") {
        // alert("login mentor");
        try {
          const response = await this.$axios.post("auth/u/login", {
            email: this.login.email,
            password: this.login.password,
          });
          this.$emit("show", "");

          // Mentee Data
          localStorage.setItem("role", "mentor");
          localStorage.setItem("token", response.data.data.access_token);
          localStorage.setItem(
            "mentor",
            JSON.stringify(response.data.data.mentor)
          );
          this.$alert.close();
          this.$alert.toast("success", "You Successfully Login");

          window.location.href = "/mentor";
          // this.$router.push({ path: "/user" });
        } catch (e) {
          this.error_login = e.response.data.error;
          if (e.response.status == 400) {
            this.$emit("show", "");
            this.$alert.toast("error", e.response.data.error);
          } else {
            this.$alert.close();
          }
          // console.log(e.response);
        }
      }
    },
  },
  created() {},
};
</script>
<style scoped>
.form-control {
  position: relative;
  border: 2px solid #fff !important;
  background: transparent !important;
  color: #fff !important;
  z-index: 1 !important;
}

input:focus,
input:active {
  outline: none !important;
  box-shadow: none !important;
}

.input-group {
  position: relative;
  z-index: 1;
}

.input-group label {
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  transform: translate(20px, 5px);
  transition: all 0.4s;
}

input:focus + label,
input:valid + label {
  position: absolute;
  color: #fff;
  transform: translate(10px, -12px) scale(0.7);
  background: #223872;
  padding: 0 4px;
  z-index: 2;
}
</style>