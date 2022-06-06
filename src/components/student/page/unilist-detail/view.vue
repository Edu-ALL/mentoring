<template>
  <div id="view">
    <div class="container">
      <div class="row">
        <div class="card border-0 shadow">
          <div class="card-body">
            <h5>University Name</h5>
            <div class="border">
              <div id="essay">
                <div class="req-header p-2 py-1">
                  <i class="fa-solid fa-circle-xmark me-1 text-danger"></i>
                  <i class="fa-solid fa-circle-check me-1 text-success"></i>
                  ESSAYS
                  <div class="float-end">
                    <i
                      class="fa-solid fa-add pointer"
                      @click="modal = 'files'"
                    ></i>
                  </div>
                </div>
                <div class="req-body p-2">
                  <div class="row row-cols-md-4 row-cols-2">
                    <div class="col">
                      <div class="card border-1 shadow-sm">
                        <div class="card-body text-center">
                          <i class="fa-solid fa-download d-block"></i>
                          Personal Statement
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="sat">
                <div class="req-header p-2 py-1">
                  <i class="fa-solid fa-circle-xmark me-1 text-danger"></i>
                  <i class="fa-solid fa-circle-check me-1 text-success"></i>
                  SAT
                  <div class="float-end">
                    <i class="fa-solid fa-add"></i>
                  </div>
                </div>
                <div class="req-body p-2">
                  <div class="row row-cols-md-4 row-cols-2">
                    <div class="col">
                      <div class="card border-1 shadow-sm">
                        <div class="card-body text-center">
                          <i class="fa-solid fa-download d-block"></i>
                          SAT
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="lor">
                <div class="req-header p-2 py-1">
                  <i class="fa-solid fa-circle-xmark me-1 text-danger"></i>
                  <i class="fa-solid fa-circle-check me-1 text-success"></i>
                  Letter of Recommendation
                  <div class="float-end">
                    <i class="fa-solid fa-add"></i>
                  </div>
                </div>
                <div class="req-body p-2">
                  <div class="row row-cols-md-4 row-cols-2">
                    <div class="col">
                      <div class="card border-1 shadow-sm">
                        <div class="card-body text-center">
                          <i class="fa-solid fa-download d-block"></i>
                          Letter of Recommendation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="transcript">
                <div class="req-header p-2 py-1">
                  <i class="fa-solid fa-circle-xmark me-1 text-danger"></i>
                  <i class="fa-solid fa-circle-check me-1 text-success"></i>
                  Transcript
                  <div class="float-end">
                    <i class="fa-solid fa-add"></i>
                  </div>
                </div>
                <div class="req-body p-2">
                  <div class="row row-cols-md-4 row-cols-2">
                    <div class="col">
                      <div class="card border-1 shadow-sm">
                        <div class="card-body text-center">
                          <i class="fa-solid fa-download d-block"></i>
                          Transcript
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="links">
                <div class="req-header p-2 py-1">
                  <i class="fa-solid fa-circle-xmark me-1 text-danger"></i>
                  <i class="fa-solid fa-circle-check me-1 text-success"></i>
                  Publication Links
                  <div class="float-end">
                    <i class="fa-solid fa-add"></i>
                  </div>
                </div>
                <div class="req-body p-2">
                  <div class="row row-cols-1">
                    <div class="col">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-for="i in 3" :key="i">
                          <div class="link-title">Title Name</div>
                          <div class="link-url">URL</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="scores">
                <div class="req-header p-2 py-1">
                  <i class="fa-solid fa-circle-xmark me-1 text-danger"></i>
                  <i class="fa-solid fa-circle-check me-1 text-success"></i>
                  IELTS/TOEFL Scores
                  <div class="float-end">
                    <i class="fa-solid fa-add"></i>
                  </div>
                </div>
                <div class="req-body p-2">
                  <div class="row row-cols-md-4 row-cols-2">
                    <div class="col">
                      <div class="card border-0 shadow-sm">
                        <div class="card-body text-center">
                          IELTS
                          <h5 class="mb-0">4.0</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="apTest">
                <div class="req-header p-2 py-1">
                  <i class="fa-solid fa-circle-xmark me-1 text-danger"></i>
                  <i class="fa-solid fa-circle-check me-1 text-success"></i>
                  Optional Standardized Test Scores
                  <div class="float-end">
                    <i class="fa-solid fa-add"></i>
                  </div>
                </div>
                <div class="req-body p-2">
                  <div class="row row-cols-md-4 row-cols-2">
                    <div class="col">
                      <div class="card border-0 shadow-sm">
                        <div class="card-body text-center">
                          IELTS
                          <h5 class="mb-0">4.0</h5>
                        </div>
                      </div>
                    </div>
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
    <transition name="pop">
      <div class="vue-modal vue-modal-md" v-if="modal == 'files'">
        <div class="d-flex">
          <div class="border py-1 px-2" @click="tabModal = 'new'">New File</div>
          <div class="border py-1 px-2" @click="tabModal = 'myFiles'">
            My Files
          </div>
        </div>
        <div class="border p-2" v-if="tabModal == 'new'">
          <div class="mb-2">
            <input
              type="text"
              class="form-mentoring form-control-sm w-100"
              placeholder="fill in the file name here .."
            />
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
            <button class="btn-mentoring btn-sm py-1 bg-primary">Submit</button>
          </div>
        </div>
        <div class="border p-2" v-if="tabModal == 'myFiles'">
          <div class="file-group mb-1" v-for="i in 5" :key="i">
            <input
              type="radio"
              name="radioFiles"
              value="Value3"
              :id="'radio' + i"
            />
            <label :for="'radio' + i" class="file-group-item"
              >Caption for CheckBox3</label
            >
          </div>
          <div class="text-end">
            <button class="btn-mentoring btn-sm py-1 bg-primary">Submit</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "viewUni",
  data() {
    return {
      modal: "",
      tabModal: "new",
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
  methods: {},
};
</script>

<style scoped>
.req-header {
  background: #f3f3f3;
  color: #f0ab54;
}

.req-body .card {
  transition: all 0.3s ease-in-out;
}

.req-body .card:hover {
  cursor: pointer;
  background: rgb(234, 241, 255);
}

.dropzone {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
  border: 2px dashed #41b883;
  background-color: #fff;
  transition: 0.3s ease all;
}

.dropzone label {
  padding: 8px 12px;
  color: #fff;
  background-color: #41b883;
  transition: 0.3s ease all;
}
.dropzone input {
  display: none;
}

.active-dropzone {
  color: #fff;
  border-color: #fff;
  background-color: #41b883;
}

.active-dropzone label {
  background-color: #fff;
  color: #41b883;
}

.file-group-item {
  width: 100%;
  border: 1px solid #dedede;
  border-radius: 5px;
  padding: 5px 10px;
}

.file-group-item label {
  cursor: pointer;
}

.file-group input[type="radio"] {
  display: none;
}

.file-group input[type="radio"] + .file-group-item:before {
  content: "\2713";
  color: transparent;
  font-weight: bold;
  margin-right: 10px;
}

.file-group input[type="radio"]:checked + .file-group-item {
  background-color: #0275d8;
  color: #fff;
}

.file-group input[type="radio"]:checked + .file-group-item:before {
  color: inherit;
}
</style>