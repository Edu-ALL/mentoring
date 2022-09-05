<template>
  <div id="groupMember">
    <div class="row">
      <div class="col-6">
        <h6>Group Members</h6>
      </div>
      <div
        class="col-6"
        v-if="menu.key == 'progress' && group.student_id == student.id"
      >
        <div class="text-end">
          <i class="fa-solid fa-add pointer" @click="modal = 'new-meeting'"></i>
        </div>
      </div>

      <div class="col-12">
        <ul class="list-group list-group-flush members">
          <li class="list-group-item" v-for="i in members" :key="i">
            <div class="row align-items-center pointer">
              <div class="col-6">
                <div class="member-name" @click="contribution = i">
                  {{ i.first_name + " " + i.last_name }}
                  <i
                    class="fa-solid fa-crown text-warning ms-2"
                    v-if="i.id == group.student_id"
                  ></i>
                </div>
              </div>
              <div class="col-5 text-end">
                <div class="text-muted">
                  {{ i.contribution_role == null ? "-" : i.contribution_role }}
                </div>
              </div>
              <div class="col-1">
                <v-tooltip
                  arrow="true"
                  placement="left"
                  content="Active"
                  v-if="i.status == 1"
                >
                  <i class="fa-solid fa-check-circle text-success text-end"></i>
                </v-tooltip>
                <v-tooltip
                  arrow="true"
                  placement="left"
                  content="Pending"
                  v-if="i.status != 1"
                >
                  <i class="fa-solid fa-clock text-warning text-end"></i>
                </v-tooltip>
              </div>
            </div>
            <transition>
              <div class="row mt-1" v-if="contribution == i">
                <div class="col-12" style="text-align: justify">
                  <div class="border rounded-2 p-2">
                    {{
                      i.contribution_description == null
                        ? "Not set-up yet"
                        : i.contribution_description
                    }}
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </div>

    <div class="vue-modal-overlay" v-if="modal != ''"></div>
    <!-- New Member  -->
    <transition name="pop">
      <div class="vue-modal vue-modal-sm" v-if="modal == 'new-meeting'">
        <form method="post" @submit.prevent="handleSubmit()">
          <h5>Invite New Member</h5>
          <hr class="my-0 mb-3" />
          <div class="mb-3">
            <input-group>
              <input
                type="email"
                class="form-mentoring form-control w-100"
                v-model="participant"
                required
                placeholder="fill in here ..."
                id="email"
              />
              <label for="email">Email</label>
            </input-group>
          </div>
          <hr />
          <div class="row">
            <div class="col-6">
              <button
                class="btn-mentoring btn-sm py-1 btn-outline-danger"
                @click="modal = ''"
              >
                <i class="bi bi-x-circle me-1"></i>
                Cancel
              </button>
            </div>
            <div class="col-6 text-end">
              <button
                type="submit"
                class="btn-mentoring btn-sm py-1 btn-success"
              >
                <i class="bi bi-person-plus me-1"></i>
                Invite
              </button>
            </div>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "groupMember",
  props: {
    menu: Object,
    member: Object,
    group: Object,
    student: Object,
  },
  data() {
    return {
      contribution: "",
      modal: "",
      members: [],
      participant: "",
    };
  },
  methods: {
    async handleSubmit() {
      this.modal = "";
      this.$alert.loading();
      try {
        const response = await this.$axios.post(
          "student/group/project/participant",
          {
            group_id: this.group.id,
            participant: [this.participant],
          }
        );

        // console.log(response.data);

        if (response.data.success) {
          this.$alert.toast("success", response.data.message);
          setTimeout(() => {
            this.$emit("check", "new");
          }, 3000);
        } else {
          this.$alert.toast(
            "error",
            response.data.error.exists
              ? response.data.error.exists
              : response.data.error.joined
          );
        }

        this.participant = "";

        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again");
      }
    },
  },
  updated() {
    this.members = this.member;
  },
  created() {
    this.members = this.member;
  },
};
</script>

<style scoped>
.members {
  font-size: 0.9em;
}
</style>