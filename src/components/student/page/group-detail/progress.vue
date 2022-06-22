<template>
  <div id="progress">
    <!-- LIST -->
    {{ check }}
    <div class="container mt-3">
      <div class="row p-4" v-if="groups.data && groups.data.length == 0">
        <div class="col text-center">
          <p>No project group yet.</p>
        </div>
      </div>
      <div class="row row-cols-md-2 row-cols-1 g-2">
        <div class="col" v-for="i in groups.data" :key="i">
          <div class="card card-group shadow" @click="detail(i.id)">
            <!-- <div class="card-status bg-success">
              <i class="fa-solid fa-thumbs-up mx-1"></i>
            </div> -->
            <div class="card-body">
              <h5 class="mb-1">{{ i.project_name }}</h5>
              <span class="badge bg-secondary rounded-pill text-dark">
                {{ i.project_type }}
              </span>
              <div class="project-desc mt-2">
                {{ $customText.text(i.project_desc, 100) }}..
              </div>
              <hr class="my-2" />
              <div class="row align-items-center">
                <div class="col-6">
                  <small>
                    <i class="fa-solid fa-users me-2"></i
                    >{{ i.group_participant_count }} Members
                  </small>
                </div>
                <div class="col-6 text-end">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="mt-3" v-if="groups.from != null">
        <ul class="pagination justify-content-center">
          <li class="page-item" v-if="groups.current_page != 1">
            <a class="page-link" @click="getPage(groups.links[0].url)">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </li>
          <div v-for="(i, index) in groups.last_page" :key="index">
            <li
              class="page-item"
              v-if="groups.current_page - 2 < i && groups.current_page + 2 > i"
            >
              <a
                class="page-link"
                :class="groups.current_page == i ? 'bg-primary text-white' : ''"
                href="#"
                @click="getPage(groups.path + '?page=' + i)"
                >{{ i }}</a
              >
            </li>
          </div>
          <li class="page-item" v-if="groups.current_page != groups.last_page">
            <a class="page-link" @click="getPage(groups.next_page_url)">
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
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
      this.$router.push({ path: "/user/groups/progress/" + i });
    },

    async getData() {
      try {
        const response = await this.$axios.get(
          "student/group/project/in-progress"
        );

        this.groups = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
    },

    async getPage(link) {
      try {
        const response = await this.$axios.get(link);

        this.groups = response.data.data;
        // console.log(response.data);
      } catch (e) {
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
    }
  },
};
</script>

<style scoped>
.card-group {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
}

.card-group:hover {
  background: #223872;
  color: #fff;
}

.card-status {
  position: absolute;
  right: -10px;
  top: -10px;
  padding: 10px 10px 4px 4px;
  border-radius: 50%;
  color: #fff;
}
</style>