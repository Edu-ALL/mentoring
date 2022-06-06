<template>
  <div id="addGroup">
    <div class="row">
      <div class="col-12">
        <h5>New Group</h5>
        <hr class="my-1 mb-3" />
      </div>
      <div class="col-md-6">
        <div class="mb-2">
          <label>Project Name</label>
          <input
            type="text"
            name=""
            class="form-mentoring form-control-sm w-100"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-2">
          <label>Project Type</label>
          <group-type
            v-model="groupType"
            :options="options"
            placeholder="Select One"
            @select="interestCheck"
          >
          </group-type>
        </div>
      </div>
      <div class="col-md-12">
        <div class="mb-2">
          <label>Invite Member</label>
          <invite-email
            v-model="emails"
            :options="emailOptions"
            tag-placeholder="Invite"
            placeholder="Invite new member"
            label="email"
            :search="false"
            track-by="code"
            :multiple="true"
            :taggable="true"
            @tag="addEmail"
          >
          </invite-email>
        </div>
      </div>
      <div class="col-md-12">
        <div class="mb-3">
          <label>Project Description</label>
          <textarea name="" id="" cols="30" rows="10" class="w-100"></textarea>
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
        <button class="btn-mentoring btn-success">New Group</button>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  name: "add",
  components: {
    "group-type": Multiselect,
    "invite-email": Multiselect,
  },
  data() {
    return {
      groupType: "",
      emails: [],
      emailOptions: [],
      options: ["Group Mentoring", "Profile Building Mentoring"],
    };
  },
  methods: {
    addEmail(newEmail) {
      const emails = { email: newEmail };
      //   this.emailOptions.push(emails);
      this.emails.push(emails);
    },
  },
};
</script>

<style>
</style>