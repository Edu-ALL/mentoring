<template>
  <div id="lor">
    <div class="req-card">
      <div class="req-header">
        <div class="d-flex justify-content-between p-2 py-1">
          <div class="text-start">Letter of Recommendation</div>
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
      <div class="req-body p-2 py-4">
        <!-- IF EMPTY  -->
        <div class="row" v-if="data?.length == 0">
          <div class="col text-center text-muted pb-4">
            No Letter of Recommendation yet.
          </div>
        </div>
        <div class="row row-cols-md-5 row-cols-1 g-2 align-items-stretch">
          <div class="col" v-for="i in data" :key="i">
            <div class="card shadow-sm docs h-100">
              <div class="card-body text-center d-flex align-items-center">
                <div class="w-100 justify-content-center docs-detail">
                  <div class="d-block mb-2">
                    <i class="fa-solid fa-file-pdf fa-2x text-danger"></i>
                  </div>
                  {{ i.med_title }}
                </div>
                <div class="docs-content">
                  <a
                    style="text-decoration: none"
                    :href="$base_url + i.med_file_path"
                    target="_blank"
                    class="btn-mentoring btn-type-1 p-1 px-3 mx-1 btn-sm"
                    download
                  >
                    <i class="fa-solid fa-download me-2 text-white"></i>
                    Download
                  </a>
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
  name: "LORcomponent",

  props: {
    data: Object,
  },
};
</script>

<style>
</style>