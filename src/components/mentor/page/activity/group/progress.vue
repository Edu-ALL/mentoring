<template>
  <div id="progress">
    <div class="container mt-3">
      <!-- <div class="row p-4">
        <div class="col text-center">
          <p>No project group yet.</p>
        </div>
      </div> -->

      <div class="row row-cols-md-2 row-cols-1 g-2 pb-4">
        <div class="col" v-for="i in 3" :key="i">
          <div class="card card-group border shadow-sm" @click="detail(i.id)">
            <!-- <div class="card-status bg-success">
              <i class="fa-solid fa-thumbs-up mx-1"></i>
            </div> -->
            <div class="card-body">
              <h5 class="mb-1">Project Name</h5>
              <span class="badge bg-secondary rounded-pill text-dark">
                Project Type
              </span>
              <div class="project-desc mt-2">
                {{ $customText.text("lorem ipsum", 20) }}
              </div>
              <hr class="my-2" />
              <div class="row align-items-center">
                <div class="col-6">
                  <small>
                    <i class="fa-solid fa-users me-2"></i>2 Members
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
      <!-- <nav class="mt-3" v-if="groups.from != null">
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
    </nav> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>