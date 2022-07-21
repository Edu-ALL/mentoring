<template>
  <!-- {{ list.uni_rejected }} -->
  <div id="uniShortlisted">
    <div class="border p-3 rounded mt-3">
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

          <draggable
            v-model="list.uni_shortlisted"
            group="uniList"
            class="dragArea list-group"
            tag="shortlisted"
            :component-data="{ status: 'shortlisted' }"
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
                  <i class="fa-solid fa-trash text-white"></i>
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

          <draggable
            v-model="list.uni_applied"
            group="uniList"
            class="dragArea list-group"
            tag="waitlisted"
            :component-data="{ status: 'applied' }"
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
                  <i class="fa-solid fa-trash text-white"></i>
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

          <draggable
            v-model="list.uni_accepted"
            group="uniList"
            class="dragArea list-group"
            tag="waitlisted"
            :component-data="{ status: 'accepted' }"
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
                  <i class="fa-solid fa-trash text-white"></i>
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

          <draggable
            v-model="list.uni_rejected"
            group="uniList"
            class="dragArea list-group"
            tag="waitlisted"
            :component-data="{ status: 'rejected' }"
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
                  <i class="fa-solid fa-trash text-white"></i>
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

          <draggable
            v-model="list.uni_waitlisted"
            group="uniList"
            class="dragArea list-group"
            tag="waitlisted"
            :component-data="{ status: 'waitlisted' }"
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
                  <i class="fa-solid fa-trash text-white"></i>
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
        <form action="">
          <div class="mt-2">
            <v-uni
              v-model="uni_select"
              :options="uni_list"
              placeholder="Select One"
              deselect-label="Can't remove this value"
              track-by="uni_name"
              :custom-label="customUnilabel"
              label="uni_name"
              :searchable="true"
              :allow-empty="false"
              required
              @select="uniListCheck"
            >
            </v-uni>
          </div>
          <div class="mb-3">
            <input-group>
              <input type="text" class="form-mentoring w-100" required />
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
      list: {
        uni_shortlisted: [],
        uni_waitlisted: [],
        uni_accepted: [],
        uni_applied: [],
        uni_rejected: [],
      },
    };
  },
  methods: {
    async getData() {
      const id = this.menus.submenu;
      try {
        const response = await this.$axios.get("select/shortlisted/" + id);
        this.list.uni_shortlisted = response.data.data.shortlisted;
        this.list.uni_waitlisted = response.data.data.waitlisted;
        this.list.uni_accepted = response.data.data.accepted;
        this.list.uni_applied = response.data.data.applied;
        this.list.uni_rejected = response.data.data.rejected;
        console.log(response);
      } catch (e) {
        console.log(e.response);
      }
    },

    newLog(e) {
      console.log(e.relatedContext.component.componentData.status);
      console.log(e.draggedContext.element.id);
    },
  },
  created() {
    this.getData();
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
