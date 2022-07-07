<template>
  <div id="ap">
    <div class="req-card">
      <div class="req-header">
        <div class="d-flex justify-content-between p-2 py-1">
          <div class="text-start">AP Subject</div>
          <div class="text-end">
            <i class="fa-solid fa-circle-xmark me-1 text-danger"></i>
            <i class="fa-solid fa-circle-check me-1 text-success"></i>
          </div>
        </div>
      </div>
      <div class="req-body p-2 py-4">
        <!-- IF EMPTY  -->
        <!-- <div class="row" >
        <div class="col text-center text-muted pb-4" @click="modal = 'add'">
          No AP Subject yet.
        </div>
      </div> -->
        <div class="row row-cols-1">
          <div class="col">
            <table class="table table-hover">
              <tbody>
                <tr v-for="i in 5" :key="i">
                  <td width="2%">{{ i }}.</td>
                  <td>Subject Name</td>
                  <td width="5%" class="text-end">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "apScore",
  props: {},
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
  methods: {},

  created() {},
};
</script>

<style scoped>
label::after {
  content: "";
}
</style>