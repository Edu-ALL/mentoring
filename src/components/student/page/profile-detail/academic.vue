<template>
  <div id="academic" style="scroll-margin-top: 120px">
    <div class="heading">
      Academic

      <div class="float-end">
        <button
          class="btn-mentoring btn-sm bg-primary py-1"
          v-if="!add"
          @click="add = true"
        >
          <i class="fa-solid fa-add"></i>
        </button>
        <button
          class="btn-mentoring btn-sm btn-outline-danger py-1"
          v-if="add"
          @click="add = false"
        >
          <i class="fa-solid fa-x"></i>
        </button>
      </div>
    </div>
    <div class="desc">
      <div class="row mb-2">
        <div class="col-12">
          <form @submit.prevent="handleSubmit" method="post">
            <fieldset class="border p-2 mb-2" v-if="add">
              <legend class="float-none w-auto" style="font-size: 0.8em">
                New Academic
              </legend>
              <div class="field">
                <div class="data">
                  <div class="mb-1">
                    <small class="text-muted">School Subject</small>
                    <input
                      type="text"
                      v-model="academic.subject"
                      class="form-mentoring form-control-sm w-100"
                    />
                  </div>

                  <div class="row">
                    <div class="col">
                      <div class="mb-1">
                        <small class="text-muted">Score</small>
                        <input
                          type="number"
                          v-model="academic.score"
                          class="form-mentoring form-control-sm w-100"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-1">
                        <small class="text-muted">Max Score</small>
                        <input
                          type="number"
                          v-model="academic.max_score"
                          class="form-mentoring form-control-sm w-100"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="text-end mt-3">
                    <button
                      type="submit"
                      class="btn-mentoring btn-sm btn-outline-success py-1"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
          <table class="table table-bordered table-hover mt-2">
            <tbody>
              <tr
                v-for="(i, index) in academic_list"
                :key="index"
                class="align-middle"
              >
                <td width="5%" align="center">{{ index + 1 }}</td>
                <td>
                  <div class="d-flex">
                    <div class="text" style="width: 95%">
                      {{ i.school_subject }}
                    </div>
                    <div class="score text-end" style="width: 10%">
                      {{ i.score }} / {{ i.max_score }}
                    </div>
                  </div>
                </td>
                <td class="text-center" width="4%">
                  <i
                    class="fa-solid fa-trash text-danger pointer"
                    @click="deleteAcademic(i.id)"
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="row"
            v-if="academic_list.length == 0"
            style="margin-top: -10px"
          >
            <div class="col text-center pb-2 text-muted">
              Please fill in your academic record here.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
  <!-- delete  -->
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
            @click="deleteProcess"
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
  name: "academic",
  data() {
    return {
      add: false,
      modal: "",
      aca_id: "",
      academic_list: [],
      academic: {
        subject: "",
        score: "",
        max_score: "",
      },
    };
  },
  methods: {
    async getData() {
      try {
        const response = await this.$axios.get("student/academic");
        this.academic_list = response.data.data;
      } catch (e) {
        console.log(e.response);
      }
    },

    async handleSubmit() {
      this.$alert.loading();
      try {
        const response = await this.$axios.post("student/academic", {
          school_subject: this.academic.subject,
          score: this.academic.score,
          max_score: this.academic.max_score,
        });

        // console.log(response.data);
        this.$alert.close();

        // Reset
        this.add = false;
        this.academic.subject = "";
        this.academic.score = "";
        this.academic.max_score = "";

        this.$alert.toast("success", response.data.message);
        this.getData();
      } catch (e) {
        console.log(e.response.data);
        this.$alert.close();
        this.$alert.toast("error", "Please try again");
      }
    },

    deleteAcademic(i) {
      this.aca_id = i;
      this.modal = "delete";
    },

    async deleteProcess() {
      // this.$alert.loading();
      try {
        const response = await this.$axios.delete(
          "student/academic/" + this.aca_id
        );
        this.getData();
        this.modal = "";
        this.$alert.close();
        this.$alert.toast("success", response.data.message);
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
        this.$alert.close();
        this.$alert.toast("error", "Please try again");
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