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
              New Todos
            </div>
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
                <div
                  class="p-3 d-flex justify-content-between"
                  style="width: 90%"
                >
                  <div style="width: 10%">
                    <i class="fa-regular fa-check-circle me-2 text-muted"></i>
                  </div>
                  <div class="pointer" style="width: 90%" @click="todos_id = i">
                    <div class="text-start p-0 m-0">
                      <transition name="fade">
                        <div class="short-desc" v-if="todos_id != i">
                          {{ i.task_name }}
                        </div>
                      </transition>
                      <transition name="fade">
                        <div class="long-desc" v-if="todos_id == i">
                          {{ i.description }}
                        </div>
                      </transition>
                      <small class="d-block mt-3 text-muted">
                        <i class="fa-solid fa-calendar me-2"></i>
                        {{ i.due_date }}
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
                  <div style="width: 10%">
                    <i class="fa-regular fa-check-circle me-2 text-muted"></i>
                  </div>
                  <div class="pointer" style="width: 90%" @click="todos_id = i">
                    <div class="text-start p-0 m-0">
                      <transition name="fade">
                        <div class="short-desc" v-if="todos_id != i">
                          {{ i.task_name }}
                        </div>
                      </transition>
                      <transition name="fade">
                        <div class="long-desc" v-if="todos_id == i">
                          {{ i.description }}
                        </div>
                      </transition>
                      <small class="d-block mt-3 text-muted">
                        <i class="fa-solid fa-calendar me-2"></i
                        >{{ i.due_date }}
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
            class="card border-1 shadow-sm my-2 card-todos text-muted"
            style="background: #f2efef; opacity: 0.7"
            v-for="(i, index) in todos_confirmed.confirmed"
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
                    <i class="fa-regular fa-check-circle me-2 text-muted"></i>
                  </div>
                  <div class="pointer" style="width: 90%" @click="todos_id = i">
                    <div class="text-start p-0 m-0">
                      <transition name="fade">
                        <div class="short-desc" v-if="todos_id != i">
                          {{ i.task_name }}
                        </div>
                      </transition>
                      <transition name="fade">
                        <div class="long-desc" v-if="todos_id == i">
                          {{ i.description }}
                        </div>
                      </transition>
                      <small class="d-block mt-3 text-muted">
                        <i class="fa-solid fa-calendar me-2"></i>
                        {{ i.due_date }}
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
        <h6 class="my-0">New Todos</h6>
        <hr class="mb-1" />
        <form action="">
          <div class="mt-0">
            <input-group>
              <input type="text" class="form-mentoring w-100" required />
              <label>Subject</label>
            </input-group>
          </div>
          <div class="mt-2">
            <input-group>
              <input type="date" class="form-mentoring w-100" />
              <label>Deadline</label>
            </input-group>
          </div>
          <div class="mt-2">
            <input-group>
              <span class="bg-white">Project Description</span>
              <textarea cols="30" rows="5" class="w-100" required></textarea>
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
export default {
  name: "studentTodos",
  props: {
    menus: Object,
  },
  data() {
    return {
      modal: "",
      todos_id: "",
      todos_waiting: [],
      todos_conf_need: [],
      todos_confirmed: [],
    };
  },

  methods: {
    async getData() {
      const id = this.menus.submenu;
      try {
        const response = await this.$axios.get("select/todos/" + id);
        this.todos_waiting = response.data.data;
        this.todos_conf_need = response.data.data;
        this.todos_confirmed = response.data.data;
        console.log(response);
      } catch (e) {
        console.log(e.response);
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style scoped>
.short-desc,
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

.card-todos:hover .todos_action {
  right: 0;
  z-index: 1;
  height: 100%;
}
</style>