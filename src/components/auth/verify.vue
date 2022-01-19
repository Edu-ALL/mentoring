<template>
  <div id="verify">
    <div class="vue-modal vue-modal-sm bg-primary">
      <form @submit.prevent="verifyProcess">
        <div class="text-center mb-4">
          <img
            src="@/assets/img/logo-white.webp"
            alt="ALL-in Eduspace"
            class="vue-modal-logo"
          />
        </div>
        <h3 class="text-secondary mb-4 text-center">
          <strong> Verify Your Account</strong>
        </h3>
        <transition name="fade">
          <div v-if="!verified">
            <div class="mb-3">
              <input
                v-model="reset.email"
                type="text"
                name="text"
                class="form-control v-form text-center"
                placeholder="Verification Code"
              />
              <p class="text-danger small" v-if="error_reset.email">
                {{ error_reset.email[0] }}
              </p>
            </div>
            <div class="text-center">
              <button
                class="btn btn-allin bg-secondary my-3 px-5"
                type="submit"
              >
                <strong> Verify Now </strong>
              </button>
              <hr />
              <p v-if="!resend">
                Please wait <b class="text-secondary">{{ time }}</b> to resend
                the verification code.
              </p>

              <p v-if="resend">
                I haven't received the verification code, <br />
                Please
                <u class="text-secondary" @click="resendProcess">send again!</u>
              </p>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="verified">
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
  name: "verify",
  data() {
    return {
      verified: false,
      resend: false,
      time: 60,
      reset: {
        email: "",
        password: "",
        password_confirm: "",
      },
      error_reset: [],
    };
  },
  methods: {
    verifyProcess() {
      this.changed = true;
    },
    timeCountDown() {
      if (this.time > 0) {
        setTimeout(() => {
          this.time -= 1;
          this.timeCountDown();
        }, 1000);
        this.resend = false;
      } else if (this.time == 0) {
        this.resend = true;
      }
    },
    resendProcess() {
      this.time = 60;
      this.resend = false;
      this.timeCountDown();
    },
  },
  created() {
    this.timeCountDown();
  },
};
</script>
