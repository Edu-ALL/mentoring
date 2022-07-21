<template>
  <div id="ap">
    <div class="req-card">
      <div class="req-header">
        <div class="d-flex justify-content-between p-2 py-1">
          <div class="text-start">AP Subject</div>
          <div class="text-end">
            <i
              class="fa-solid fa-circle-xmark me-1 text-danger"
              v-if="data?.length == 0"
            ></i>
            <i
              class="fa-solid fa-circle-check me-1 text-success"
              v-if="data?.length != 0"
            ></i>
          </div>
        </div>
      </div>
      <div class="req-body p-2 py-4">
        <!-- IF EMPTY  -->
        <div class="row" v-if="data?.length == 0">
          <div class="col text-center text-muted pb-4" @click="modal = 'add'">
            No AP Subject yet.
          </div>
        </div>
        <div class="row row-cols-1" v-if="data?.length != 0">
          <div class="col">
            <table class="table table-hover">
              <tbody>
                <tr v-for="(i, index) in data" :key="index">
                  <td width="2%">{{ index + 1 }}.</td>
                  <td>{{ i.subject }}</td>
                  <td width="5%" class="text-end">{{ i.value }}</td>
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
  props: {
    data: Object,
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
  methods: {},

  created() {},
};
</script>

<style scoped>
label::after {
  content: "";
}
</style>