<template>
  <div id="sosmed" style="scroll-margin-top: 120px">
    <div
      class="
        heading
        px-3
        py-1
        d-flex
        justify-content-between
        align-items-center
      "
    >
      <div class="fw-light">Social Media</div>
      <div class="text-end">
        <button
          class="btn-mentoring btn-sm bg-primary py-1 px-2"
          v-if="!edit"
          @click="edit = true"
        >
          <i class="bi bi-pencil"></i>
        </button>
        <button
          class="btn-mentoring btn-sm btn-outline-danger py-1 px-2"
          v-if="edit"
          @click="edit = false"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
    </div>
    <div class="desc">
      <form method="post" @submit.prevent="handleSubmit">
        <div class="row g-1 align-items-center mt-md-2">
          <div class="col-md-3">
            <div class="field">
              <div class="data">
                <i class="fa-brands fa-facebook me-2"></i>
                Facebook
              </div>
            </div>
          </div>
          <div class="col-md-9 py-1">
            <div class="field d-md-flex">
              <div class="data w-100 pe-md-3 mb-md-0">
                <input type="hidden" v-model="sosmed.id" />
                <input-group>
                  <input
                    type="text"
                    class="form-mentoring form-control w-100"
                    v-model="sosmed.data[0].username"
                    :readonly="!edit"
                    placeholder="Username"
                    id="user-0"
                  />
                  <label for="user-0">Username</label>
                </input-group>
              </div>
              <div class="data w-100">
                <input-group>
                  <input
                    type="url"
                    class="form-mentoring form-control w-100"
                    v-model="sosmed.data[0].hyperlink"
                    :readonly="!edit"
                    placeholder="Hyperlink"
                    id="link-0"
                  />
                  <label for="link-0">Hyperlink</label>
                </input-group>
                <small
                  class="text-danger"
                  v-if="error_submit && error_submit['data.0.hyperlink']"
                >
                  <!-- {{ error_submit["data.0.hyperlink"][0] }} -->
                  The field must be a valid url.
                </small>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="field">
              <div class="data">
                <i class="fa-brands fa-instagram me-2"></i>
                Instagram
              </div>
            </div>
          </div>
          <div class="col-md-9 py-1">
            <div class="field d-md-flex">
              <div class="data w-100 pe-md-3 mb-md-0">
                <input-group>
                  <input
                    type="text"
                    class="form-mentoring form-control w-100"
                    v-model="sosmed.data[1].username"
                    :readonly="!edit"
                    placeholder="Username"
                    id="user-1"
                  />
                  <label for="user-1">Username</label>
                </input-group>
              </div>

              <div class="data w-100">
                <input-group>
                  <input
                    type="url"
                    class="form-mentoring form-control w-100"
                    v-model="sosmed.data[1].hyperlink"
                    :readonly="!edit"
                    placeholder="hyperlink"
                    id="link-1"
                  />
                  <label for="link-1">Hyperlink</label>
                </input-group>
                <small
                  class="text-danger"
                  v-if="error_submit && error_submit['data.1.hyperlink']"
                >
                  <!-- {{ error_submit["data.1.hyperlink"][0] }} -->
                  The field must be a valid url.
                </small>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="field">
              <div class="data">
                <i class="fa-brands fa-linkedin me-2"></i>
                Linkedin
              </div>
            </div>
          </div>
          <div class="col-md-9 py-1">
            <div class="field d-md-flex">
              <div class="data w-100 pe-md-3 mb-md-0">
                <input-group>
                  <input
                    type="text"
                    class="form-mentoring form-control w-100"
                    v-model="sosmed.data[2].username"
                    :readonly="!edit"
                    placeholder="Username"
                    id="user-2"
                  />
                  <label for="user-2">Username</label>
                </input-group>
              </div>

              <div class="data w-100">
                <input-group>
                  <input
                    type="url"
                    class="form-mentoring form-control w-100"
                    v-model="sosmed.data[2].hyperlink"
                    :readonly="!edit"
                    placeholder="link"
                    id="link-2"
                  />
                  <label for="link-2">Hyperlink</label>
                </input-group>
                <small
                  class="text-danger"
                  v-if="error_submit && error_submit['data.2.hyperlink']"
                >
                  <!-- {{ error_submit["data.2.hyperlink"][0] }} -->
                  The field must be a valid url.
                </small>
              </div>
            </div>
          </div>

          <div class="col-md-12 mb-3" v-if="edit">
            <div class="text-end">
              <button
                type="submit"
                class="btn-mentoring btn-sm btn-outline-success py-1"
              >
                <i class="bi bi-save me-2"></i>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "sosmedComp",
  props: {
    id: Number,
  },
  data() {
    return {
      edit: false,
      sosmed_list: [],
      sosmed: {
        person: "student",
        data: [
          {
            username: "",
            instance: "facebook",
            hyperlink: "",
          },
          {
            username: "",
            instance: "instagram",
            hyperlink: "",
          },
          {
            username: "",
            instance: "linkedin",
            hyperlink: "",
          },
        ],
      },
      error_submit: [],
    };
  },
  methods: {
    async getData() {
      try {
        const response = await this.$axios.get(
          "social-media/student/" + this.id
        );

        // console.log(response.data);
        this.sosmed_list = response.data.data;
        const sosmed_new = this.sosmed;
        this.sosmed_list.map(function (sosmed) {
          if (sosmed.social_media_name == "facebook") {
            sosmed_new.data[0].username = sosmed.username;
            sosmed_new.data[0].hyperlink = sosmed.hyperlink;
          } else if (sosmed.social_media_name == "instagram") {
            sosmed_new.data[1].username = sosmed.username;
            sosmed_new.data[1].hyperlink = sosmed.hyperlink;
          } else if (sosmed.social_media_name == "linkedin") {
            sosmed_new.data[2].username = sosmed.username;
            sosmed_new.data[2].hyperlink = sosmed.hyperlink;
          }
        });
      } catch (e) {
        console.log(e.response.data);
      }
    },

    async handleSubmit() {
      this.$alert.loading();
      try {
        const response = await this.$axios.post(
          "student/add/social-media",
          this.sosmed
        );
        this.edit = false;
        this.error_submit = [];
        // console.log(response.data);
        this.$alert.toast("success", response.data.message);
      } catch (e) {
        this.error_submit = e.response.data.error;
        // console.log(e.response.data);
        this.$alert.close();
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
.placeholder {
  background-color: white !important;
  color: #000;
}
</style>