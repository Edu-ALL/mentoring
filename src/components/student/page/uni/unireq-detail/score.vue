<template>
  <div id="scores">
    <div class="req-header p-2 py-1">
      <i
        class="bi bi-bookmark-x-fill me-1 text-danger"
        v-if="data?.length == 0"
      ></i>
      <i
        class="bi bi-bookmark-check-fill me-1 text-success"
        v-if="data?.length != 0"
      ></i>
      TOEFL/IELTS Scores
      <div class="float-end">
        <i class="fa-solid fa-add pointer" @click="addScore"></i>
      </div>
    </div>
    <div class="req-body p-2 py-4">
      <!-- IF EMPTY  -->
      <div class="row" v-if="toefl?.length == 0 && ielts?.length == 0">
        <div class="col text-center text-muted pb-4" @click="addScore">
          No scores yet.
        </div>
      </div>
      <div class="row row-cols-md-2 row-cols-1">
        <div class="col" v-if="toefl?.length != 0">
          <div class="text-center">TOEFL</div>
          <table class="table">
            <tbody>
              <tr v-for="i in toefl" :key="i">
                <td>
                  {{ capitalize(i.subject) }}
                </td>
                <td class="text-end">{{ i.value }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Total Score</td>
                <td class="text-end">
                  {{ sumScore(toefl) }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="col" v-if="ielts?.length != 0">
          <div class="text-center">IELTS</div>
          <table class="table">
            <tbody>
              <tr v-for="i in ielts" :key="i">
                <td>{{ capitalize(i.subject) }}</td>
                <td class="text-end">{{ i.value }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Total Score</td>
                <td class="text-end">{{ sumScore(ielts) }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
  <!-- Modal Document  -->
  <transition name="pop">
    <div class="vue-modal vue-modal-sm" v-if="modal == 'add'">
      <form @submit.prevent="submitData" method="post">
        <div class="row">
          <div class="col-md-6">
            <h6>TOEFL Score</h6>
            <hr class="mt-1 mb-3" />
            <div class="mb-3">
              <input-group>
                <input
                  type="number"
                  v-model="scores.toefl_data.value[0]"
                  max="30"
                  class="form-mentoring form-control w-100"
                  placeholder="fill in here ..."
                  id="toeflReading"
                />
                <label for="toeflReading">Reading</label>
              </input-group>
            </div>
            <div class="mb-3">
              <input-group>
                <input
                  type="number"
                  v-model="scores.toefl_data.value[1]"
                  max="30"
                  class="form-mentoring form-control w-100"
                  placeholder="fill in here ..."
                  id="toeflListening"
                />
                <label for="toeflListening">Listening</label>
              </input-group>
            </div>
            <div class="mb-3">
              <input-group>
                <input
                  type="number"
                  v-model="scores.toefl_data.value[2]"
                  max="30"
                  class="form-mentoring form-control w-100"
                  placeholder="fill in here ..."
                  id="toeflSpeaking"
                />
                <label for="toeflSpeaking">Speaking</label>
              </input-group>
            </div>
            <div class="mb-3">
              <input-group>
                <input
                  type="number"
                  v-model="scores.toefl_data.value[3]"
                  max="30"
                  class="form-mentoring form-control w-100"
                  placeholder="fill in here ..."
                  id="toeflWriting"
                />
                <label for="toeflWriting">Writing</label>
              </input-group>
            </div>
          </div>
          <div class="col-md-6">
            <h6>IELTS Score</h6>
            <hr class="mt-1 mb-3" />
            <div class="mb-3">
              <input-group>
                <input
                  type="number"
                  v-model="scores.ielts_data.value[0]"
                  max="30"
                  class="form-mentoring form-control w-100"
                  placeholder="fill in here ..."
                  id="ieltsReading"
                />
                <label for="ieltsReading">Reading</label>
              </input-group>
            </div>
            <div class="mb-3">
              <input-group>
                <input
                  type="number"
                  v-model="scores.ielts_data.value[1]"
                  max="30"
                  class="form-mentoring form-control w-100"
                  placeholder="fill in here ..."
                  id="ieltsListening"
                />
                <label for="ieltsListening">Listening</label>
              </input-group>
            </div>
            <div class="mb-3">
              <input-group>
                <input
                  type="number"
                  v-model="scores.ielts_data.value[2]"
                  max="30"
                  class="form-mentoring form-control w-100"
                  placeholder="fill in here ..."
                  id="ieltsSpeaking"
                />
                <label for="ieltsSpeaking">Speaking</label>
              </input-group>
            </div>
            <div class="mb-3">
              <input-group>
                <input
                  type="number"
                  v-model="scores.ielts_data.value[3]"
                  max="30"
                  class="form-mentoring form-control w-100"
                  placeholder="fill in here ..."
                  id="ieltsWriting"
                />
                <label for="ieltsWriting">Writing</label>
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
</template>

<script>
export default {
  name: "scores",
  props: {
    toefl: Object,
    ielts: Object,
  },
  data() {
    return {
      modal: "",
      scores: {
        toefl_data: {
          category: "toefl",
          subject: ["reading", "listening", "speaking", "writing"],
          value: ["", "", "", ""],
          input: ["text", "text", "text", "text"],
        },
        ielts_data: {
          category: "ielts",
          subject: ["reading", "listening", "speaking", "writing"],
          value: ["", "", "", ""],
          input: ["text", "text", "text", "text"],
        },
      },
    };
  },
  methods: {
    sumScore(data) {
      if (data && data.length != 0) {
        return data.reduce((acc, item) => acc + parseInt(item.value), 0);
      }
    },

    capitalize(str) {
      if (str) {
        return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
      }
    },

    addScore() {
      this.modal = "add";

      if (this.toefl && this.toefl.length == 0) {
        this.scores.toefl_data.value = [0, 0, 0, 0];
      } else {
        this.scores.toefl_data.value[0] = parseInt(this.toefl[0].value);
        this.scores.toefl_data.value[1] = parseInt(this.toefl[1].value);
        this.scores.toefl_data.value[2] = parseInt(this.toefl[2].value);
        this.scores.toefl_data.value[3] = parseInt(this.toefl[3].value);
      }

      if (this.ielts && this.ielts.length == 0) {
        this.scores.ielts_data.value = [0, 0, 0, 0];
      } else {
        this.scores.ielts_data.value[0] = parseInt(this.ielts[0].value);
        this.scores.ielts_data.value[1] = parseInt(this.ielts[1].value);
        this.scores.ielts_data.value[2] = parseInt(this.ielts[2].value);
        this.scores.ielts_data.value[3] = parseInt(this.ielts[3].value);
      }
    },

    submitData() {
      let toefl = this.scores.toefl_data;
      let ielts = this.scores.ielts_data;

      this.handleSubmit(toefl);
      this.handleSubmit(ielts);

      this.modal = "";
    },

    async handleSubmit(data) {
      // console.log(this.scores.toefl_data);

      this.$alert.loading();
      try {
        const response = await this.$axios.post(
          "student/academic/requirement",
          data
        );

        this.$emit("check", "academic");

        this.$alert.toast("success", response.data.message);
        // console.log(response);
      } catch (e) {
        console.log(e.response);
        this.$alert.close();
      }
    },
  },
  created() {},
};
</script>

<style scoped>
label::after {
  content: "";
}
</style>