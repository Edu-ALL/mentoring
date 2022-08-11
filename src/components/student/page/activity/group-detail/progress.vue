<template>
  <div id="progress">
    <!-- LIST -->
    <!-- {{ check }} -->
    <div class="container mt-3">
      <div class="row p-4" v-if="groups.data && groups.data.length == 0">
        <div class="col text-center">
          <p>No project group yet.</p>
        </div>
      </div>

      <div class="row row-cols-1 g-2">
        <div class="col" v-for="(i, index) in groups.data" :key="i">
          <div class="card group-card">
            <div class="card-body">
              <div class="row p-0 align-items-center">
                <div class="col-md-9">
                  <div class="d-flex align-items-center">
                    <div class="group-image">
                      <img
                        v-lazy="
                          i.picture
                            ? $base_url + '' + i.picture
                            : 'https://picsum.photos/id/' +
                              groups.from +
                              index * 2 +
                              '/300/300'
                        "
                        class="w-100"
                      />
                    </div>
                    <div class="title ms-3" style="width: 80%">
                      <h5>{{ i.project_name }}</h5>
                      <p class="my-0">
                        {{ $customText.text(i.project_desc, 20) }}
                      </p>
                    </div>
                  </div>
                  <div class="mt-2">
                    <div class="badge badge-group bg-info px-3 py-1">
                      {{ i.project_type }}
                    </div>
                    <div class="badge badge-group bg-info px-3 py-1 ms-1">
                      {{ i.group_participant_count }} Members
                    </div>
                    <div
                      class="badge badge-group bg-info px-3 py-1 ms-1"
                      v-if="
                        i.progress_status != '' || i.progress_status != null
                      "
                      style="text-transform: capitalize"
                    >
                      {{ i.progress_status }}
                    </div>
                  </div>
                </div>
                <div class="col-md-3 text-md-center">
                  <button
                    class="btn-mentoring btn-secondary py-1 btn-sm"
                    @click="detail(i.id)"
                  >
                    View Detail
                    <i class="fa-solid fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-pagination :datas="groups" @result="getPage" />
    </div>
  </div>
</template>

<script>
export default {
  name: "progress",
  props: {
    check: String,
  },
  components: {},
  data() {
    return {
      groups: [],
    };
  },
  methods: {
    detail(i) {
      this.$router.push({ path: "/user/my-activity/group/progress/" + i });
    },

    async getData() {
      this.$alert.loading();
      try {
        const response = await this.$axios.get(
          "student/group/project/in-progress"
        );

        this.groups = response.data.data;
        // console.log(response.data);
        this.$alert.close();
      } catch (e) {
        this.$alert.close();
        console.log(e.response);
      }
    },

    async getPage(link) {
      this.$alert.loading();
      try {
        const response = await this.$axios.get(link);

        this.groups = response.data.data;
        // console.log(response.data);
        this.$alert.close();
      } catch (e) {
        this.$alert.close();
        console.log(e.response);
      }
    },
  },
  created() {
    this.getData();
  },
  updated() {
    if (this.check == "new-group") {
      this.getData();
      this.$emit("modal", "");
    }
  },
};
</script>
