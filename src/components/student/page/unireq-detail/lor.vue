<template>
  <div id="lor">
    <div class="req-header p-2 py-1">
      <i class="fa-solid fa-circle-xmark me-1 text-danger"></i>
      <i class="fa-solid fa-circle-check me-1 text-success"></i>
      Letter of Recommendation
      <div class="float-end">
        <i class="fa-solid fa-add pointer" @click="modal = 'files'"></i>
      </div>
    </div>
    <div class="req-body p-2">
      <div class="row row-cols-md-4 row-cols-1">
        <div class="col">
          <div class="card border-0 shadow-sm">
            <div class="card-body text-center">
              <i class="fa-solid fa-download d-block"></i>
              Letter of Recommendation
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
</template>

<script>
import { ref } from "vue";

export default {
  name: "lor",
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

<style>
</style>