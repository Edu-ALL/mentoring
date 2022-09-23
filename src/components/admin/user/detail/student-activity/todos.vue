<template>
  <!-- {{ todos_waiting }} -->
  <div id="todos">
    <div class="border p-3 rounded mt-3">
      <div class="row row-cols-md-3 row-cols-1 g-3">
        <div class="col">
          <div
            class="card border-1 shadow-sm my-2 btn-outline-primary pointer"
            @click="modal = 'add'"
          >
            <div class="card-body py-1 text-center">
              <i class="fa-solid fa-plus me-2"></i>
              New Task
            </div>
          </div>

          <div
            class="text-center p-1 text-muted border"
            v-if="todos_waiting?.waiting?.length == 0"
          >
            No data!
          </div>

          <div
            class="card border-1 shadow-sm my-2 card-todos"
            v-for="(i, index) in todos_waiting.waiting"
            :key="index"
          >
            <div class="card-body p-0">
              <div
                class="
                  d-flex
                  justify-content-between
                  position-relative
                  overflow-hidden
                "
              >
                <!-- {{ i.id }} -->
                <div
                  class="p-3 d-flex justify-content-between"
                  style="width: 90%"
                >
                  <div style="width: 10%">
                    <i
                      class="fa-solid fa-check-circle me-2 checklist pointer"
                      @click="switchTodos(i.id, 3)"
                    ></i>
                  </div>
                  <!-- </div> -->
                  <div
                    class="pointer"
                    style="width: 90%"
                    @click="todos_id = i.id"
                  >
                    <div class="text-start p-0 m-0">
                      <transition name="fade">
                        <div class="short-desc">
                          {{ i.task_name }}
                        </div>
                      </transition>
                      <transition name="fade">
                        <div class="long-desc" v-if="todos_id == i.id">
                          {{ i.description }}
                        </div>
                      </transition>
                      <small class="d-block mt-3 text-muted">
                        <i class="fa-solid fa-calendar me-2"></i>
                        {{ $customDate.date(i.due_date) }}
                      </small>
                    </div>
                  </div>
                </div>
                <div class="todos_action m-0 p-0" style="width: 10%">
                  <div
                    class="
                      bg-danger
                      text-center
                      h-100
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                    style="border-radius: 0 5px 5px 0"
                    @click="removeTodos(i.id)"
                  >
                    <i class="fa-solid fa-trash text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">Confirmation Needs</h6>
          </div>

          <div
            class="text-center p-1 text-muted border"
            v-if="todos_conf_need?.confirmation_need?.length == 0"
          >
            No data!
          </div>
          <div
            class="card border-1 shadow-sm my-2 card-todos"
            v-for="(i, index) in todos_conf_need.confirmation_need"
            :key="index"
          >
            <div class="card-body p-0">
              <div
                class="
                  d-flex
                  justify-content-between
                  position-relative
                  overflow-hidden
                "
              >
                <div
                  class="p-3 d-flex justify-content-between"
                  style="width: 90%"
                >
                  <div
                    class="pointer"
                    style="width: 90%"
                    @click="todos_id = i.id"
                  >
                    <div class="text-start p-0 m-0">
                      <transition name="fade">
                        <div class="short-desc">
                          {{ i.task_name }}
                        </div>
                      </transition>
                      <transition name="fade">
                        <div class="long-desc" v-if="todos_id == i.id">
                          {{ i.description }}
                        </div>
                      </transition>
                      <small class="d-block mt-3 text-muted">
                        <i class="fa-solid fa-calendar me-2"></i
                        >{{ $customDate.date(i.due_date) }}
                      </small>
                    </div>
                    <div class="d-flex mt-2">
                      <div class="checklist" @click="switchTodos(i.id, 3)">
                        <i class="fa-solid fa-check-circle me-2"> </i
                        ><label>Confirm</label>
                      </div>
                      <div class="reject" @click="switchTodos(i.id, 2)">
                        <i class="fa-solid fa-times-circle mx-2"></i
                        ><span>Reject</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="todos_action m-0 p-0" style="width: 10%">
                  <div
                    class="
                      bg-danger
                      text-center
                      h-100
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                    style="border-radius: 0 5px 5px 0"
                    @click="removeTodos(i.id)"
                  >
                    <i class="fa-solid fa-trash text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">Completed</h6>
          </div>

          <div
            class="text-center p-1 text-muted border"
            v-if="todos_confirmed?.completed?.length == 0"
          >
            No data!
          </div>
          <div
            class="card border-1 shadow-sm my-2 card-todos text-muted"
            style="background: #f2efef; opacity: 0.7"
            v-for="(i, index) in todos_confirmed.completed"
            :key="index"
          >
            <div class="card-body p-0">
              <div
                class="
                  d-flex
                  justify-content-between
                  position-relative
                  overflow-hidden
                "
              >
                <div
                  class="p-3 d-flex justify-content-between"
                  style="width: 90%"
                >
                  <div style="width: 10%">
                    <i
                      class="fa-solid fa-check-circle me-2 text-success"
                      @click="switchTodos(i.id, 2)"
                    ></i>
                  </div>
                  <div
                    class="pointer"
                    style="width: 90%"
                    @click="todos_id = i.id"
                  >
                    <div class="text-start p-0 m-0">
                      <transition name="fade">
                        <div class="short-desc">
                          {{ i.task_name }}
                        </div>
                      </transition>
                      <transition name="fade">
                        <div class="long-desc" v-if="todos_id == i.id">
                          {{ i.description }}
                        </div>
                      </transition>
                      <small class="d-block mt-3 text-muted">
                        <i class="fa-solid fa-calendar me-2"></i>
                        {{ $customDate.date(i.due_date) }}
                      </small>
                    </div>
                  </div>
                </div>
                <div class="todos_action m-0 p-0" style="width: 10%">
                  <div
                    class="
                      bg-danger
                      text-center
                      h-100
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                    style="border-radius: 0 5px 5px 0"
                    @click="removeTodos(i.id)"
                  >
                    <i class="fa-solid fa-trash text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
    <transition name="pop">
      <div class="vue-modal vue-modal-md" v-if="modal == 'add'">
        <!-- {{ todos }} -->
        <h6 class="my-0">New Todos</h6>
        <hr class="mb-1" />
        <form method="post" @submit.prevent="handleSubmit">
          <div class="my-3">
            <input-group>
              <input
                type="text"
                class="form-control form-mentoring w-100"
                id="subject"
                v-model="todos.task_name"
                placeholder="Subject Name"
                required
              />
              <label for="subject">Subject Name</label>
            </input-group>
          </div>
          <div class="my-3">
            <input-group>
              <input
                type="date"
                class="form-control form-mentoring w-100"
                v-model="todos.due_date"
                placeholder="Date"
                id="deadline"
                required
              />
              <label for="deadline">Deadline</label>
            </input-group>
          </div>
          <div class="my-3">
            <input-group>
              <textarea
                cols="30"
                rows="5"
                class="form-control form-mentoring w-100"
                v-model="todos.description"
                placeholder="project"
                id="desc"
                required
              ></textarea>
              <label class="bg-white" for="desc">Project Description</label>
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
      <h5 class="mt-3 mb-3">Are you sure you want to delete this?</h5>
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
export default {
  name: "studentTodos",
  props: {
    menus: Object,
  },
  data() {
    return {
      modal: "",
      todos_id: "",
      todos: {
        student_id: "",
        task_name: "",
        description: "",
        due_date: "",
      },
      input: { todos: "text" },
      todos_waiting: [],
      todos_conf_need: [],
      todos_confirmed: [],
    };
  },

  methods: {
    async getData() {
      this.$Progress.start();
      const id = this.$route.params.key;
      try {
        const response = await this.$axios.get("select/todos/" + id);
        this.todos_waiting = response.data.data;
        this.todos_conf_need = response.data.data;
        this.todos_confirmed = response.data.data;
        // console.log(response);
        this.$Progress.finish();
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
      }
    },

    async handleSubmit() {
      // const id = this.menus.submenu;
      this.modal = "";
      this.todos.student_id = this.menus.submenu;

      // console.log(this.todos);

      this.$alert.loading();

      try {
        const response = await this.$axios.post("create/todos", this.todos);

        this.todos.task_name = "";
        this.todos.description = "";
        this.todos.due_date = "";

        // console.log(response.data);
        this.getData();
        this.$alert.toast("success", response.data.message);
      } catch (e) {
        console.log(e.response.data);
        this.$alert.toast("error", "Please try again");
      }
    },

    async switchTodos(j, s) {
      // alert(id);
      try {
        const response = await this.$axios.post("switch/todos", {
          todos_id: j,
          new_status: s,
        });
        console.log(response);
        if (response.data.success) {
          this.getData();
          this.$alert.toast("success", response.data.message);
        } else {
          this.$alert.toast("error", response.data.error);
        }
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again");
      }
    },

    async removeTodos(id) {
      this.modal = "confirm";
      this.todos_id = id;
      // alert(id);
    },

    async confirmDelete() {
      this.$alert.loading();
      this.modal = "";
      try {
        const response = await this.$axios.delete(
          "delete/todos/" + this.todos_id
          // { remove_tag: j }
        );
        // console.log(response);
        if (response.data.success) {
          this.getData();
          this.$alert.toast("success", response.data.message);
        } else {
          this.$alert.toast("error", response.data.error);
        }
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again");
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style scoped>
.short-desc {
  font-size: 1em !important;
  font-weight: 600;
}

.long-desc {
  font-size: 0.9em !important;
}

.card-todos small {
  font-size: 0.7em;
}

.todos_action {
  position: absolute;
  z-index: 1;
  right: -40px;
  height: 100%;
  transition: all 0.3s;
  cursor: pointer;
}

.checklist,
.reject {
  color: #223872;
}

.checklist:hover,
.checklist:hover i {
  color: green;
}

.reject:hover,
.reject:hover i {
  color: red;
}

.card-todos:hover .todos_action {
  right: 0;
  z-index: 1;
  height: 100%;
}
</style>