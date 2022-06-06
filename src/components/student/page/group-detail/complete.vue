<template>
  <div id="complete">
    <div class="container mt-3">
      <div class="row row-cols-md-2 row-cols-1 g-2">
        <div class="col">
          <div class="card card-group shadow" @click="detail(1)">
            <div class="card-status bg-success">
              <i class="fa-solid fa-thumbs-up mx-1"></i>
            </div>
            <div class="card-body">
              <h5 class="mb-1">Group Project A</h5>
              <span class="badge bg-secondary rounded-pill text-dark">
                Project Mentoring
              </span>
              <div class="project-desc mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores cum nesciunt earum excepturi ab officiis ..
              </div>
              <hr class="my-2" />
              <div class="row align-items-center">
                <div class="col-6">
                  <small>
                    <i class="fa-solid fa-users me-2"></i>5 Members
                  </small>
                </div>
                <div class="col-6 text-end">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card card-group shadow" @click="detail(2)">
            <div class="card-status bg-warning text-primary">
              <i class="fa-solid fa-circle-exclamation mx-1"></i>
            </div>
            <div class="card-body">
              <h5 class="mb-1">Group Project A</h5>
              <span class="badge bg-secondary rounded-pill text-dark">
                Project Mentoring
              </span>
              <div class="project-desc mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores cum nesciunt earum excepturi ab officiis ..
              </div>
              <hr class="my-2" />
              <div class="row align-items-center">
                <div class="col-6">
                  <small>
                    <i class="fa-solid fa-users me-2"></i>5 Members
                  </small>
                </div>
                <div class="col-6 text-end">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card card-group shadow" @click="detail(3)">
            <div class="card-status bg-danger">
              <i class="fa-solid fa-triangle-exclamation mx-1"></i>
            </div>
            <div class="card-body">
              <h5 class="mb-1">Group Project A</h5>
              <span class="badge bg-secondary rounded-pill text-dark">
                Project Mentoring
              </span>
              <div class="project-desc mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores cum nesciunt earum excepturi ab officiis ..
              </div>
              <hr class="my-2" />
              <div class="row align-items-center">
                <div class="col-6">
                  <small>
                    <i class="fa-solid fa-users me-2"></i>5 Members
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
      <nav class="mt-3">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </li>
          <div v-for="i in 3" :key="i">
            <li class="page-item">
              <a class="page-link" href="#">{{ i }}</a>
            </li>
          </div>
          <li class="page-item">
            <a class="page-link">
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
  name: "complete",
  data() {
    return {};
  },
  methods: {
    detail(i) {
      this.$router.push({ path: "/user/groups/complete/" + i });
    },
  },
};
</script>

<style scoped>
.card-group {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 15px;
  /* background: rgb(214, 214, 214); */
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