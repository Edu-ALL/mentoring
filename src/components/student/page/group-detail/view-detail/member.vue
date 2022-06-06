<template>
  <div id="groupMember">
    <div class="row">
      <div class="col-6">
        <h6>Group Members</h6>
      </div>
      <div class="col-6" v-if="menu.submenu == 'progress'">
        <div class="text-end">
          <i class="fa-solid fa-add pointer" @click="modal = 'new-meeting'"></i>
        </div>
      </div>
      <div class="col-12">
        <ul class="list-group list-group-flush members">
          <li class="list-group-item" v-for="i in 3" :key="i">
            <div class="row align-items-center pointer">
              <div class="col-6">
                <div class="member-name" @click="contribution = i">
                  Saeka Minami
                  <i
                    class="fa-solid fa-crown text-warning ms-2"
                    v-if="i == 1"
                  ></i>
                </div>
              </div>
              <div class="col-5 text-end">
                <div class="text-muted">Saeka role</div>
              </div>
              <div class="col-1">
                <v-tooltip
                  arrow="true"
                  placement="left"
                  content="Active"
                  v-if="i == 1"
                >
                  <i class="fa-solid fa-check-circle text-success text-end"></i>
                </v-tooltip>
                <v-tooltip
                  arrow="true"
                  placement="left"
                  content="Pending"
                  v-if="i != 1"
                >
                  <i class="fa-solid fa-clock text-warning text-end"></i>
                </v-tooltip>
              </div>
            </div>
            <transition>
              <div class="row mt-1" v-if="contribution == i">
                <div class="col-12" style="text-align: justify">
                  <div class="border rounded-2 p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi mollitia expedita libero laborum quia itaque beatae?
                    Eaque voluptas labore ipsum nobis recusandae, libero earum
                    et itaque sunt nostrum perferendis eius.
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
        class="vue-modal vue-modal-sm bg-secondary"
        v-if="modal == 'new-meeting'"
      >
        <h5>Invite New Member</h5>
        <hr class="my-0 mb-3" />
        <div class="mb-3">
          <label>Email</label>
          <input type="text" class="form-mentoring w-100" />
        </div>
        <hr />
        <div class="row">
          <div class="col-6">
            <button
              class="btn-mentoring btn-sm py-1 btn-outline-danger"
              @click="modal = ''"
            >
              Cancel
            </button>
          </div>
          <div class="col-6 text-end">
            <button class="btn-mentoring btn-sm py-1 btn-success">
              Invite
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "groupMember",
  props: { menu: Object },
  data() {
    return {
      contribution: "",
      modal: "",
    };
  },
};
</script>

<style scoped>
.members {
  font-size: 0.9em;
}
</style>