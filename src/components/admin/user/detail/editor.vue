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
            v-if="!editors.profile_picture"
          />
        </div>
        <!-- {{ editors }} -->
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
                <ul class="ps-3">
                  <li v-for="i in editors.educations" :key="i">
                    {{ i.graduated_from }} - {{ i.major }} <br />
                    {{ i.degree }}
                  </li>
                </ul>
              </div>
              <div class="mb-2">
                <label>Phone Number</label> <br />
                {{ editors.phone_number }}
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-2">
                <label>Social Media</label> <br />
                <div class="mb-2" v-for="i in editors.social_media" :key="i">
                  <vue-feather
                    :type="i.social_media_name"
                    class="float-start me-2 mt-1"
                    size="16"
                  ></vue-feather>
                  {{ i.hyperlink }}
                </div>
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
    <!-- {{ activities.one_on_one }} -->

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
        <v-pagination :datas="activities.one_on_one.from" @result="getPage" />
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
        .get(this.$url + "find/user/editor/" + id)
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
        .get(this.$url + "list/activities/1-on-1-call?id=" + id)
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
        .get(this.$url + "select/students/use/user/" + id)
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