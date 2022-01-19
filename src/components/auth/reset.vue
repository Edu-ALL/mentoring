<template>
  <div id="reset">
    <div class="vue-modal vue-modal-sm bg-primary">
      <form @submit.prevent="resetProcess">
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
                name="email"
                class="form-control v-form"
                placeholder="Email"
              />
              <p class="text-danger small" v-if="error_reset.email">
                {{ error_reset.email[0] }}
              </p>
            </div>
            <div class="mb-3">
              <input
                v-model="reset.password"
                type="password"
                name="password"
                placeholder="New Password"
                class="form-control v-form"
              />
              <p class="text-danger small" v-if="error_reset.password">
                {{ error_reset.password[0] }}
              </p>
            </div>
            <div class="mb-3">
              <input
                v-model="reset.password_confirm"
                type="password"
                name="password"
                placeholder="Password Confirmation"
                class="form-control v-form"
              />
              <p class="text-danger small" v-if="error_reset.password">
                {{ error_reset.password_confirm[0] }}
              </p>
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
        password_confirm: "",
      },
      error_reset: [],
    };
  },
  methods: {
    resetProcess() {
      this.changed = true;
    },
  },
};
</script>
