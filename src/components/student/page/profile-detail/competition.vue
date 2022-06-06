<template>
  <div id="competition" style="scroll-margin-top: 120px">
    <div class="heading">
      Competitions

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
              New Competition
            </legend>
            <div class="field">
              <div class="data">
                <!-- new -->
                <div class="mb-1">
                  <small class="text-muted">Competition Name</small>
                  <input
                    type="text"
                    name=""
                    class="form-mentoring form-control-sm w-100"
                  />
                </div>
                <div class="mb-1">
                  <small class="text-muted">Participation Level</small>
                  <input
                    type="text"
                    name=""
                    class="form-mentoring form-control-sm w-100"
                  />
                </div>
                <div class="mb-1">
                  <small class="text-muted">Accomplishment</small>
                  <input
                    type="text"
                    name=""
                    class="form-mentoring form-control-sm w-100"
                  />
                </div>

                <div class="text-end mt-2">
                  <button class="btn-mentoring btn-sm btn-outline-success py-1">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </fieldset>

          <div class="row row-cols-md-2 row-cols-1">
            <div class="col">
              <div class="card shadow border-0">
                <div class="card-body">
                  <div class="mb-2">
                    <div class="row">
                      <div class="col-11">
                        <h5 class="text-muted">Competiton Name</h5>
                      </div>
                      <div class="col-1">
                        <i
                          class="fa-solid fa-trash text-danger pointer"
                          @click="deleteCompetition(1)"
                        ></i>
                      </div>
                    </div>
                    <small class="text font-italic">Participation Level</small>
                    <div class="my-0 mt-2">Accomplishment</div>
                  </div>
                </div>
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
  name: "competition",
  data() {
    return {
      add: false,
    };
  },
  methods: {
    deleteCompetition(i) {
      let endPoint = "delete/competition/" + i;
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