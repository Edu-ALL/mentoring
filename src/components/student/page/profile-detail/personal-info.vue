<template>
  <div id="info" style="scroll-margin-top: 120px">
    <div class="heading">
      Personal Information
      <div class="float-end">
        <button
          class="btn-mentoring btn-sm bg-primary py-1"
          v-if="!edit"
          @click="edit = true"
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          class="btn-mentoring btn-sm btn-outline-danger py-1"
          v-if="edit"
          @click="edit = false"
        >
          <i class="fa-solid fa-x"></i>
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
          <div class="row g-1" v-if="edit">
            <div class="col-6">
              <input
                type="text"
                name=""
                class="form-mentoring form-control-sm w-100"
                placeholder="First Name"
                v-model="mentee.first_name"
              />
            </div>
            <div class="col-6">
              <input
                type="text"
                name=""
                class="form-mentoring form-control-sm w-100"
                placeholder="Last Name"
                v-model="mentee.last_name"
              />
            </div>
          </div>
        </div>
        <div class="field">
          <div class="label">Email</div>
          <div class="data" v-if="!edit">{{ mentee.email }}</div>
          <div class="" v-if="edit">
            <input
              type="text"
              name=""
              class="form-mentoring form-control-sm w-50"
              placeholder="E-mail"
              v-model="mentee.email"
            />
          </div>
        </div>

        <div class="field">
          <div class="label">Phone Number</div>
          <div class="data" v-if="!edit">{{ mentee.phone_number }}</div>
          <div class="" v-if="edit">
            <input
              type="text"
              name=""
              class="form-mentoring form-control-sm w-50"
              v-model="mentee.phone_number"
            />
          </div>
        </div>

        <div class="field">
          <div class="label">Address</div>
          <div class="data" v-if="!edit">
            {{ mentee.address }}
          </div>
          <div class="" v-if="edit">
            <textarea
              name=""
              class="form-mentoring w-100"
              v-model="mentee.address"
            ></textarea>
          </div>
        </div>

        <div class="row" v-if="!edit">
          <div class="col-md-4">
            <div class="field">
              <div class="label">School Name</div>
              <div class="data">{{ mentee.school_name }}</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="field">
              <div class="label">Grade</div>
              <div class="data">{{ mentee.grade }}</div>
            </div>
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
        });

        this.edit = false;
        this.mentee = response.data.data;
        localStorage.setItem("mentee", JSON.stringify(response.data.data));
        this.$alert.toast("success", response.data.message);
        // console.log(response.data);
      } catch (e) {
        console.log(e.response.data);
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