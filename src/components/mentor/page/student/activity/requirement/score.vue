<template>
  <div id="scores">
    <div class="req-card">
      <div class="req-header">
        <div class="d-flex justify-content-between p-2 py-1">
          <div class="text-start">IELTS/TOEFL Scores</div>
          <div class="text-end">
            <i
              class="fa-solid fa-circle-xmark me-1 text-danger"
              v-if="toefl?.length == 0 && ielts?.length == 0"
            ></i>
            <i
              class="fa-solid fa-circle-check me-1 text-success"
              v-if="toefl?.length != 0 || ielts?.length != 0"
            ></i>
          </div>
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
                  <td>{{ capitalize(i.subject) }}</td>
                  <td class="text-end">{{ i.value }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Total Score</td>
                  <td class="text-end">{{ sumScore(toefl) }}</td>
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
  </div>
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
  },
  created() {},
};
</script>

<style scoped>
label::after {
  content: "";
}
</style>