<template>
  <div id="groupMember">
    <div class="row">
      <div class="col-6">
        <h6>Group Members</h6>
      </div>
      <div class="col-6" v-if="group.status == 'in progress'">
        <div class="text-end">
          <i class="fa-solid fa-add pointer" @click="modal = 'new'"></i>
        </div>
      </div>

      <div class="col-12">
        <ul class="list-group list-group-flush members">
          <li class="list-group-item p-0" v-for="i in member" :key="i">
            <div class="row align-items-center pointer py-1">
              <div class="col-7">
                <div class="d-flex align-items-center">
                  <div class="member-name" @click="contribution = i">
                    {{ i.first_name + " " + i.last_name }}
                    <i
                      class="fa-solid fa-crown text-warning ms-2"
                      v-if="i.id == group.student_id"
                    ></i>
                  </div>
                  <div
                    class="remove-member"
                    :class="contribution == i ? 'active' : ''"
                    v-if="i.id != group.student_id"
                    @click="removeMember(i.id)"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </div>
                </div>
              </div>
              <div class="col-4 text-end">
                <div class="text-muted">
                  {{ i.contribution_role == null ? "-" : i.contribution_role }}
                </div>
              </div>
              <div class="col-1 p-0">
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
              <div class="row my-1 mb-2" v-if="contribution == i">
                <div class="col-12" style="text-align: justify">
                  <div class="border rounded-2 p-2">
                    {{
                      i.contribution_description == null
                        ? "-"
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
      <div
        class="vue-modal vue-modal-md mentoring-scroll"
        style="overflow: unset !important"
        v-if="modal == 'new'"
      >
        <form method="post" @submit.prevent="handleSubmit()">
          <h5>Invite New Member</h5>
          <hr class="my-0 mb-3" />
          <div class="mb-3">
            <v-member
              v-model="members"
              :options="menteeList"
              :option-height="10"
              placeholder="Invite new member"
              :close-on-select="true"
              :clear-on-select="true"
              deselect-label=""
              select-label=""
              track-by="id"
              :custom-label="customLabel"
              :multiple="true"
              :taggable="true"
              required
              style="margin-top: 13px"
            >
            </v-member>
          </div>
          <hr />
          <div class="row">
            <div class="col-6">
              <button
                type="button"
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

    <!-- Remove Member  -->
    <transition name="pop">
      <div
        class="vue-modal vue-modal-sm bg-primary text-center"
        v-if="modal == 'remove-member'"
      >
        <i class="fa-solid fa-circle-exclamation mx-1 fa-2xl"></i>
        <h5 class="mt-3 mb-3">Are you sure you want to remove this member?</h5>
        <button
          class="btn-mentoring btn-sm py-1 btn-danger mx-1"
          @click="modal = ''"
        >
          <i class="bi bi-x-circle me-1"></i>
          Close
        </button>
        <button
          class="btn-mentoring btn-sm py-1 btn-outline-success mx-1"
          @click="handleRemove()"
        >
          <i class="bi bi-trash2 me-1"></i>
          Yes, Remove
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  name: "groupMember",
  props: {
    menu: Object,
    member: Object,
    group: Object,
  },
  components: {
    "v-member": Multiselect,
  },
  data() {
    return {
      contribution: "",
      modal: "",
      menteeList: [],
      members: [],
      participant: [],
      member_id: "",
    };
  },
  methods: {
    customLabel({ first_name, last_name }) {
      return `${first_name} ${last_name}`;
    },

    async getMentee() {
      try {
        const response = await this.$axios.get("list/student");

        this.menteeList = response.data.data;
        // console.log(response);
      } catch (e) {
        console.log(e.response);
      }
    },

    async handleSubmit() {
      this.participant = [];
      this.members.forEach((element) => {
        this.participant.push(element.id);
      });

      this.modal = "";
      this.$alert.loading();
      try {
        const response = await this.$axios.post("create/group/participant", {
          group_id: this.group.id,
          participant: this.participant,
        });

        if (response.data.success) {
          this.$alert.toast("success", response.data.message);
          this.$emit("check", "new");
        } else {
          this.$alert.toast(
            "error",
            response.data.error.exists
              ? response.data.error.exists
              : response.data.error.joined
          );
        }
        this.members = [];
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again");
      }
    },

    removeMember(id) {
      this.modal = "remove-member";
      this.member_id = id;
    },

    async handleRemove() {
      this.$alert.loading();
      try {
        const response = await this.$axios.delete(
          "student/group/project/participant/" +
            this.group.id +
            "/" +
            this.member_id
        );

        if (response.data.success) {
          this.$alert.toast("success", response.data.message);
          this.$emit("check", "new");
        } else {
          this.$alert.toast(
            "error",
            response.data.error.exists
              ? response.data.error.exists
              : response.data.error.joined
          );
        }

        this.modal = "";
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again");
        this.modal = "";
      }
    },
  },
  updated() {},
  created() {
    this.getMentee();
  },
};
</script>

<style scoped>
input-group input:focus,
input-group textarea:focus {
  border: 2px solid #fff;
}

input::placeholder {
  color: rgb(237, 237, 237) !important;
  font-size: 0.8em;
}

.members {
  font-size: 0.9em;
}

.member-name {
  width: 90%;
}

.remove-member {
  width: 0;
  height: 100%;
  background: rgb(194, 65, 65);
  text-align: center;
  color: #fff;
  font-size: 0.8em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 10px;
  float: end;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.remove-member.active {
  opacity: 1;
}
</style>