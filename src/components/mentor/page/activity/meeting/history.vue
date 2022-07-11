<template>
  <div id="history">
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr class="text-center">
            <th width="3%">No</th>
            <th>Call With</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i" class="text-center align-middle">
            <td>{{ i }}</td>
            <td class="text-start" nowrap style="text-transform: capitalize">
              Username
            </td>
            <td nowrap style="text-transform: capitalize">Life Skill</td>
            <td nowrap>24 July 2022</td>
            <td nowrap>09:00 WIB</td>
            <td style="text-transform: capitalize">
              <small class="text-info">
                <i class="fa-solid fa-check"></i>
                Completed
              </small>
            </td>
            <td>
              <button
                class="btn-mentoring py-1 px-3 btn-sm bg-success text-white"
                @click="detail(i)"
              >
                View Result
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination  -->
    <!-- <nav class="mt-3">
                  <ul class="pagination justify-content-center">
                    <li class="page-item" v-if="data.current_page != 1">
                      <a class="page-link" @click="getPage(data.links[0].url)">
                        <i class="fa-solid fa-chevron-left"></i>
                      </a>
                    </li>
                    <div v-for="(i, index) in data.last_page" :key="index">
                      <li
                        class="page-item"
                        v-if="
                          data.current_page - 2 < i && data.current_page + 2 > i
                        "
                      >
                        <a
                          class="page-link"
                          :class="
                            data.current_page == i
                              ? 'bg-primary text-white'
                              : ''
                          "
                          href="#"
                          @click="getPage(data.path + '?page=' + i)"
                          >{{ i }}</a
                        >
                      </li>
                    </div>
                    <li
                      class="page-item"
                      v-if="data.current_page != data.last_page"
                    >
                      <a class="page-link" @click="getPage(data.next_page_url)">
                        <i class="fa-solid fa-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav> -->
  </div>

  <!-- Cancel Meeting  -->
  <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
  <div
    class="vue-side mentoring-scroll shadow"
    :class="modal == 'add' ? 'active' : ''"
  >
    <h6 class="mb-0">Last Meeting Minutes</h6>
    <hr class="my-2" />
    <div class="row row-cols-md-2 row-cols-1">
      <div class="col mb-1">
        <input-group>
          <span class="bg-white">Academic Performance</span>
          <textarea class="form-mentoring w-100" rows="5" required></textarea>
        </input-group>
      </div>
      <div class="col mb-1">
        <input-group>
          <span class="bg-white">Exploration</span>
          <textarea class="form-mentoring w-100" rows="5" required></textarea>
        </input-group>
      </div>
      <div class="col mb-1">
        <input-group>
          <span class="bg-white">Writing Skills</span>
          <textarea class="form-mentoring w-100" rows="5" required></textarea>
        </input-group>
      </div>
      <div class="col mb-1">
        <input-group>
          <span class="bg-white">Personal Brand</span>
          <textarea class="form-mentoring w-100" rows="5" required></textarea>
        </input-group>
      </div>
    </div>
    <div class="mb-1">
      <input-group>
        <span class="bg-white">Mentor Todos</span>
        <textarea class="form-mentoring w-100" rows="5" required></textarea>
      </input-group>
    </div>
    <div class="mb-1">
      <input-group>
        <span class="bg-white">Mentee Todos</span>
        <textarea class="form-mentoring w-100" rows="5" required></textarea>
      </input-group>
    </div>
    <hr />
    <div class="text-end">
      <button class="btn-mentoring btn-sm bg-primary py-1 px-3">
        <i class="fa-solid fa-save me-2"></i>
        Save Changes
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "history",
  data() {
    return {
      modal: "",
    };
  },
  methods: {
    detail(i) {
      console.log(i);
      this.modal = "add";
    },
  },
  created() {},
};
</script>

<style scoped>
.vue-side {
  position: fixed;
  top: 0;
  right: -50%;
  height: 100vh;
  padding: 20px;
  width: 40%;
  background: white;
  overflow: auto;
  z-index: 99999;
  transition: all 0.3s;
}

.vue-side.active {
  right: 0 !important;
}

@media only screen and (max-width: 600px) {
  .vue-side {
    position: fixed;
    top: 0;
    right: -90%;
    width: 90%;
  }
}
</style>