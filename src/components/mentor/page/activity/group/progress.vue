<template>
  <div id="progress">
    <div class="container p-1">
      <div class="row p-4" v-if="group?.data?.length == 0">
        <div class="col text-center">
          <p>No project group yet.</p>
        </div>
      </div>
      <div
        class="row row-cols-1 g-3 pb-4 align-items-lg-stretch"
        v-if="group?.data?.length != 0"
      >
        <div class="col" v-for="(i, index) in group.data" :key="i">
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
                              group.from +
                              index * 2 +
                              '/300/300'
                        "
                        class="w-100"
                      />
                    </div>
                    <div class="title ms-3">
                      <h5>{{ i.project_name }}</h5>
                      <p
                        class="my-0"
                        v-html="$customText.text(i.project_desc, 20)"
                      ></p>
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
                <div class="col-md-3 text-md-end mt-md-0 mt-3">
                  <button
                    class="btn-mentoring btn-secondary py-1 btn-sm"
                    @click="detail(i.id)"
                  >
                    Detail
                    <i class="fa-solid fa-arrow-right ms-2"></i>
                  </button>
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