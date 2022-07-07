<template>
  <div id="scores">
    <div class="req-card">
      <div class="req-header">
        <div class="d-flex justify-content-between p-2 py-1">
          <div class="text-start">Publication Links</div>
          <div class="text-end">
            <i class="fa-solid fa-circle-xmark me-1 text-danger"></i>
            <i class="fa-solid fa-circle-check me-1 text-success"></i>
          </div>
        </div>
      </div>
      <div class="req-body p-2 py-4">
        <!-- IF EMPTY  -->
        <div class="row row-cols-md-2 row-cols-1">
          <div class="col">
            <div class="text-center">TOEFL</div>
            <table class="table">
              <tbody>
                <tr v-for="i in 4" :key="i">
                  <td>Subject Name</td>
                  <td class="text-end">0</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Total Score</td>
                  <td class="text-end">0</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="col">
            <div class="text-center">IELTS</div>
            <table class="table">
              <tbody>
                <tr v-for="i in 4" :key="i">
                  <td>Subject Name</td>
                  <td class="text-end">0</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Total Score</td>
                  <td class="text-end">0</td>
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
  methods: {},
  created() {},
};
</script>

<style scoped>
label::after {
  content: "";
}
</style>