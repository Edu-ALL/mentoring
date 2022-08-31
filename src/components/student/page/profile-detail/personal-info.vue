<template>
  <div id="info" style="scroll-margin-top: 120px">
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
      <div class="fw-light">Personal Information</div>
      <div class="text-end">
        <button
          class="btn-mentoring btn-sm bg-primary py-1 px-2"
          v-if="!edit"
          @click="edit = true"
        >
          <i class="bi bi-pencil"></i>
        </button>
        <button
          class="btn-mentoring btn-sm btn-outline-danger py-1 px-2"
          v-if="edit"
          @click="edit = false"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
    </div>
    <form method="post" @submit.prevent="handleSubmit">
      <div class="desc">
        <div class="field">
          <div class="label">Full Name</div>
          <div class="data" v-if="!edit">
            {{ mentee.first_name + " " + mentee.last_name }}
          </div>
          <div class="row g-2" v-if="edit">
            <div class="col-6">
              <input
                type="text"
                class="form-mentoring form-control-sm w-100"
                placeholder="First Name"
                v-model="mentee.first_name"
              />
            </div>
            <div class="col-6">
              <input
                type="text"
                class="form-mentoring form-control-sm w-100"
                placeholder="Last Name"
                v-model="mentee.last_name"
              />
            </div>
          </div>
        </div>

        <div class="row g-2">
          <div class="col-md-6">
            <div class="field">
              <div class="label">Email</div>
              <div class="data" v-if="!edit">{{ mentee.email }}</div>
              <div class="" v-if="edit">
                <input
                  type="text"
                  class="form-mentoring form-control-sm w-100"
                  placeholder="E-mail"
                  v-model="mentee.email"
                  readonly
                />
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="data" v-if="!edit">{{ mentee.phone_number }}</div>
              <vue-tel-input
                v-model="mentee.phone_number"
                v-if="edit"
                required
              ></vue-tel-input>
              <small class="text-danger" v-if="error.phone_number">
                {{ error.phone_number[0] }}
              </small>
            </div>
          </div>
        </div>

        <div class="row g-2">
          <div class="col-md-6">
            <div class="field">
              <div class="label">School Name</div>
              <div class="data" v-if="!edit">{{ mentee.school_name }}</div>
              <input
                type="text"
                class="form-mentoring form-control-sm w-100"
                placeholder="E-mail"
                v-model="mentee.school_name"
                v-if="edit"
                required
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="field">
              <div class="label">Grade</div>
              <div class="data" v-if="!edit">
                {{ mentee.grade }}
              </div>
              <select
                v-model="mentee.grade"
                class="form-mentoring form-control-sm w-100"
                required
                v-if="edit"
              >
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">Not High School</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <div class="label">Address</div>
          <div class="data" v-if="!edit">
            {{ mentee.address }}
          </div>
          <div class="" v-if="edit">
            <textarea
              class="form-mentoring w-100"
              v-model="mentee.address"
              rows="5"
              required
            ></textarea>
          </div>
        </div>

        <div class="row mb-3" v-if="edit">
          <div class="col">
            <hr />
            <div class="text-end">
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
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "personal-info",
  data() {
    return {
      edit: false,
      mentee: [],
      error: [],
    };
  },
  methods: {
    async handleSubmit() {
      this.$alert.loading();
      try {
        const response = await this.$axios.put("student/profile", {
          first_name: this.mentee.first_name,
          last_name: this.mentee.last_name,
          email: this.mentee.email,
          phone_number: this.mentee.phone_number,
          address: this.mentee.address,
          school_name: this.mentee.school_name,
          grade: this.mentee.grade,
        });

        this.edit = false;
        this.mentee = response.data.data;
        localStorage.setItem("mentee", JSON.stringify(response.data.data));
        this.$alert.toast("success", response.data.message);
        // console.log(response.data);
      } catch (e) {
        console.log(e.response.data);
        if (e.response.status == 400) {
          this.error = e.response.data.error;
        }
        this.$alert.toast("error", "Please try again.");
      }
    },
  },
  created() {
    if (localStorage.getItem("role") != "mentee") {
      this.$router.push({ path: "/" });
    } else {
      this.mentee = JSON.parse(localStorage.getItem("mentee"));
    }
  },
};
</script>

<style>
</style>