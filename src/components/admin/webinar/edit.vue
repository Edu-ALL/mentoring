<template>
  <div id="editWebinar">
    <div
      class="mb-2"
      @click="this.$router.push({ path: '/admin/webinar/detail/2' })"
    >
      <vue-feather
        type="arrow-left"
        class="float-start mt-0 me-2"
      ></vue-feather>
      Webinar List
    </div>
    <!-- Edit  -->
    <transition name="fade">
      <div class="card-white" v-if="menus.submenu == 'edit'">
        <h5>Edit Webinar</h5>
        <hr />
        <form action="">
          <div class="row">
            <div class="col-md-6">
              <input
                type="text"
                class="form-control form-mentoring mb-3"
                placeholder="Webinar Name"
              />

              <select class="form-control form-mentoring mb-3">
                <option value="">Webinar 1</option>
                <option value="">Webinar 2</option>
              </select>

              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                class="form-control form-mentoring mb-3"
              ></textarea>
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control form-mentoring mb-3"
                placeholder="Video Embed"
              />

              <div class="preview"></div>
            </div>
            <div class="col-md-12">
              <hr />
              <div class="float-end">
                <button class="btn-mentoring btn-type-1">Save Changes</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "webinarDetail",
  props: {
    menus: Object,
  },
  data() {
    return {
      userList: false,
    };
  },
  created() {},
};
</script>

<style scoped>
.form-control {
  box-shadow: none !important;
}

.preview {
  background: #dedede;
  width: 100%;
  height: 310px;
}
</style>