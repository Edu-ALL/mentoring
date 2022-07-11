<template>
  <div id="upcoming">
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
          <tr v-for="i in 5" :key="i" class="text-center align-middle">
            <td>{{ i }}</td>
            <td class="text-start" nowrap style="text-transform: capitalize">
              Username
            </td>
            <td nowrap style="text-transform: capitalize">Life Skill</td>
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
</template>

<script>
export default {
  name: "upcoming",
  data() {
    return {
      view_pw: [],
    };
  },
};
</script>

<style>
</style>