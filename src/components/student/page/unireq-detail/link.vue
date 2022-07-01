<template>
  <div id="links">
    <div class="req-header p-2 py-1">
      <i
        class="fa-solid fa-circle-xmark me-1 text-danger"
        v-if="data?.length == 0"
      ></i>
      <i
        class="fa-solid fa-circle-check me-1 text-success"
        v-if="data?.length != 0"
      ></i>
      Publication Links
      <div class="float-end">
        <i class="fa-solid fa-add pointer" @click="modal = 'add'"></i>
      </div>
    </div>
    <div class="req-body p-2 py-4">
      <!-- IF EMPTY  -->
      <div class="row" v-if="data?.length == 0">
        <div class="col text-center text-muted pb-4" @click="modal = 'add'">
          Please add your publication links here.
        </div>
      </div>
      <div class="row row-cols-1">
        <div class="col">
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item p-0"
              v-for="(i, index) in data"
              :key="index"
            >
              <div class="row align-items-center">
                <div class="col-12 link-content">
                  <div class="link-title text-muted d-flex align-items-center">
                    <strong class="me-3">{{ index + 1 }}</strong>
                    <strong class="w-100">
                      {{ i.subject }}
                    </strong>
                  </div>
                  <div class="action">
                    <div class="goto" @click="goto(i.value)">
                      <i class="fa-solid fa-paper-plane"></i>
                    </div>
                    <div class="delete" @click="deleteData(i.id)">
                      <i class="fa-solid fa-trash text-end"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
  <!-- Modal Document  -->
  <!-- Add  -->
  <transition name="pop">
    <div class="vue-modal vue-modal-sm" v-if="modal == 'add'">
      <form @submit.prevent="handleSubmit" method="post">
        <h6 class="mb-0">Publication Links</h6>
        <hr class="my-1 mb-3" />
        <div class="mb-2">
          <input-group>
            <input
              type="text"
              v-model="link.subject[0]"
              class="form-mentoring form-control-sm w-100"
              required
            />
            <label>Title</label>
          </input-group>
        </div>
        <div class="mb-3">
          <input-group>
            <input
              type="text"
              v-model="link.value[0]"
              class="form-mentoring form-control-sm w-100"
              required
            />
            <label>Hyperlink</label>
          </input-group>
        </div>
        <div class="text-end">
          <button type="submit" class="btn-mentoring btn-sm py-1 bg-primary">
            <i class="fa-solid fa-save me-2"></i>
            Save
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
            Cancel</button
          ><button
            class="btn-mentoring btn-outline-success btn-sm py-1 mx-1"
            @click="handleDelete"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "links",
  props: {
    data: Object,
  },
  data() {
    return {
      modal: "",
      link_id: "",
      link: {
        category: "publication_links",
        subject: [""],
        value: [""],
      },
    };
  },
  methods: {
    goto(i) {
      window.open(i, "_blank");
    },
    async handleSubmit() {
      this.modal = "";

      // console.log(this.link);
      this.$alert.loading();

      try {
        const response = await this.$axios.post(
          "student/academic/requirement",
          this.link
        );

        this.link.subject[0] = "";
        this.link.value[0] = "";
        this.$emit("check", "academic");

        this.$alert.toast("success", response.data.message);
        // console.log(response);
      } catch (e) {
        console.log(e.response);
        this.$alert.close();
      }
    },

    deleteData(id) {
      this.modal = "delete";
      this.link_id = id;
    },

    async handleDelete() {
      this.modal = "";

      this.$alert.loading();
      try {
        const response = await this.$axios.delete(
          "student/academic/requirement/" + this.link_id
        );

        // console.log(response.data);
        this.$emit("check", "academic");
        this.$alert.toast("success", response.data.message);
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again");
      }
    },
  },
};
</script>

<style scoped>
.link-content {
  position: relative;
  width: 100%;
  padding: 10px;
  padding-left: 30px;
}

.action {
  position: absolute;
  right: -15%;
  top: 0;
  width: 15%;
  height: 100%;
  display: flex;
  color: #fff;
  transition: all 0.4s;
  cursor: pointer;
}

.goto {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #223872;
}

.delete {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
}

.link-content:hover .action {
  right: 0;
}
</style>