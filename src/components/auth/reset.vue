<template>
  <div id="reset">
    <div class="vue-modal vue-modal-sm bg-primary">
      <form @submit.prevent="handleReset">
        <div class="text-center mb-4">
          <img
            src="@/assets/img/logo-white.webp"
            alt="ALL-in Eduspace"
            class="vue-modal-logo"
          />
        </div>
        <h3 class="text-secondary mb-4 text-center">
          <strong> Reset My Password </strong>
        </h3>
        <transition name="fade">
          <div v-if="!changed">
            <div class="mb-3">
              <input
                v-model="reset.email"
                type="text"
                class="form-control v-form"
                placeholder="Email"
                readonly
                id="email"
              />
              <p class="text-white small" v-if="error_reset?.email">
                {{ error_reset.email[0] }}
              </p>
            </div>
            <div class="mb-3">
              <input
                v-model="reset.password"
                type="password"
                placeholder="New Password"
                class="form-control v-form"
                id="password"
              />
              <p class="text-white small" v-if="error_reset?.password">
                {{ error_reset.password[0] }}
              </p>
            </div>
            <div class="mb-3">
              <input
                v-model="reset.password_confirmation"
                type="password"
                placeholder="Password Confirmation"
                class="form-control v-form"
                id="confirm_password"
              />
            </div>
            <div class="text-center">
              <button
                class="btn btn-allin bg-secondary my-3 px-5"
                type="submit"
              >
                <strong> Reset </strong>
              </button>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="changed">
            <p class="text-center">
              Your password has been successfully reset, <br />
              please
              <u
                class="text-secondary pointer"
                @click="this.$emit('show', 'login')"
                >sign in now!</u
              >
            </p>
          </div>
        </transition>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "reset",
  data() {
    return {
      changed: false,
      reset: {
        email: "",
        password: "",
        password_confirmation: "",
      },
      error_reset: [],
    };
  },
  methods: {
    resetProcess() {},

    async handleReset() {
      let token = this.$route.params.token;
      this.$alert.loading();
      try {
        const response = await this.$axios.post(
          "reset-password/" + token,
          this.reset
        );

        localStorage.clear();
        this.$alert.toast("success", response.data.message);
        this.changed = true;
        // console.log(response.data);
      } catch (e) {
        if (e.response.status == 400) {
          this.$alert.toast("error", e.response.data.error);
        } else {
          this.error_reset = e.response.data.error;
          this.$alert.close();
          // console.log(e.response.data);
        }
      }
    },
  },
  created() {
    if (localStorage.getItem("email_reset")) {
      this.reset.email = localStorage.getItem("email_reset");
    }
  },
};
</script>

