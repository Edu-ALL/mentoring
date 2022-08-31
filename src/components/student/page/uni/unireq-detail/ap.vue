<template>
  <div id="ap">
    <div class="req-header p-2 py-1">
      <i
        class="bi bi-bookmark-x-fill me-1 text-danger"
        v-if="data?.length == 0"
      ></i>
      <i
        class="bi bi-bookmark-check-fill me-1 text-success"
        v-if="data?.length != 0"
      ></i>
      AP Score
      <div class="float-end">
        <i class="fa-solid fa-add pointer" @click="modal = 'add'"></i>
      </div>
    </div>
    <div class="req-body p-2 py-4">
      <!-- IF EMPTY  -->
      <div class="row" v-if="data?.length == 0">
        <div class="col text-center text-muted pb-4" @click="modal = 'add'">
          Please add your ap score.
        </div>
      </div>
      <div class="row row-cols-1" v-if="data?.length != 0">
        <div class="col">
          <table class="table table-hover">
            <tbody>
              <tr v-for="(i, index) in data" :key="index">
                <td width="2%">{{ index + 1 }}.</td>
                <td>
                  {{ i.subject }}
                  <i
                    class="fa-solid fa-close text-danger ms-3 pointer"
                    @click="deleteData(i.id)"
                  ></i>
                </td>
                <td width="5%" class="text-end">{{ i.value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
  <!-- Modal Document  -->
  <transition name="pop">
    <div class="vue-modal vue-modal-md" v-if="modal == 'add'">
      <form @submit.prevent="handleSubmit" method="post">
        <h6>AP Score</h6>
        <hr class="mt-1 mb-3" />
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <multiselect
                v-model="score.subject[0]"
                :options="options"
                placeholder="Select AP subject"
              >
              </multiselect>
            </div>
            <div class="mb-3">
              <input-group>
                <input
                  type="number"
                  v-model="score.value[0]"
                  max="30"
                  class="form-mentoring form-control w-100"
                  required
                  placeholder="fill in here ..."
                  id="score"
                />
                <label for="score">Score</label>
              </input-group>
            </div>
          </div>
        </div>

        <div class="text-center mt-3">
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
import Multiselect from "vue-multiselect";

export default {
  name: "apScore",
  props: {
    data: Object,
  },
  components: {
    Multiselect,
  },
  data() {
    return {
      modal: "",
      value: "",
      score_id: "",
      score: {
        category: "ap_score",
        subject: [""],
        value: [""],
      },
      options: [],
    };
  },
  methods: {
    async getAPSubject() {
      try {
        const response = await this.$axios.get("ap/list");

        let subject = response.data.data;

        subject.forEach((element) => {
          this.options.push(element.subject);
        });
        // console.log(this.options);
      } catch (e) {
        console.log(e.response);
      }
    },

    async handleSubmit() {
      // console.log(this.score);
      this.modal = "";

      this.$alert.loading();
      try {
        const response = await this.$axios.post(
          "student/academic/requirement",
          this.score
        );

        this.score.subject[0] = "";
        this.score.value[0] = "";
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
      this.score_id = id;
    },

    async handleDelete() {
      this.modal = "";

      this.$alert.loading();
      try {
        const response = await this.$axios.delete(
          "student/academic/requirement/" + this.score_id
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

  created() {
    this.getAPSubject();
  },
};
</script>

<style scoped>
label::after {
  content: "";
}
</style>