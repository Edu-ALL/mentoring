<template>
  <div id="notif">
    <div class="container h-100 d-flex align-items-center">
      <div class="w-100">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <div class="card border-0 shadow-sm">
              <div class="card-body text-center">
                <i class="fa-solid fa-circle-info icon text-info mb-3"></i>
                <h5>{{ message }}</h5>
                <div class="mt-3">
                  <button
                    class="btn btn-mentoring btn-sm py-1 px-3 btn-type-1"
                    @click="$router.push({ path: '/' })"
                  >
                    <i class="fa-solid fa-arrow-left me-2"></i>
                    Back to Home
                  </button>
                </div>
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
  name: "notif",
  data() {
    return {
      message: "",
    };
  },
  created() {
    if (this.$route.params.message) {
      this.message = this.$route.params.message;
    } else {
      this.$router.push({ path: "/" });
    }
  },
};
</script>

<style scoped>
#notif {
  height: 100vh;
  background: rgb(197, 225, 242);
  background: linear-gradient(
    20deg,
    rgba(197, 225, 242, 1) 0%,
    rgba(255, 255, 255, 0.9668242296918768) 57%
  );
}

.icon {
  font-size: 2em;
}

@media only screen and (max-width: 600px) {
  .icon {
    font-size: 1.5em;
  }
}
</style>