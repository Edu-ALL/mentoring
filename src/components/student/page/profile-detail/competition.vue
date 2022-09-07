<template>
  <div id="competition" style="scroll-margin-top: 120px">
    <div
      class="
        heading
        px-3
        py-1
        d-flex
        justify-content-between
        align-items-center
      "
    >
      <div class="fw-light">Competitions</div>
      <div class="text-end">
        <button
          class="btn-mentoring btn-sm bg-primary py-1 px-2"
          v-if="!add"
          @click="add = true"
        >
          <i class="bi bi-plus"></i>
        </button>
        <button
          class="btn-mentoring btn-sm btn-outline-danger py-1 px-2"
          v-if="add"
          @click="add = false"
        >
          <i class="bi bi-x"></i>
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
                  <div class="row g-3">
                    <div class="col-md-6 mb-1">
                      <input-group>
                        <input
                          type="text"
                          v-model="competition.name"
                          required
                          placeholder="fiil in here ..."
                          class="form-mentoring form-control w-100"
                          id="compName"
                        />
                        <label for="compName">Competition Name</label>
                      </input-group>
                      <small></small>
                    </div>
                    <div class="col-md-6 mb-1">
                      <input-group>
                        <input
                          type="text"
                          v-model="competition.level"
                          required
                          placeholder="fiil in here ..."
                          class="form-mentoring form-control w-100"
                          id="participationLevel"
                        />
                        <label for="participationLevel"
                          >Participation Level</label
                        >
                      </input-group>
                    </div>
                    <div class="col-md-6 mb-1">
                      <input-group>
                        <input
                          type="text"
                          v-model="competition.accomplishment"
                          class="form-mentoring form-control w-100"
                          required
                          placeholder="fiil in here ..."
                          id="accomplishment"
                        />
                        <label for="accomplishment">Accomplishment</label>
                      </input-group>
                    </div>
                    <div class="col-md-3 mb-1">
                      <input-group>
                        <select
                          class="form-mentoring form-control"
                          id="month"
                          v-model="competition.month"
                          required
                        >
                          <option value="01">January</option>
                          <option value="02">February</option>
                          <option value="03">March</option>
                          <option value="04">April</option>
                          <option value="05">May</option>
                          <option value="06">June</option>
                          <option value="07">July</option>
                          <option value="08">August</option>
                          <option value="09">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>
                        <label for="month">Month</label>
                      </input-group>
                    </div>
                    <div class="col-md-3 mb-1">
                      <input-group>
                        <select
                          class="form-mentoring form-control"
                          id="year"
                          v-model="competition.year"
                          required
                        >
                          <option
                            :value="parseInt(year) - i + 1"
                            v-for="i in 10"
                            :key="i"
                          >
                            {{ parseInt(year) - i + 1 }}
                          </option>
                        </select>
                        <label for="year">Year</label>
                      </input-group>
                    </div>
                  </div>

                  <div class="text-end mt-3">
                    <button
                      type="submit"
                      class="btn-mentoring btn-sm btn-outline-success py-1"
                    >
                      <i class="bi bi-save me-2"></i>
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>

          <div class="row row-cols-md-2 row-cols-1 g-2 align-items-stretch">
            <div class="col" v-for="i in competition_list" :key="i">
              <div class="card shadow-sm border-0 h-100">
                <div class="card-body">
                  <div class="mb-2">
                    <div class="d-flex align-items-start">
                      <div class="title" style="width: 90%">
                        <h5 class="text-muted my-0">
                          {{ i.comp_name }}
                        </h5>
                      </div>
                      <div class="text-end" style="width: 10%">
                        <i
                          class="bi bi-x-circle text-danger pointer"
                          @click="deleteCompetition(i.id)"
                        ></i>
                      </div>
                    </div>
                    <div class="badge bg-primary shadow-sm">
                      {{ i.participation_level }}
                    </div>
                    <div class="badge bg-primary shadow-sm ms-1">
                      {{ i.month + "/" + i.year }}
                    </div>
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
        <h6 class="mt-2 text-light">Are you sure you want to delete this?</h6>
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
import moment from "moment";
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
        month: moment().format("MM"),
        year: moment().format("YYYY"),
      },
      year: moment().format("YYYY"),
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
          month: this.competition.month,
          year: this.competition.year.toString(),
        });

        // console.log(response.data);
        // this.$alert.close();

        // Reset
        this.add = false;
        this.competition.name = "";
        this.competition.level = "";
        this.competition.accomplishment = "";
        this.competition.month = "";
        this.competition.year = "";

        this.$alert.toast("success", response.data.message);
        this.getData();
      } catch (e) {
        console.log(e.response.data);
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