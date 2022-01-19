<template>
  <div id="login">
    <div class="vue-modal vue-modal-sm bg-primary">
      <form @submit.prevent="loginProcess">
        <div class="text-center mb-4">
          <img
            src="@/assets/img/logo-white.webp"
            alt="ALL-in Eduspace"
            class="vue-modal-logo"
          />
        </div>
        <h3 class="text-secondary mb-4 text-center">
          <strong> Login to Your Account </strong>
        </h3>
        <div class="mb-3">
          <input
            v-model="login.email"
            type="text"
            name="email"
            class="form-control v-form"
            placeholder="Email"
          />
          <p class="text-danger small" v-if="error_login.email">
            {{ error_login.email[0] }}
          </p>
        </div>
        <div class="mb-3">
          <input
            v-model="login.password"
            type="password"
            name="password"
            placeholder="Password"
            class="form-control v-form"
          />
          <p class="text-danger small" v-if="error_login.password">
            {{ error_login.password[0] }}
          </p>
          <p class="mt-3 pointer" @click="this.$emit('show', 'forgot')">
            Forgot Password
          </p>
        </div>
        <div class="text-center">
          <button
            class="btn btn-allin bg-secondary my-3 px-5"
            type="button"
            @click="this.$router.push({ path: '/user' })"
          >
            <strong> Sign In </strong>
          </button>
          <p class="mb-0">
            Don't have an account?
            <u
              class="text-secondary pointer"
              @click="this.$emit('show', 'register')"
              >Take our profile quiz</u
            >
            now to create an account!
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
      error_login: [],
    };
  },
};
</script>
