<template>
  <div id="editor">
    <!-- Detail  -->
    <div class="card-white">
      <div class="row">
        <div class="col-md-3 text-center">
          <img
            v-lazy="'https://picsum.photos/200/300'"
            alt="Profile"
            class="st-pic"
          />
        </div>
        <div class="col-md-9">
          <h5>{{ editors.first_name + " " + editors.last_name }}</h5>
          <hr class="my-0 mb-2" />
          <div class="row">
            <div class="col-md-6">
              <div class="mb-2">
                <label>Email</label> <br />
                {{ editors.email }}
              </div>
              <div class="mb-2">
                <label>Education/Major</label> <br />
                Lorem ipsum
              </div>
              <div class="mb-2">
                <label>Phone Number</label> <br />
                {{ editors.phone_number }}
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-2">
                <label>Social Media</label> <br />
                <vue-feather
                  type="instagram"
                  class="float-start me-2 mt-1"
                  size="16"
                ></vue-feather>
                Lorem Ipsum <br />
                <vue-feather
                  type="linkedin"
                  class="float-start me-2 mt-1"
                  size="16"
                ></vue-feather>
                Lorem Ipsum <br />
              </div>
              <div class="mb-2">
                <label>Address</label> <br />
                {{ editors.address }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Activity  -->

    <div class="card-white">
      <div class="border p-3 rounded mt-3">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr class="text-center">
                <th>No</th>
                <th>Call with</th>
                <th>Category</th>
                <th>Date & Time</th>
                <th>Status</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="text-center"
                v-for="(i, index) in activities.one_on_one.data"
                :key="index"
              >
                <td>{{ activities.one_on_one.from + index }}</td>
                <td>
                  {{ i.students.first_name + " " + i.students.last_name }}
                </td>
                <td>{{ i.module }}</td>
                <td>
                  <small>
                    {{ getDay(i.created_at) }} <br />
                    {{ getTime(i.created_at) }}
                  </small>
                </td>
                <td style="text-transform: capitalize">
                  {{ i.std_act_status }}
                </td>
                <td>{{ i.location_link }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav class="mt-2" v-if="activities.one_on_one.from != null">
          <ul class="pagination justify-content-center">
            <li
              class="page-item"
              v-if="activities.one_on_one.current_page != 1"
            >
              <a
                class="page-link"
                @click="getPage(activities.one_on_one.links[0].url)"
              >
                <i class="fa-solid fa-chevron-left"></i>
              </a>
            </li>
            <div v-for="i in activities.one_on_one.last_page" :key="i">
              <li
                class="page-item"
                v-if="
                  activities.one_on_one.current_page - 2 < i &&
                  activities.one_on_one.current_page + 2 > i
                "
              >
                <a
                  class="page-link"
                  :class="
                    activities.one_on_one.current_page == i
                      ? 'bg-primary text-white'
                      : ''
                  "
                  href="#"
                  @click="getPage(activities.one_on_one.path + '?page=' + i)"
                  >{{ i }}</a
                >
              </li>
            </div>
            <li
              class="page-item"
              v-if="
                activities.one_on_one.current_page !=
                activities.one_on_one.last_page
              "
            >
              <a
                class="page-link"
                @click="getPage(activities.one_on_one.next_page_url)"
              >
                <i class="fa-solid fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "editorDetail",
  data() {
    return {
      editor_id: "",
      editors: [],
      activities: {
        one_on_one: [],
      },
    };
  },
  methods: {
    getData(id) {
      this.$axios
        .get(this.$url + "find/user/editor/" + id, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.editors = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getData1on1(id) {
      this.$axios
        .get(this.$url + "list/activities/1-on-1-call?id=" + id, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.activities.one_on_one = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getStudents(id) {
      this.$axios
        .get(this.$url + "select/students/use/user/" + id, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.activities.students = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getActivity(i) {
      this.activity = i;
      if (i == "1on1") {
        this.getData1on1(this.editor_id);
      } else if (i == "student") {
        this.getStudents(this.editor_id);
      }
    },
  },
  created() {
    this.editor_id = this.$route.params.key;
    this.getData(this.editor_id);
    this.getData1on1(this.editor_id);
  },
};
</script>

<style>
.card-white {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}

.st-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>