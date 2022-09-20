<template>
  <div id="login">
    <div
      class="vue-modal vue-modal-sm"
      :class="login_as == 'mentee' ? 'bg-primary' : 'bg-secondary'"
    >
      <div class="text-center mb-4">
        <img
          src="@/assets/img/logo-white.webp"
          alt="ALL-in Eduspace"
          class="vue-modal-logo"
        />
      </div>
      <h4
        class="mb-4 text-center"
        :class="login_as == 'mentee' ? 'text-secondary' : 'text-primary'"
      >
        <strong>
          Sign in as
          <span style="text-transform: capitalize">
            {{ login_as }}
          </span></strong
        >
      </h4>
      <form @submit.prevent="handleSubmit" method="post">
        <div class="mb-3">
          <input-group>
            <input
              v-model="login.email"
              type="email"
              class="form-control v-form"
              placeholder="Email"
              id="login_email"
              required
            />
            <label
              :class="
                login_as == 'mentee' ? 'bg-primary' : 'bg-secondary  text-white'
              "
              for="login_email"
              >Email</label
            >
          </input-group>
          <p
            class="mt-1 small"
            v-if="error_login.email"
            :class="login_as == 'mentee' ? 'text-warning' : 'text-white'"
          >
            {{ error_login.email[0] }}
          </p>
        </div>
        <div class="mb-3">
          <input-group>
            <input
              v-model="login.password"
              type="password"
              class="form-control v-form"
              placeholder="Password"
              id="password"
            />
            <label
              for="password"
              :class="
                login_as == 'mentee' ? 'bg-primary' : 'bg-secondary text-white'
              "
              >Password</label
            >
          </input-group>
          <p
            class="mt-1 small"
            v-if="error_login.password"
            :class="login_as == 'mentee' ? 'text-warning' : 'text-white'"
          >
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
            class="btn btn-primary btn-mentoring my-3 px-5"
            :class="login_as == 'mentee' ? 'bg-secondary' : 'bg-primary'"
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
            Not a
            <span v-if="login_as == 'mentor'">Mentor</span>
            <span v-if="login_as == 'mentee'">Mentee</span>? <br />
            Sign in as a
            <span
              class="pointer"
              :class="login_as == 'mentee' ? 'text-secondary' : 'text-primary'"
              @click="login_as = 'mentor'"
              v-if="login_as == 'mentee'"
            >
              Mentor</span
            >
            <span
              class="pointer"
              :class="login_as == 'mentee' ? 'text-secondary' : 'text-primary'"
              @click="login_as = 'mentee'"
              v-if="login_as == 'mentor'"
            >
              Mentee</span
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
  props: {
    role: String,
  },
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      login_as: this.role,

      error_login: [],
    };
  },
  methods: {
    async handleSubmit() {
      this.$alert.loading();

      if (this.login_as == "mentee") {
        try {
          const response = await this.$axios.post("auth/s/login", {
            email: this.login.email,
            password: this.login.password,
          });
          this.$emit("show", "");

          // Mentee Data
          if (response.data.code) {
            localStorage.setItem("role", "mentee");
            localStorage.setItem("token_user", response.data.token);
            this.$alert.toast("success", response.data.message);
            this.$emit("show", "set_password");
          } else {
            localStorage.setItem("role", "mentee");
            localStorage.setItem("token", response.data.data.access_token);
            localStorage.setItem(
              "mentee",
              JSON.stringify(response.data.data.student)
            );
            this.$alert.close();
            this.$alert.toast("success", "You Successfully Login");

            window.location.href = "/user";
          }
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

          // Mentor Data
          // if not set a password yet
          if (response.data.code) {
            localStorage.setItem("role", "mentor");
            localStorage.setItem("token_user", response.data.token);
            this.$alert.toast("success", response.data.message);
            this.$emit("show", "set_password");
          } else {
            localStorage.setItem("role", "mentor");
            localStorage.setItem("token", response.data.data.access_token);
            localStorage.setItem(
              "mentor",
              JSON.stringify(response.data.data.user)
            );
            this.$alert.close();
            this.$alert.toast("success", "You Successfully Login");
            window.location.href = "/mentor";
          }
        } catch (e) {
          this.error_login = e.response.data.error;
          if (e.response.status == 400) {
            this.$emit("show", "");
            this.$alert.toast("error", e.response.data.error);
          } else {
            this.$alert.close();
          }
          console.log(e.response);
        }
      }
    },
  },
  created() {},
};
</script>
<style scoped>
.form-control {
  border: 2px solid #fff !important;
  background: transparent !important;
  color: #fff !important;
  z-index: 1 !important;
}

input::placeholder,
textarea::placeholder {
  color: transparent !important;
}
</style>