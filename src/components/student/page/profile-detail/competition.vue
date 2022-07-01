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
          <form @submit.prevent="handleSubmit" method="post">
            <fieldset class="border p-2 mb-2" v-if="add">
              <legend class="float-none w-auto" style="font-size: 0.8em">
                New Competition
              </legend>
              <div class="field">
                <div class="data">
                  <!-- new -->
                  <div class="mb-1">
                    <input-group>
                      <input
                        type="text"
                        v-model="competition.name"
                        required
                        class="form-mentoring form-control-sm w-100"
                      />
                      <label>Competition Name</label>
                    </input-group>
                    <small></small>
                  </div>

                  <div class="mb-1">
                    <input-group>
                      <input
                        type="text"
                        v-model="competition.level"
                        required
                        class="form-mentoring form-control-sm w-100"
                      />
                      <label>Participation Level</label>
                    </input-group>
                  </div>
                  <div class="mb-1">
                    <input-group>
                      <input
                        type="text"
                        v-model="competition.accomplishment"
                        class="form-mentoring form-control-sm w-100"
                        required
                      />
                      <label>Accomplishment</label>
                    </input-group>
                  </div>

                  <div class="text-end mt-3">
                    <button
                      type="submit"
                      class="btn-mentoring btn-sm btn-outline-success py-1"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
          <div class="row row-cols-md-2 row-cols-1 g-2">
            <div class="col" v-for="i in competition_list" :key="i">
              <div class="card shadow border-0">
                <div class="card-body">
                  <div class="mb-2">
                    <div class="row">
                      <div class="col-11">
                        <h5 class="text-muted">
                          {{ i.comp_name }}
                        </h5>
                      </div>
                      <div class="col-1">
                        <i
                          class="fa-solid fa-trash text-danger pointer"
                          @click="deleteCompetition(i.id)"
                        ></i>
                      </div>
                    </div>
                    <small class="text font-italic">{{
                      i.participation_level
                    }}</small>
                    <div class="my-0 mt-2">{{ i.accomplishments }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row" v-if="competition_list.length == 0">
            <div class="col text-center py-3 text-muted">
              Please fill in your competition here.
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
        <h5 class="mt-2">Are you sure to delete?</h5>
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
  name: "competition",
  data() {
    return {
      add: false,
      modal: "",
      comp_id: "",
      competition_list: [],
      competition: {
        name: "",
        level: "",
        accomplishment: "",
      },
    };
  },
  methods: {
    async getData() {
      try {
        const response = await this.$axios.get("student/competition");
        this.competition_list = response.data.data;
        // console.log(response);
      } catch (e) {
        console.log(e.response);
      }
    },

    async handleSubmit() {
      this.$alert.loading();
      try {
        const response = await this.$axios.post("student/competition", {
          comp_name: this.competition.name,
          participation_level: this.competition.level,
          accomplishment: this.competition.accomplishment,
        });

        // console.log(response.data);
        // this.$alert.close();

        // Reset
        this.add = false;
        this.competition.name = "";
        this.competition.level = "";
        this.competition.accomplishment = "";

        this.$alert.toast("success", response.data.message);
        this.getData();
      } catch (e) {
        // console.log(e.response.data);
        // this.$alert.close();
        this.$alert.toast("error", "Please try again");
      }
    },

    deleteCompetition(i) {
      this.comp_id = i;
      this.modal = "delete";
    },

    async deleteProcess() {
      // this.$alert.loading();
      try {
        const response = await this.$axios.delete(
          "student/competition/" + this.comp_id
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