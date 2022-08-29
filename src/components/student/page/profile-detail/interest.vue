<template>
  <div id="interest" style="scroll-margin-top: 120px">
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
      <div class="fw-light">Interest List</div>
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
          <form method="post" @submit.prevent="handleSubmit">
            <fieldset class="border p-2" :class="add ? 'd-block' : 'd-none'">
              <legend class="float-none w-auto" style="font-size: 0.8em">
                New Interest
              </legend>
              <div class="field">
                <div class="data">
                  <multiselect
                    v-model="interest.name"
                    :options="options"
                    placeholder="Select One"
                    @select="interestCheck"
                  >
                  </multiselect>

                  <!-- new -->
                  <div class="mt-3" v-if="newField">
                    <input-group>
                      <input
                        type="text"
                        name=""
                        class="form-mentoring w-100 form-control"
                        required
                        v-model="interest.other"
                        placeholder="fill in here ..."
                        id="other"
                      />
                      <label for="other">Interest</label>
                    </input-group>
                    <small
                      class="text-danger"
                      v-if="error_form && error_form.career_major_other"
                      >{{ error_form.career_major_other[0] }}</small
                    >
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

          <table class="table table-bordered table-hover mt-2">
            <tbody>
              <tr
                v-for="(i, index) in interest_list"
                :key="index"
                class="align-middle"
              >
                <td width="5%" align="center">{{ index + 1 }}</td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="text" style="width: 95%">
                      {{ i.career_major_name }}
                    </div>
                    <div class="icon text-end" style="width: 5%">
                      <i
                        class="bi bi-x-circle text-danger pointer"
                        @click="deleteInterest(i.id)"
                      ></i>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div
            class="row"
            v-if="interest_list.length == 0"
            style="margin-top: -10px"
          >
            <div class="col text-center pb-2 text-muted">
              Please fill in your interest here.
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
import Multiselect from "vue-multiselect";

export default {
  name: "interest",
  components: { Multiselect },
  data() {
    return {
      add: false,
      modal: "",
      newField: false,
      options: [],
      interest_id: "",
      interest_list: [],
      interest: {
        exist: false,
        name: null,
        other: null,
      },
      error_form: [],
    };
  },
  methods: {
    addCheck() {
      this.add = !this.add;
    },

    interestCheck(value) {
      if (value == "Other") {
        this.newField = true;
      } else {
        this.newField = false;
        this.error_form = [];
      }
    },

    async getInterest() {
      this.options = [];
      try {
        const response = await this.$axios.get(
          "https://internship.all-inedu.com/api/specialization"
        );

        let specialization = response.data.data;
        specialization.forEach((element) => {
          this.options.push(element.spec_name);
        });
        // this.interest_list = response.data.data;
        // console.log(response);
      } catch (e) {
        console.log(e.response);
      }
    },

    async getData() {
      try {
        const response = await this.$axios.get("student/interest");
        this.interest_list = response.data.data;
        // console.log(response);
      } catch (e) {
        console.log(e.response);
      }
    },

    async handleSubmit() {
      // check others name
      if (this.interest.name == "Other") {
        this.interest.exist = false;
        this.interest.name = null;
      } else {
        this.interest.exist = true;
      }

      // console.log(this.interest);

      this.$alert.loading();
      try {
        const response = await this.$axios.post("student/interest", {
          exists: this.interest.exist,
          career_major_name: this.interest.name,
          career_major_other: this.interest.other,
        });

        // console.log(response.data);
        this.$alert.close();

        // Reset
        this.add = false;
        this.newField = false;
        this.interest.name = "";
        this.interest.other = "";
        this.error_form = [];

        this.$alert.toast("success", response.data.message);
        this.getData();
      } catch (e) {
        console.log(e.response);

        if (e.response.status == 400) {
          console.log(e.response.data.error);
          this.error_form = e.response.data.error;
          this.interest.name = "Other";
        }

        this.$alert.toast("error", "Please try again");
      }
    },

    deleteInterest(i) {
      this.interest_id = i;
      this.modal = "delete";
    },

    async deleteProcess() {
      // this.$alert.loading();
      try {
        const response = await this.$axios.delete(
          "student/interest/" + this.interest_id
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
    this.getInterest();
  },
};
</script>

<style>
.placeholder {
  background-color: white !important;
  color: #000;
}
</style>