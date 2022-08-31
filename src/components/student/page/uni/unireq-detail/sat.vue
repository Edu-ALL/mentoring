<template>
  <div id="sat">
    <div class="req-header p-2 py-1">
      <i
        class="bi bi-bookmark-x-fill me-1 text-danger"
        v-if="data?.length == 0"
      ></i>
      <i
        class="bi bi-bookmark-check-fill me-1 text-success"
        v-if="data?.length != 0"
      ></i>
      SAT
      <div class="float-end pointer">
        <i class="fa-solid fa-pencil" @click="edit = !edit" v-if="!edit"></i>
        <i class="fa-solid fa-close" @click="edit = !edit" v-if="edit"></i>
      </div>
    </div>
    <div class="req-body px-md-4 px-2 py-4">
      <form @submit.prevent="handleUpdate()">
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
      </form>
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

    async handleUpdate() {
      // console.log(this.academic);
      this.$alert.loading();

      try {
        const response = await this.$axios.post(
          "student/academic/requirement",
          this.academic
        );
        this.$emit("check", "academic");
        this.edit = false;
        this.$alert.toast("success", response.data.message);
        // console.log(response);
      } catch (e) {
        console.log(e.response);
        this.$alert.close();
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