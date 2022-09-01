<template>
  <!-- {{ list.uni_rejected }} -->
  <div id="uniShortlisted">
    <div class="border p-1 rounded mt-3">
      <div class="row row-cols-md-5 row-cols-1">
        <!-- Shortlisted  -->
        <div class="col">
          <div
            class="card border-1 shadow-sm my-2 btn-outline-primary pointer"
            @click="modal = 'add'"
          >
            <div class="card-body py-1 text-center" nowrap>
              <i class="fa-solid fa-plus me-2"></i>
              Add a New University
            </div>
          </div>

          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">Shortlisted</h6>
          </div>
          <div
            class="col-12 text-center p-2 text-muted shadow-sm"
            v-if="list.uni_shortlisted.length == 0"
          >
            No university yet
          </div>
          <draggable
            v-model="list.uni_shortlisted"
            group="uniList"
            class="dragArea list-group"
            tag="shortlisted"
            :component-data="{ status: 'shortlist' }"
            @start="drag = true"
            @end="drag = false"
            :move="newLog"
            item-key="name"
          >
            <template #item="{ element }">
              <div
                class="
                  card-uni
                  border-1
                  shadow-sm
                  px-3
                  py-2
                  mb-2
                  text-center
                  position-relative
                  overflow-hidden
                "
              >
                <h6 class="my-0">{{ element.uni_name }}</h6>
                <small>{{ element.uni_major }}</small>
                <div class="trash">
                  <i
                    class="fa-solid fa-trash text-white"
                    @click="removeList(element.id)"
                  ></i>
                </div>
              </div>
            </template>
          </draggable>
        </div>

        <!-- Applied  -->
        <div class="col">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">Applied</h6>
          </div>
          <div
            class="col-12 text-center p-2 text-muted shadow-sm"
            v-if="list.uni_applied.length == 0"
          >
            No university yet
          </div>
          <draggable
            v-model="list.uni_applied"
            group="uniList"
            class="dragArea list-group"
            tag="waitlisted"
            :component-data="{ status: 'apply' }"
            @start="drag = true"
            @end="drag = false"
            :move="newLog"
            item-key="name"
          >
            <template #item="{ element }">
              <div
                class="
                  card-uni
                  border-1
                  shadow-sm
                  px-3
                  py-2
                  mb-2
                  text-center
                  position-relative
                  overflow-hidden
                "
              >
                <h6 class="my-0">{{ element.uni_name }}</h6>
                <small>{{ element.uni_major }}</small>
                <div class="trash">
                  <i
                    class="fa-solid fa-trash text-white"
                    @click="removeList(element.id)"
                  ></i>
                </div>
              </div>
            </template>
          </draggable>
        </div>

        <!-- Accepted  -->
        <div class="col">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">Accepted</h6>
          </div>
          <div
            class="col-12 text-center p-2 text-muted shadow-sm"
            v-if="list.uni_accepted.length == 0"
          >
            No university yet
          </div>
          <draggable
            v-model="list.uni_accepted"
            group="uniList"
            class="dragArea list-group"
            tag="waitlisted"
            :component-data="{ status: 'accept' }"
            @start="drag = true"
            @end="drag = false"
            :move="newLog"
            item-key="name"
          >
            <template #item="{ element }">
              <div
                class="
                  card-uni
                  border-1
                  shadow-sm
                  px-3
                  py-2
                  mb-2
                  text-center
                  position-relative
                  overflow-hidden
                "
              >
                <h6 class="my-0">{{ element.uni_name }}</h6>
                <small>{{ element.uni_major }}</small>
                <div class="trash">
                  <i
                    class="fa-solid fa-trash text-white"
                    @click="removeList(element.id)"
                  ></i>
                </div>
              </div>
            </template>
          </draggable>
        </div>

        <!-- Rejected  -->
        <div class="col">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">Rejected</h6>
          </div>
          <div
            class="col-12 text-center p-2 text-muted shadow-sm"
            v-if="list.uni_rejected.length == 0"
          >
            No university yet
          </div>
          <draggable
            v-model="list.uni_rejected"
            group="uniList"
            class="dragArea list-group"
            tag="waitlisted"
            :component-data="{ status: 'reject' }"
            @start="drag = true"
            @end="drag = false"
            :move="newLog"
            item-key="name"
          >
            <template #item="{ element }">
              <div
                class="
                  card-uni
                  border-1
                  shadow-sm
                  px-3
                  py-2
                  mb-2
                  text-center
                  position-relative
                  overflow-hidden
                "
              >
                <h6 class="my-0">{{ element.uni_name }}</h6>
                <small>{{ element.uni_major }}</small>
                <div class="trash">
                  <i
                    class="fa-solid fa-trash text-white"
                    @click="removeList(element.id)"
                  ></i>
                </div>
              </div>
            </template>
          </draggable>
        </div>

        <!-- Waitlisted  -->
        <div class="col">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">Waitlisted</h6>
          </div>
          <div
            class="col-12 text-center p-2 text-muted shadow-sm"
            v-if="list.uni_waitlisted.length == 0"
          >
            No university yet
          </div>
          <draggable
            v-model="list.uni_waitlisted"
            group="uniList"
            class="dragArea list-group"
            tag="waitlisted"
            :component-data="{ status: 'waitlist' }"
            @start="drag = true"
            @end="drag = false"
            :move="newLog"
            item-key="name"
          >
            <template #item="{ element }">
              <div
                class="
                  card-uni
                  border-1
                  shadow-sm
                  px-3
                  py-2
                  mb-2
                  text-center
                  position-relative
                  overflow-hidden
                "
              >
                <h6 class="my-0">{{ element.uni_name }}</h6>
                <small>{{ element.uni_major }}</small>
                <div class="trash">
                  <i
                    class="fa-solid fa-trash text-white"
                    @click="removeList(element.id)"
                  ></i>
                </div>
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>

    <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
    <transition name="pop">
      <div class="vue-modal vue-modal-md" v-if="modal == 'add'">
        <h6 class="my-0">New University</h6>
        <hr class="mb-1" />
        <form method="post" @submit.prevent="handleSubmit">
          <div class="mt-2 mb-3">
            <!-- {{ uni_select }} -->
            <v-uni
              v-model="uni_select"
              :options="uni_list"
              placeholder="Select One"
              :custom-label="customUnilabel"
              required
              @select="uniListCheck"
            >
            </v-uni>
          </div>
          <div class="mb-3">
            <input-group>
              <input
                type="text"
                class="form-mentoring form-control w-100"
                placeholder="fill in here."
                required
                v-model="uni.major"
              />
              <label>Major</label>
            </input-group>
          </div>
          <hr class="my-1 mb-3" />
          <div class="d-flex justify-content-between">
            <button
              class="btn-mentoring btn-outline-danger py-1 px-3"
              type="button"
              @click="modal = ''"
            >
              Cancel
            </button>
            <button class="btn-mentoring btn-success py-1 px-3" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </transition>
  </div>

  <div class="vue-modal-overlay" v-if="modal != ''"></div>
  <!-- Completed Group  -->
  <transition name="pop">
    <div
      class="vue-modal vue-modal-sm bg-primary text-center"
      v-if="modal == 'confirm'"
    >
      <i class="fa-solid fa-circle-exclamation mx-1 fa-2xl"></i>
      <h5 class="mt-3 mb-3">Are you sure to delete?</h5>
      <!-- <h5 class="mt-3 mb-3" v-if="confirm_status == 'in progress'">
        Are you sure this group back to in progress?
      </h5> -->
      <button
        class="btn-mentoring btn-sm py-1 btn-danger mx-1"
        @click="modal = ''"
      >
        Cancel
      </button>
      <button
        class="btn-mentoring btn-sm py-1 btn-outline-success mx-1"
        @click="confirmDelete()"
      >
        Yes
      </button>
    </div>
  </transition>
</template>

<script>
import draggable from "vuedraggable";
import Multiselect from "vue-multiselect";

export default {
  name: "uniShortlisted",
  components: {
    draggable,
    "v-uni": Multiselect,
  },
  props: {
    menus: Object,
  },
  data() {
    return {
      drag: false,
      modal: "",
      // uni_shortlisted: [],
      // uni_waitlisted: [],
      // uni_accepted: [],
      // uni_applied: [],
      // uni_rejected: [],
      uni_select: [],
      uni_list: [
        {
          id: "general",
          uni_name: "General",
          uni_major: "",
        },
      ],
      uni: {
        student_id: "",
        univ_id: [""],
        major: [""],
      },
      list: {
        uni_shortlisted: [],
        uni_waitlisted: [],
        uni_accepted: [],
        uni_applied: [],
        uni_rejected: [],
      },
      uni_id: "",
    };
  },
  methods: {
    customUnilabel({ univ_name }) {
      return `${univ_name}`;
    },

    async getData() {
      this.$Progress.start();
      const id = this.menus.submenu;
      try {
        const response = await this.$axios.get("select/shortlisted/" + id);
        this.list.uni_shortlisted = response.data.data.shortlisted;
        this.list.uni_waitlisted = response.data.data.waitlisted;
        this.list.uni_accepted = response.data.data.accepted;
        this.list.uni_applied = response.data.data.applied;
        this.list.uni_rejected = response.data.data.rejected;
        this.$Progress.finish();
        // console.log(response);
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
      }
    },

    async getUni() {
      try {
        const response = await this.$axios.get("list/university");
        this.uni_list = response.data.data;
      } catch (e) {
        console.log(e.response);
      }
    },

    async handleSubmit() {
      // const id = this.menus.submenu;
      this.modal = "";
      this.uni.student_id = this.menus.submenu;
      this.uni.univ_id = this.uni_select.univ_id;

      // console.log(this.uni);

      try {
        const response = await this.$axios.post("create/shortlisted", this.uni);
        this.uni.univ_id = "";
        this.uni.major = "";

        // console.log(response.data);
        this.$alert.toast("success", response.data.message);
        setTimeout(() => {
          this.getData();
        }, 1000);
      } catch (e) {
        if (e.response.data.error) {
          this.$alert.toast("error", e.response.data.error.univ_id[0]);
        } else {
          this.$alert.toast("error", "Please try again");
        }
      }
    },

    async removeList(id) {
      this.modal = "confirm";
      this.uni_id = id;
      // alert(id);
    },

    async confirmDelete() {
      this.$alert.loading();
      this.modal = "";
      try {
        const response = await this.$axios.delete(
          "delete/shortlisted/" + this.uni_id
        );
        // console.log(response);
        if (response.data.success) {
          this.$alert.toast("success", response.data.message);
          setTimeout(() => {
            this.getData();
          }, 1000);
        } else {
          this.$alert.toast("error", response.data.error);
        }
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again");
      }
    },

    async newLog(e) {
      const id = e.draggedContext.element.id;
      const status = e.relatedContext.component.componentData.status;
      try {
        const response = await this.$axios.post(
          "switch/shortlisted/" + status,
          {
            uni_sh_id: id,
          }
        );
        this.$alert.toast("success", response.data.message);
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
    },
  },
  created() {
    this.getData();
    this.getUni();
  },
};
</script>
<style scoped>
.dragArea {
  min-height: 150px;
}

.card-uni {
  cursor: pointer;
  border: 1px solid #ededed;
}

.trash {
  position: absolute;
  top: -20px;
  right: -20px;
  border-radius: 40%;
  padding: 9px 11px 5px 9px;
  background: rgb(48, 78, 135);
  font-size: 0.7em;
  transition: all 0.3s;
}

.card-uni:hover .trash {
  top: -5px;
  right: -5px;
  background: red;
}
</style>
