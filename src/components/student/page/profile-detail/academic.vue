<template>
  <div id="academic" style="scroll-margin-top: 120px">
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
      <div class="fw-light">Academics</div>
      <div class="text-end">
        <button
          class="btn-mentoring btn-sm bg-primary py-1 px-2"
          v-if="!add"
          @click="add = true"
        >
          <i class="bi bi-plus"></i>
        </button>
        <button
          class="btn-mentoring btn-sm btn-outline-danger py-1 px-2"
          v-if="add"
          @click="add = false"
        >
          <i class="bi bi-x"></i>
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
                  <div class="row g-2">
                    <div class="col-md-5">
                      <div class="mb-3">
                        <input-group>
                          <input
                            type="text"
                            v-model="academic.subject"
                            class="form-mentoring form-control w-100"
                            required
                            placeholder="fill in here ..."
                            id="school"
                          />
                          <label for="school">School Subject</label>
                        </input-group>
                      </div>
                    </div>
                    <div class="col-md-5 col-8">
                      <div class="mb-3">
                        <input-group>
                          <select
                            v-model="academic.curriculum"
                            required
                            class="form-mentoring form-control w-100"
                            @change="checkCurriculum"
                          >
                            <option value="National" selected>
                              National (out of 100)
                            </option>
                            <option value="IB">IB (out of 7)</option>
                            <option value="Cambridge">Cambridge</option>
                          </select>
                          <label for="score">Curriculum</label>
                        </input-group>
                      </div>
                    </div>
                    <div class="col-md-2 col-4">
                      <div class="mb-3">
                        <input-group v-if="academic.curriculum != 'Cambridge'">
                          <input
                            :type="input_type.score_type"
                            :max="input_type.max_score"
                            :maxlength="input_type.length"
                            v-model="academic.score"
                            required
                            placeholder="fill in here ..."
                            id="score"
                            class="form-mentoring form-control w-100"
                          />
                          <label for="score">Score</label>
                        </input-group>

                        <input-group v-if="academic.curriculum == 'Cambridge'">
                          <select
                            v-model="academic.score"
                            required
                            class="form-mentoring form-control w-100"
                          >
                            <option value="A*" selected>A*</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                          </select>
                          <label for="score">Score</label>
                        </input-group>
                      </div>
                    </div>
                    <!-- <div class="col-md-3 col-6">
                      <div class="mb-3">
                        <input-group>
                          <input
                            :type="input_type.score_type"
                            v-model="academic.max_score"
                            :max="input_type.max_score"
                            required
                            placeholder="fill in here ..."
                            id="maxScore"
                            class="form-mentoring form-control w-100"
                          />
                          <label for="maxScore">Max Score</label>
                        </input-group>
                      </div>
                    </div> -->
                  </div>

                  <div class="text-end mt-1">
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
                  <div class="d-flex align-items-center">
                    <div class="text" style="width: 80%">
                      {{ i.school_subject }}
                    </div>
                    <div class="score text-end" style="width: 20%">
                      {{ i.score }}/{{ i.max_score }}
                    </div>
                  </div>
                </td>
                <td class="text-center" width="4%">
                  <i
                    class="bi bi-x-circle text-danger pointer"
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
        <h6 class="mt-2 text-light">Are you sure you want to delete this?</h6>
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
        curriculum: "National",
        score: "",
        max_score: "",
      },
      input_type: {
        score_type: "number",
        max_score: "100",
        length: "3",
      },
    };
  },
  methods: {
    checkCurriculum() {
      let cur = this.academic.curriculum;
      if (cur == "National") {
        this.input_type.score_type = "number";
        this.input_type.max_score = 100;
        this.academic.max_score = 100;
        this.input_type.length = 3;
      } else if (cur == "IB") {
        this.input_type.score_type = "number";
        this.input_type.max_score = 7;
        this.academic.max_score = 7;
        this.input_type.length = 1;
      } else if (cur == "Cambridge") {
        this.input_type.score_type = "text";
        this.input_type.max_score = "F";
        this.academic.max_score = "F";
        this.input_type.length = 2;
      }
    },

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

        if (response.data.success) {
          this.add = false;
          this.academic.subject = "";
          this.academic.score = "";
          this.academic.max_score = "";
          // console.log(response.data);
          this.$alert.toast("success", response.data.message);
          this.getData();
        } else {
          this.academic.score = "";
          this.academic.max_score = "";
          this.$alert.toast("error", response.data.error);
        }
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