<template>
  <div id="pending">
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
                <i class="fa-solid fa-clock"></i>
                Waiting
              </small>
            </td>
            <td>
              <button
                class="btn-mentoring btn-sm btn-type-1 mx-1 mt-1 py-1"
                @click="cancelMeeting(i.id)"
              >
                Cancel
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
  <transition name="pop">
    <div class="vue-modal vue-modal-sm bg-primary" v-if="modal == 'cancel'">
      <div class="text-center">
        <i class="fa-solid fa-circle-exclamation fa-2xl"></i>
        <h5 class="mt-2">Are you sure to cancel this meeting?</h5>
        <div class="mt-3">
          <button
            class="btn-mentoring btn-warning btn-sm py-1 mx-1"
            @click="modal = ''"
          >
            Cancel</button
          ><button
            class="btn-mentoring btn-outline-success btn-sm py-1 mx-1"
            @click="handleCancel"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "pending",
  data() {
    return {
      modal: "",
    };
  },
  methods: {
    cancelMeeting(id) {
      console.log(id);
      this.modal = "cancel";
    },

    async handleCancel() {},
  },
};
</script>

<style>
</style>