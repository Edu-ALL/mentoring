<template>
  <div id="register">
    <div class="vue-modal vue-modal-sm bg-primary">
      <form @submit.prevent="registerProcess">
        <div class="text-center mb-4">
          <img
            src="@/assets/img/logo-white.webp"
            alt="ALL-in Eduspace"
            class="vue-modal-logo"
          />
        </div>
        <h3 class="text-secondary mb-4 text-center">
          <strong> Sign Up </strong>
        </h3>
        <div class="row">
          <div class="col-md-6 mb-2">
            <label>First Name</label>
            <input
              v-model="register.first_name"
              type="text"
              name="first_name"
              class="form-control v-form"
            />
            <p class="text-danger small" v-if="error_register.first_name">
              {{ error_register.first_name[0] }}
            </p>
          </div>
          <div class="col-md-6 mb-2">
            <label>Last Name</label>
            <input
              v-model="register.last_name"
              type="text"
              name="last_name"
              class="form-control v-form"
            />
            <p class="text-danger small" v-if="error_register.last_name">
              {{ error_register.last_name[0] }}
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
              class="form-control v-form"
            />
            <p class="text-danger small" v-if="error_register.email">
              {{ error_register.email[0] }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mb-2">
            <label>Birth Day</label>
            <datepicker
              v-model="nfbirthday"
              inputFormat="dd MMMM yyyy"
              class="form-control v-form"
              readonly="false"
              style="
                --vdp-bg-color: #f0ab54;
                --vdp-hover-bg-color: #363caa;
                --vdp-selected-bg-color: #363caa;
                --vdp-divider-color: #000;
              "
            />
            <p class="text-danger small" v-if="error_register.birthday">
              {{ error_register.birthday[0] }}
            </p>
          </div>
          <div class="col-md-12 mb-2">
            <label>Phone Number</label>
            <vue-tel-input
              :value="register.phone_number"
              @input="onInput"
            ></vue-tel-input>
            <p class="text-danger small" v-if="error_register.phone_number">
              {{ error_register.phone_number[0] }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mb-2">
            <label>Password</label>
            <input
              v-model="register.password"
              type="password"
              name="password"
              class="form-control v-form"
            />
            <p class="text-danger small" v-if="error_register.password">
              {{ error_register.password[0] }}
            </p>
          </div>
          <div class="col-md-12 mb-2">
            <label>Password Confirm</label>
            <input
              v-model="register.password_confirmation"
              type="password"
              name="password_confirmation"
              class="form-control v-form"
            />
          </div>
        </div>
        <div class="text-center mt-3">
          <button class="btn btn-allin bg-secondary px-5" type="submit">
            <strong> Sign Up </strong>
          </button>
          <p class="mt-2">
            Already have an account?
            <u
              class="text-secondary pointer"
              @click="this.$emit('show', 'login')"
              >Sign in</u
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import datepicker from "vue3-datepicker";

export default {
  name: "register",
  components: {
    datepicker,
  },
  data() {
    return {
      nfbirthday: new Date(),
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
      error_register: [],
    };
  },
  methods: {
    registerProcess() {
      this.$emit("show", "verify");
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
