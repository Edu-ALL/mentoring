<template>
  <div id="activity">
    <div class="container">
      <h5>My Activities</h5>
      <div class="row g-2">
        <div :class="sidebar ? 'col-md-3' : 'col-md-1'">
          <div class="sidebar">
            <div class="list-group">
              <div
                class="list-group-item list-group-item-action"
                :class="!sidebar ? 'text-center' : ''"
              >
                <i class="fa-solid fa-phone fa-fw me-2"></i>
                M<span v-if="sidebar">eetings </span>
              </div>
              <div
                class="list-group-item list-group-item-action"
                :class="!sidebar ? 'text-center' : ''"
              >
                <i class="fa-solid fa-users fa-fw me-2"></i>
                G<span v-if="sidebar">roup Project</span>
              </div>
            </div>
            <div class="text-center mt-2 d-md-block d-none">
              <i
                class="fa-solid fa-arrow-left"
                v-if="sidebar"
                @click="sidebar = !sidebar"
              ></i>
              <i
                class="fa-solid fa-arrow-right"
                v-if="!sidebar"
                @click="sidebar = !sidebar"
              ></i>
            </div>
          </div>
        </div>

        <div :class="sidebar ? 'col-md-9' : 'col-md-11'">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <h6>Meeting</h6>
                <button
                  class="btn-mentoring py-1 px-3 btn-sm btn-outline-primary"
                >
                  Set a Meeting
                </button>
              </div>
              <hr class="my-2" />
              <div class="row mt-3">
                <div
                  class="col-12 d-flex w-100 mentoring-scroll overflow-auto"
                  style="white-space: nowrap"
                >
                  <button class="btn-mentoring btn-sm mx-1 py-1 px-3">
                    Pending
                  </button>
                  <button class="btn-mentoring btn-sm mx-1 py-1 px-3">
                    Upcoming
                  </button>
                  <button class="btn-mentoring btn-sm mx-1 py-1 px-3">
                    History
                  </button>
                </div>
              </div>
              <div class="border p-3">
                <!-- Data  -->

                <!-- Pending  -->
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
                      <tr
                        v-for="i in 5"
                        :key="i"
                        class="text-center align-middle"
                      >
                        <td>{{ i }}</td>
                        <td
                          class="text-start"
                          nowrap
                          style="text-transform: capitalize"
                        >
                          Username
                        </td>
                        <td nowrap style="text-transform: capitalize">
                          Life Skill
                        </td>
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
                            class="
                              btn-mentoring btn-sm btn-type-1
                              mx-1
                              mt-1
                              py-1
                            "
                            @click="cancelMeeting(i.id)"
                          >
                            Cancel
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Upcoming  -->
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr class="text-center">
                        <th width="3%">No</th>
                        <th>Call With</th>
                        <th>Subject</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Password</th>
                        <th width="17%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="i in 5"
                        :key="i"
                        class="text-center align-middle"
                      >
                        <td>{{ i }}</td>
                        <td
                          class="text-start"
                          nowrap
                          style="text-transform: capitalize"
                        >
                          Username
                        </td>
                        <td nowrap style="text-transform: capitalize">
                          Life Skill
                        </td>
                        <td nowrap>24 July 2022</td>
                        <td nowrap>09:00 WIB</td>
                        <td nowrap>
                          <div class="" v-if="view_pw[index]">
                            Test
                            <!-- <i
                              class="fa-solid fa-eye ms-2 pointer"
                              @click="view_pw[index] = !view_pw[index]"
                            ></i> -->
                          </div>

                          <div class="" v-if="!view_pw[index]">
                            ***
                            <!-- <i
                              class="fa-solid fa-eye-slash ms-2 pointer"
                              @click="view_pw[index] = !view_pw[index]"
                            ></i> -->
                          </div>
                        </td>
                        <td nowrap>
                          <button
                            class="btn-mentoring btn-sm btn-type-1 mx-1 py-1"
                            @click="goto(i.location_link)"
                          >
                            Join
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- History  -->
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr class="text-center">
                        <th width="3%">No</th>
                        <th>Call With</th>
                        <th>Subject</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="i in 5"
                        :key="i"
                        class="text-center align-middle"
                      >
                        <td>{{ i }}</td>
                        <td
                          class="text-start"
                          nowrap
                          style="text-transform: capitalize"
                        >
                          Username
                        </td>
                        <td nowrap style="text-transform: capitalize">
                          Life Skill
                        </td>
                        <td nowrap>24 July 2022</td>
                        <td nowrap>09:00 WIB</td>
                        <td style="text-transform: capitalize">
                          <small class="text-info">
                            <i class="fa-solid fa-clock"></i>
                            Cancel
                          </small>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "activity",
  props: {
    menus: Object,
  },
  components: {},
  data() {
    return {
      sidebar: true,
      view_pw: [],
    };
  },
};
</script>

<style scoped>
.card-white {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}

.col-md-1,
.col-md-3,
.col-md-9,
.col-md-11 {
  transition: all 0.3s;
}

.btn-outline-primary {
  box-shadow: none;
  outline: none;
}
</style>