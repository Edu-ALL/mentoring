<template>
  <div id="sosmed" style="scroll-margin-top: 120px">
    <div class="heading">
      Social Media
      <div class="float-end">
        <button
          class="btn-mentoring btn-sm bg-primary py-1"
          v-if="!edit"
          @click="edit = true"
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          class="btn-mentoring btn-sm btn-outline-danger py-1"
          v-if="edit"
          @click="edit = false"
        >
          <i class="fa-solid fa-x"></i>
        </button>
      </div>
    </div>
    <div class="desc">
      <form method="post" @submit.prevent="handleSubmit">
        <div class="row g-1 align-items-center">
          <div class="col-md-3 col-4">
            <div class="field">
              <div class="data">
                <i class="fa-brands fa-facebook me-2"></i>
                Facebook
              </div>
            </div>
          </div>
          <div class="col-md-9 col-8">
            <div class="field">
              <div class="data">
                <input type="hidden" v-model="sosmed.id" />
                <input
                  type="text"
                  name=""
                  class="form-mentoring form-control-sm w-100"
                  v-model="sosmed.data[0].hyperlink"
                  :readonly="!edit"
                />
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
          <div class="col-md-3 col-4">
            <div class="field">
              <div class="data">
                <i class="fa-brands fa-instagram me-2"></i>
                Instagram
              </div>
            </div>
          </div>
          <div class="col-md-9 col-8">
            <div class="field">
              <div class="data">
                <input
                  type="text"
                  name=""
                  class="form-mentoring form-control-sm w-100"
                  v-model="sosmed.data[1].hyperlink"
                  :readonly="!edit"
                />
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
          <div class="col-md-3 col-4">
            <div class="field">
              <div class="data">
                <i class="fa-brands fa-linkedin me-2"></i>
                Linkedin
              </div>
            </div>
          </div>
          <div class="col-md-9 col-8">
            <div class="field">
              <div class="data">
                <input
                  type="text"
                  name=""
                  class="form-mentoring form-control-sm w-100"
                  v-model="sosmed.data[2].hyperlink"
                  :readonly="!edit"
                />
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
            instance: "facebook",
            hyperlink: "",
          },
          {
            person: "student",
            instance: "instagram",
            hyperlink: "",
          },
          {
            person: "student",
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
        this.sosmed_list = response.data.data;
        const sosmed_new = this.sosmed;
        this.sosmed_list.map(function (sosmed) {
          if (sosmed.social_media_name == "facebook") {
            sosmed_new.data[0].hyperlink = sosmed.hyperlink;
          } else if (sosmed.social_media_name == "instagram") {
            sosmed_new.data[1].hyperlink = sosmed.hyperlink;
          } else if (sosmed.social_media_name == "linkedin") {
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
        // this.$alert.close();
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