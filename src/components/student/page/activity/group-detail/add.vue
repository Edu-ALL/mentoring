<template>
  <div id="addGroup">
    <form method="post" @submit.prevent="handleSubmit()">
      <div class="row">
        <div class="col-12">
          <h5>New Group</h5>
          <hr class="my-1 mb-3" />
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <input-group>
              <input
                type="text"
                v-model="group.project_name"
                class="form-mentoring form-control w-100"
                required
                placeholder="fill in here ..."
                id="projectName"
              />
              <label for="projectName">Project Name</label>
            </input-group>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <group-type
              v-model="group.project_type"
              :options="options"
              placeholder="Select project type"
              required
              @select="interestCheck"
              style="margin-top: 13px"
            >
            </group-type>
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <input-group>
              <input
                type="file"
                class="form-mentoring form-control"
                placeholder="add a logo"
                @change="addLogo"
              />
            </input-group>
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <input-group class="w-100">
              <input
                type="email"
                class="form-mentoring form-control"
                v-model="member"
                placeholder="add members email here."
                @blur="validateEmail"
                @keydown.enter.prevent="addMember"
                @keydown.tab.prevent="addMember"
                @keydown.,.prevent="addMember"
                id="member"
              />
              <label for="member">Invite New Member</label>
            </input-group>
            <transition name="fade">
              <small class="text-danger d-block" v-if="error_member"
                >Please enter a valid email</small
              >
            </transition>
            <div
              class="badge bg-white text-muted me-1 rounded"
              v-for="(i, index) in members"
              :key="index"
            >
              {{ i }}
              <i
                class="fa-solid fa-x pointer ms-2"
                @click="removeMember(index)"
              ></i>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <input-group>
              <textarea
                cols="30"
                rows="10"
                class="form-control form-mentoring w-100"
                v-model="group.project_desc"
                required
                placeholder="fill in here ..."
                id="desc"
              ></textarea>
              <label for="desc">Project Description</label>
            </input-group>
          </div>
        </div>
        <div class="col-6">
          <button
            class="btn-mentoring btn-outline-danger"
            @click="$emit('modal', '')"
          >
            Cancel
          </button>
        </div>
        <div class="col-6 text-end">
          <button type="submit" class="btn-mentoring btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
// import inputTag from "vue3-input-tags";
export default {
  name: "add",
  components: {
    "group-type": Multiselect,
    // "invite-email": Multiselect,
    // "input-tags": inputTag,
  },
  data() {
    return {
      emails: [],
      emailOptions: [],
      options: ["Group Mentoring", "Profile Building Mentoring"],
      group: {
        project_name: "",
        project_type: "",
        project_desc: "",
        project_status: "",
        status: "in progress",
        owner_type: "student",
      },
      group_logo: "",
      member: "",
      members: [],
      error_member: false,
    };
  },
  methods: {
    // addEmail(newEmail) {
    //   const emails = { email: newEmail };
    //   //   this.emailOptions.push(emails);
    //   this.emails.push(emails);
    // },

    addLogo(e) {
      this.group_logo = e.target.files[0];
    },

    validateEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    addMember() {
      if (this.validateEmail(this.member)) {
        this.members.push(this.member);
        this.member = "";
        this.error_member = false;
      } else {
        this.member = "";
        this.error_member = true;
      }
    },

    removeMember(i) {
      this.members.splice(i, 1);
      this.error_member = false;
    },

    async handleSubmit() {
      let form = new FormData();
      form.append("project_name", this.group.project_name);
      form.append("project_type", this.group.project_type);
      form.append("project_desc", this.group.project_desc);
      form.append("project_status", this.group.project_status);
      form.append("status", this.group.status);
      form.append("owner_type", this.group.owner_type);
      form.append("picture", this.group_logo);

      // for (var pair of form.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }

      this.$emit("modal", "");
      this.$alert.loading();
      try {
        const response = await this.$axios.post("student/group/project", form);

        if (response.data.success) {
          this.handleMembers(response.data.data.id);
        } else {
          this.$alert.toast("error", response.data.error);
        }

        // console.log(response.data);
      } catch (e) {
        // this.$alert.close();
        console.log(e.response);
      }
    },

    async handleMembers(id) {
      if (this.members) {
        try {
          const response = await this.$axios.post(
            "student/group/project/participant",
            {
              group_id: id,
              participant: this.members,
            }
          );

          this.$emit("data", response.data);
        } catch (e) {
          console.log(e.response);
          this.$emit("data", e.response.data);
        }
      }
      this.$alert.close();
    },
  },
};
</script>

<style scoped>
</style>>
