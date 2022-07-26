<template>
  <div id="login" class="bg-primary">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card bg-secondary" style="border-radius: 20px">
            <div class="card-body text-center">
              <h5>Administrator</h5>
              <div class="border border-2 p-3 rounded rounded-5">
                <form @submit.prevent="handleSubmit" method="post">
                  <div class="mb-1">
                    <input-group>
                      <input
                        v-model="user.email"
                        type="email"
                        class="form-mentoring w-100 text-white"
                        required
                      />
                      <label class="bg-secondary text-white">Email</label>
                      <small class="text-white" v-if="error?.email">{{
                        error.email[0]
                      }}</small>
                    </input-group>
                  </div>
                  <div class="mb-1">
                    <input-group>
                      <input
                        v-model="user.password"
                        type="password"
                        class="form-mentoring w-100 text-white"
                        required
                      />
                      <label class="bg-secondary text-white">Password</label>
                    </input-group>
                  </div>
                  <hr />
                  <div class="text-end">
                    <button
                      class="btn-mentoring btn-sm py-1 px-3 bg-primary"
                      type="submit"
                    >
                      <i class="fa-solid fa-sign-in me-2"></i>
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      error: [],
    };
  },
  methods: {
    async handleSubmit() {
      this.$alert.loading();
      try {
        const response = await this.$axios.post("auth/u/login", this.user);
        console.log(response);

        // Admin Data
        localStorage.setItem("role", "admin");
        localStorage.setItem("token", response.data.data.access_token);
        localStorage.setItem("admin", JSON.stringify(response.data.data.user));
        this.$alert.close();
        this.$alert.toast("success", "You Successfully Login");

        window.location.href = "/admin/home";
        // this.$router.push({ path: "/user" });
      } catch (e) {
        this.error_login = e.response.data.error;
        if (e.response.status == 400) {
          this.$alert.toast("error", e.response.data.error);
        } else {
          this.error = e.response.data.error;
          this.$alert.close();
        }
        // console.log(e.response);
      }
    },
  },
  created() {
    document.title = "Sign-In Admin";
  },
};
</script>

<style scoped>
#login {
  display: flex;
  align-items: center;
  height: 100vh;
}

input-group input:focus {
  border: 2px solid #fff;
}
</style>>