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
                    name=""
                    class="form-mentoring form-control-sm w-100"
                  />
                </div>

                <div class="row">
                  <div class="col">
                    <div class="mb-1">
                      <small class="text-muted">Score</small>
                      <input
                        type="text"
                        name=""
                        class="form-mentoring form-control-sm w-100"
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="mb-1">
                      <small class="text-muted">Max Score</small>
                      <input
                        type="text"
                        name=""
                        class="form-mentoring form-control-sm w-100"
                      />
                    </div>
                  </div>
                </div>

                <div class="text-end mt-3">
                  <button class="btn-mentoring btn-sm btn-outline-success py-1">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
          <table class="table table-bordered table-hover mt-2">
            <tbody>
              <tr v-for="i in 3" :key="i" class="align-middle">
                <td width="5%" align="center">{{ i }}</td>
                <td>
                  <div class="d-flex">
                    <div class="text" style="width: 95%">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div class="score text-end" style="width: 10%">7 / 10</div>
                  </div>
                </td>
                <td class="text-center" width="4%">
                  <i
                    class="fa-solid fa-trash text-danger pointer"
                    @click="deleteAcademic(i)"
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "academic",
  data() {
    return {
      add: false,
    };
  },
  methods: {
    deleteAcademic(i) {
      let endPoint = "delete/academic/" + i;
      this.$emit("check-delete", endPoint);
    },
  },
  mounted() {},
};
</script>

<style>
.placeholder {
  background-color: white !important;
  color: #000;
}
</style>