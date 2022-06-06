<template>
  <div id="interest" style="scroll-margin-top: 120px">
    <div class="heading">
      Interest List

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
                <input
                  type="text"
                  name=""
                  class="form-mentoring w-100 form-control-sm mt-2"
                  placeholder="New Interest"
                  v-if="newField"
                />

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
                  <div class="d-flex align-items-center">
                    <div class="text" style="width: 95%">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div class="icon text-end" style="width: 5%">
                      <i
                        class="fa-solid fa-trash text-danger pointer"
                        @click="deleteInterest(i)"
                      ></i>
                    </div>
                  </div>
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
import Multiselect from "vue-multiselect";

export default {
  name: "interest",
  components: { Multiselect },
  data() {
    return {
      add: false,
      newField: false,
      options: ["Value 1", "Value 2", "Value 3", "Others"],
      interest: {
        name: null,
      },
    };
  },
  methods: {
    addCheck() {
      this.add = !this.add;
    },

    interestCheck(value) {
      if (value == "Others") {
        this.newField = true;
      } else {
        this.newField = false;
      }
    },

    deleteInterest(i) {
      let endPoint = "delete/interest/" + i;
      this.$emit("check-delete", endPoint);
    },
  },
  updated() {},
};
</script>

<style>
.placeholder {
  background-color: white !important;
  color: #000;
}
</style>