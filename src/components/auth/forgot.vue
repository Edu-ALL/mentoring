<template>
  <div id="forgot">
    <div class="vue-modal vue-modal-sm bg-primary">
      <form @submit.prevent="handleSubmit">
        <div class="text-center mb-4">
          <img
            src="@/assets/img/logo-white.webp"
            alt="ALL-in Eduspace"
            class="vue-modal-logo"
          />
        </div>
        <h3 class="text-secondary mb-4 text-center">
          <strong> Forgot Password </strong>
        </h3>
        <div class="mb-3">
          <transition name="fade">
            <div v-if="!sent">
              <div class="text-center mb-2">
                Please enter your email and we'll send an email to reset your
                password
              </div>
              <input-group>
                <input
                  v-model="forgot.email"
                  type="email"
                  name="email"
                  class="form-control form-mentoring w-100"
                  placeholder="Email"
                  required
                  id="email"
                />
                <label class="bg-primary rounded" for="email">Email</label>
              </input-group>
              <p class="text-white small" v-if="error_forgot.email">
                {{ error_forgot.email[0] }}
              </p>
              <div class="text-center">
                <button
                  class="btn btn-allin bg-secondary my-3 px-5"
                  type="submit"
                >
                  <strong> Reset Password </strong>
                </button>
                <p class="mb-0">
                  I'v remembered my password,
                  <u
                    class="text-secondary pointer"
                    @click="this.$emit('show', 'login')"
                    >Sign in now!</u
                  >
                </p>
              </div>
            </div>
          </transition>

          <transition name="fade">
            <div v-if="sent">
              <p class="text-center text-white">
                <vue-feather type="check-circle" stroke="#F0AB54"></vue-feather>
                <b class="d-block"> Reset password link has been seent </b>
              </p>
              <hr />
              <p class="text-center">
                I haven't received the email yet, <br />
                please
                <a @click="sent = false" class="text-secondary pointer"
                  >send it again!</a
                >
              </p>
            </div>
          </transition>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "forgot",
  data() {
    return {
      sent: false,
      forgot: {
        email: "",
      },
      error_forgot: [],
    };
  },
  methods: {
    forgotProcess() {
      this.sent = true;
    },

    async handleSubmit() {
      this.$alert.loading();
      try {
        const response = await this.$axios.post("reset-password", this.forgot);

        this.$alert.toast("success", response.data.message);
        this.sent = true;
        localStorage.setItem("email_reset", this.forgot.email);
        // console.log(response.data);
      } catch (e) {
        this.error_forgot = e.response.data.error;
        if (e.response.status == 400) {
          this.$alert.toast("error", e.response.data.error);
        }
        // console.log(e.response.data);
      }
    },
  },
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
</style>> 
