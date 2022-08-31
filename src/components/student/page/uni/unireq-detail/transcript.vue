<template>
  <div id="transcript">
    <div class="req-header p-2 py-1">
      <i
        class="bi bi-bookmark-x-fill me-1 text-danger"
        v-if="data?.length == 0"
      ></i>
      <i
        class="bi bi-bookmark-check-fill me-1 text-success"
        v-if="data?.length != 0"
      ></i>
      Transcript
      <div class="float-end">
        <i class="fa-solid fa-add pointer" @click="modal = 'files'"></i>
      </div>
    </div>
    <div class="req-body p-2 py-4">
      <!-- IF EMPTY  -->
      <div class="row" v-if="data?.length == 0">
        <div class="col text-center text-muted pb-4" @click="modal = 'add'">
          Please upload your transcript here.
        </div>
      </div>
      <div class="row row-cols-md-5 row-cols-1">
        <div class="col" v-for="i in data" :key="i">
          <div class="card shadow-sm docs h-100">
            <div class="card-body text-center d-flex align-items-center">
              <div class="w-100 justify-content-center docs-detail">
                <div class="d-block mb-2">
                  <i
                    class="fa-solid fa-file-pdf fa-2x text-danger"
                    v-if="i.med_file_format == 'pdf'"
                  ></i>
                  <i
                    class="fa-solid fa-file-word fa-2x text-primary"
                    v-if="
                      i.med_file_format == 'docx' || i.med_file_format == 'doc'
                    "
                  ></i>
                  <i
                    class="fa-solid fa-file-excel fa-2x text-success"
                    v-if="i.med_file_format == 'xlsx'"
                  ></i>
                  <i
                    class="fa-solid fa-file-image fa-2x text-secondary"
                    v-if="
                      i.med_file_format.toLowerCase() == 'png' ||
                      i.med_file_format.toLowerCase() == 'jpeg' ||
                      i.med_file_format.toLowerCase() == 'jpg'
                    "
                  ></i>
                </div>
                {{ i.med_title }}
              </div>
              <div class="docs-content">
                <div class="">
                  <a
                    :href="$base_url + i.med_file_path"
                    target="_blank"
                    class="btn btn-mentoring bg-white p-1 px-2 mx-1"
                    download
                  >
                    <i class="bi bi-download text-primary"></i>
                  </a>
                  <button
                    class="btn btn-mentoring bg-white p-1 px-2 mx-1"
                    @click="editMedia(i)"
                  >
                    <i class="bi bi-pencil-square text-info"></i>
                  </button>
                  <button
                    class="btn btn-mentoring bg-white p-1 px-2 mx-1"
                    @click="deleteMedia(i.id)"
                  >
                    <i class="bi bi-trash2-fill text-danger"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
  <!-- Modal Document  -->

  <!-- Upload  -->
  <transition name="pop">
    <div class="vue-modal vue-modal-md" v-if="modal == 'files'">
      <h6>Upload New Transcript</h6>
      <form @submit.prevent="handleUpload" method="post">
        <div class="border p-2" v-if="tabModal == 'new'">
          <div class="my-3">
            <input-group>
              <input
                type="text"
                class="form-mentoring form-control w-100"
                v-model="file.name"
                required
                id="fileName"
                placeholder="fill in here ..."
              />
              <label for="fileName">File Name</label>
            </input-group>
          </div>
          <div class="border mb-2">
            <div
              @dragenter.prevent="toggleActive"
              @dragleave.prevent="toggleActive"
              @dragover.prevent
              @drop.prevent="drop"
              :class="{ 'active-dropzone': active }"
              class="dropzone"
            >
              <span>Drag or Drop File</span>
              <span>OR</span>
              <label for="dropzoneFile">Select File</label>
              <input
                type="file"
                id="dropzoneFile"
                class="dropzoneFile"
                @change="selectedFile"
              />
            </div>
            <div class="my-2">
              <span class="file-info">
                File: {{ dropzoneFile.name }}
                <i
                  class="fa-solid fa-times text-danger ms-2 pointer"
                  v-if="dropzoneFile"
                  @click="deleteFile"
                ></i>
              </span>
            </div>
          </div>
          <div class="text-end">
            <button type="submit" class="btn-mentoring btn-sm py-1 bg-primary">
              <i class="fa-solid fa-save me-2"></i>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </transition>

  <!-- Edit  -->
  <transition name="pop">
    <div class="vue-modal vue-modal-md" v-if="modal == 'edit'">
      <h6>Update Transcript</h6>
      <form @submit.prevent="handleUpdate" method="post">
        <hr class="mt-1 mb-3" />
        <div class="mb-2">
          <input v-model="media_id" hidden />
          <input-group>
            <input
              type="text"
              class="form-mentoring form-control w-100"
              v-model="file.name"
              required
              id="fileName"
              placeholder="fill in here ..."
            />
            <label for="fileName">File Name</label>
          </input-group>
        </div>

        <div class="float-start">
          <button
            type="button"
            class="btn-mentoring btn-sm py-1 bg-secondary mt-3"
            @click="modal = ''"
          >
            Cancel
          </button>
        </div>
        <div class="float-end mt-3">
          <button type="submit" class="btn-mentoring btn-sm py-1 bg-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  </transition>

  <!-- Delete  -->
  <transition name="pop">
    <div class="vue-modal vue-modal-sm bg-primary" v-if="modal == 'delete'">
      <div class="text-center">
        <i class="fa-solid fa-circle-exclamation fa-2xl"></i>
        <h5 class="mt-2">Are you sure to delete?</h5>
        <div class="mt-3">
          <button
            class="btn-mentoring btn-warning btn-sm py-1 mx-1"
            @click="modal = ''"
          >
            <i class="bi bi-x-circle me-1"></i>
            Cancel</button
          ><button
            class="btn-mentoring btn-outline-danger btn-sm py-1 mx-1"
            @click="handleDelete"
          >
            <i class="bi bi-trash2 me-1"></i>
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";

export default {
  name: "transcript",
  props: {
    data: Object,
  },
  data() {
    return {
      modal: "",
      tabModal: "new",
      media_id: "",
      file: {
        uni_id: "",
        name: "",
        file_category: "transcript",
        subject: "",
        uploaded_file: [],
      },
    };
  },

  setup() {
    const active = ref(false);
    const toggleActive = () => {
      active.value = !active.value;
    };

    let dropzoneFile = ref("");
    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
    };

    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
    };

    const deleteFile = () => {
      dropzoneFile.value = "";
    };

    return {
      active,
      toggleActive,
      dropzoneFile,
      drop,
      selectedFile,
      deleteFile,
    };
  },
  methods: {
    async handleUpload() {
      this.modal = "";

      if (this.dropzoneFile) {
        this.file.uploaded_file = this.dropzoneFile;
      }

      let form = new FormData();
      form.append("uni_id", this.file.uni_id);
      form.append("name", this.file.name);
      form.append("uploaded_file", this.file.uploaded_file);
      form.append("file_category", this.file.file_category);

      // for (var pair of form.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }

      this.$alert.loading();

      try {
        const response = await this.$axios.post(
          "student/document/requirement",
          form
        );

        this.file.name = "";
        this.file.uploaded_file = [];
        this.dropzoneFile = "";

        this.$emit("check", "file");
        this.$alert.toast("success", response.data.message);
        console.log(response.data);
      } catch (e) {
        console.log(e.response.data);
        if (e.response.data.error.uploaded_file) {
          this.$alert.toast("error", e.response.data.error.uploaded_file[0]);
        } else if (e.response.data.error.uni_id) {
          this.$alert.toast("error", e.response.data.error.uni_id[0]);
        } else {
          this.$alert.toast("error", "Please try again.");
        }
      }
    },

    editMedia(i) {
      this.modal = "edit";
      this.media_id = i.id;
      this.file.name = i.med_title;
      if (i.uni_shortlisted && i.uni_shortlisted.length > 0) {
        this.file.uni_id = i.uni_shortlisted[0];
      } else {
        this.file.uni_id = {
          id: "general",
          uni_name: "General",
          uni_major: "",
        };
      }
    },

    async handleUpdate() {
      let form_data = [];
      form_data = {
        media_id: this.media_id,
        name: this.file.name,
      };

      this.modal = "";

      this.$alert.loading();
      try {
        const response = await this.$axios.post(
          "student/media/update",
          form_data
        );

        console.log(response.data);
        this.$emit("check", "file");
        if (response.data.success) {
          this.$alert.toast("success", response.data.message);
        } else {
          this.$alert.toast("success", response.data.error);
        }
      } catch (e) {
        console.log(e.response);
        this.$emit("check", "file");
        this.$alert.toast("error", "Please try again");
      }
    },

    deleteMedia(i) {
      this.modal = "delete";
      this.media_id = i;
    },

    async handleDelete() {
      this.modal = "";

      this.$alert.loading();
      try {
        const response = await this.$axios.delete(
          "student/media/delete/" + this.media_id
        );

        // console.log(response.data);
        this.$emit("check", "file");
        this.$alert.toast("success", response.data.message);
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again");
      }
    },
  },
};
</script>

<style>
</style>