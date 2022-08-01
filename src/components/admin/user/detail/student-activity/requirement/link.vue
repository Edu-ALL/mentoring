<template>
  <div id="link">
    <div class="req-card">
      <div class="req-header">
        <div class="d-flex justify-content-between p-2 py-1">
          <div class="text-start">Publication Links</div>
          <div class="text-end">
            <i
              class="fa-solid fa-circle-xmark me-1 text-danger"
              v-if="data?.length == 0"
            ></i>
            <i
              class="fa-solid fa-circle-check me-1 text-success"
              v-if="data?.length != 0"
            ></i>
          </div>
        </div>
      </div>
      <div class="req-body px-md-4 px-2 py-4">
        <!-- IF EMPTY  -->
        <div class="row" v-if="data?.length == 0">
          <div class="col text-center text-muted pb-4">
            No publication link yet.
          </div>
        </div>
        <!-- {{ data }} -->
        <div class="row row-cols-1">
          <div class="col">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item p-0"
                v-for="(i, index) in data"
                :key="index"
              >
                <div class="row align-items-center">
                  <div class="col-12 link-content">
                    <div
                      class="link-title text-muted d-flex align-items-center"
                    >
                      <strong class="me-3">{{ index + 1 }}</strong>
                      <strong class="w-100">{{ i.subject }}</strong>
                    </div>
                    <!-- {{ i }} -->
                    <div class="action">
                      <div class="goto" @click="goto(i.value)">
                        <i class="fa-solid fa-paper-plane"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "link",
  props: {
    data: Object,
  },
  data() {
    return {};
  },
  methods: {
    goto(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style scoped>
.link-content {
  position: relative;
  width: 100%;
  padding: 10px;
  padding-left: 30px;
  overflow: hidden;
}

.action {
  position: absolute;
  right: -15%;
  top: 0;
  width: 5%;
  height: 100%;
  display: flex;
  color: #fff;
  transition: all 0.4s;
  cursor: pointer;
}

.goto {
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #223872;
}

.link-content:hover .action {
  right: 0;
}
</style>