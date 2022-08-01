<template>
  <div id="sat">
    <div class="req-card">
      <div class="req-header">
        <div class="d-flex justify-content-between p-2 py-1">
          <div class="text-start">SAT</div>
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
      <!-- {{ data }} -->
      <div class="req-body px-md-4 px-2 py-4">
        <div class="row">
          <div class="col">
            <div class="mb-3 p-2">
              <table width="100%">
                <tr valign="middle">
                  <td width="20%">English Score</td>
                  <td>
                    <input
                      v-model="academic.value[0]"
                      type="number"
                      max="800"
                      min="0"
                      class="form-mentoring form-control-sm w-100 ms-2"
                      :disabled="!edit"
                    />
                  </td>
                </tr>
                <div class="mb-3"></div>
                <tr valign="middle">
                  <td width="20%">Math Score</td>
                  <td>
                    <input
                      v-model="academic.value[1]"
                      type="number"
                      max="800"
                      min="0"
                      class="form-mentoring form-control-sm w-100 ms-2"
                      :disabled="!edit"
                    />
                  </td>
                </tr>
              </table>
              <div class="float-end mt-3" v-if="edit">
                <button type="sumbmit" class="btn-mentoring bg-secondary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sat",
  props: {
    data: Object,
  },
  data() {
    return {
      edit: false,
      academic: {
        category: "sat",
        subject: ["english", "math"],
        value: [null, null],
      },
    };
  },
  methods: {
    checkData() {
      let list = this.data;
      if (list && list.length == 0) {
        this.academic.value[0] = 0;
        this.academic.value[1] = 0;
      } else if (list) {
        this.academic.value[0] = list[0].value;
        this.academic.value[1] = list[1].value;
      }
    },
  },
  updated() {
    if (this.academic.value[0] == null && this.academic.value[1] == null) {
      this.checkData();
    }
  },
  created() {
    this.checkData();
  },
};
</script>

<style>
</style>