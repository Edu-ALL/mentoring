<template>
  <div class="vue-modal vue-modal-sm bg-secondary">
    <form @submit.prevent="handleSubmit">
      <div class="text-center mb-4">
        <img
          src="@/assets/img/logo-white.webp"
          alt="ALL-in Eduspace"
          class="vue-modal-logo"
        />
      </div>
      <h4 class="mb-4 text-center">
        <strong>Set a New Password</strong>
      </h4>
      <div class="mb-2">
        <label>Password</label>
        <div class="input-group">
          <input
            v-model="set_password.password"
            :type="type[0]"
            autocomplete="off"
            class="form-control v-form"
          />
          <div
            class="position-absolute text-muted"
            style="top: 7px; right: 10px; z-index: 999"
          >
            <i
              class="fa-solid"
              :class="type[0] == 'text' ? 'fa-eye' : 'fa-eye-slash'"
              @click="checkType(0)"
            ></i>
          </div>
        </div>
        <p class="mt-1 small" v-if="error_set.password">
          {{ error_set.password[0] }}
        </p>
      </div>

      <div class="mb-3">
        <label>Password Confirmation</label>
        <div class="input-group">
          <input
            v-model="set_password.password_confirmation"
            :type="type[1]"
            autocomplete="off"
            class="form-control v-form"
          />
          <div
            class="position-absolute text-muted"
            style="top: 7px; right: 10px; z-index: 999"
          >
            <i
              class="fa-solid"
              :class="type[1] == 'text' ? 'fa-eye' : 'fa-eye-slash'"
              @click="checkType(1)"
            ></i>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-allin my-3 px-5 btn-primary" type="submit">
          <strong> Set a Password </strong>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "setPassword",
  data() {
    return {
      type: ["password", "password"],
      set_password: {
        token: "",
        password: "",
        password_confirmation: "",
      },

      error_set: [],
    };
  },
  methods: {
    checkType(index) {
      if (this.type[index] == "text") {
        this.type[index] = "password";
      } else {
        this.type[index] = "text";
      }
    },

    async handleSubmit() {
      this.$alert.loading();
      try {
        let url = "";
        if (localStorage.getItem("role") == "mentee") {
          url = "account/student/new-password";
        } else {
          url = "account/user/new-password";
        }

        const response = await this.$axios.post(url, this.set_password);

        this.$emit("show", "login");
        this.$alert.toast("success", response.data.message);
        localStorage.clear();
        // console.log(response.data);
      } catch (e) {
        if (e.response.data.error) {
          this.error_set = e.response.data.error;
          this.$alert.close();
        }
        // console.log(e.response);
      }
    },
  },
  created() {
    if (localStorage.getItem("token_user")) {
      this.set_password.token = localStorage.getItem("token_user");
    }
  },
};
</script>

<style>
</style>