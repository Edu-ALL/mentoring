<template>
  <div id="progress">
    <div class="container p-1">
      <div class="row p-4" v-if="group?.data?.length == 0">
        <div class="col text-center">
          <p>No project group yet.</p>
        </div>
      </div>
      <div
        class="row row-cols-md-2 row-cols-1 g-3 pb-4 align-items-lg-stretch"
        v-if="group?.data?.length != 0"
      >
        <div class="col" v-for="i in group.data" :key="i">
          <div
            class="card card-group border shadow-sm h-100"
            @click="detail(i.id)"
          >
            <!-- <div class="card-status bg-success">
              <i class="fa-solid fa-thumbs-up mx-1"></i>
            </div> -->
            <div class="card-body">
              <h5 class="mb-1">{{ i.project_name }}</h5>
              <span class="badge bg-secondary rounded-pill text-dark">
                {{ i.project_type }}
              </span>
              <div class="project-desc mt-2">
                {{ $customText.text(i.project_desc, 20) }}
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
                  <div
                    class="badge"
                    :class="
                      i.progress_status == 'ahead'
                        ? 'bg-success'
                        : i.progress_status == 'on-track'
                        ? 'bg-info text-dark'
                        : 'bg-danger'
                    "
                    style="text-transform: capitalize"
                  >
                    {{ i.progress_status }}
                  </div>
                  <i
                    class="fa-solid fa-arrow-right"
                    v-if="i.progress_status == null"
                  ></i>
                </div>
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
  name: "progress",
  props: {
    group: Object,
  },
  data() {
    return {};
  },
  methods: {
    detail(i) {
      this.$router.push({ path: "/mentor/activity/group/in-progress/" + i });
    },
  },
  created() {},
};
</script>

<style scoped>
.card-group {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 15px;
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