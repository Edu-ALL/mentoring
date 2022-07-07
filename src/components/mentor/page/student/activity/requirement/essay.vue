<template>
  <div id="essay">
    <div class="req-card">
      <div class="req-header">
        <div class="d-flex justify-content-between p-2 py-1">
          <div class="text-start">ESSAYS</div>
          <div class="text-end">
            <i class="fa-solid fa-circle-xmark me-1 text-danger"></i>
            <i class="fa-solid fa-circle-check me-1 text-success"></i>
          </div>
        </div>
      </div>
      <div class="req-body p-2 py-4">
        <!-- IF EMPTY  -->
        <!-- <div class="row">
          <div class="col text-center text-muted pb-4">
            No essays uploaded yet.
          </div>
        </div> -->
        <div class="row row-cols-md-5 row-cols-1 g-2 align-items-stretch">
          <div class="col" v-for="i in 5" :key="i">
            <div class="card shadow-sm docs h-100">
              <div class="card-body text-center d-flex align-items-center">
                <div class="w-100 justify-content-center docs-detail">
                  <div class="d-block mb-2">
                    <i class="fa-solid fa-file-pdf fa-2x text-danger"></i>
                  </div>
                  Media Name
                </div>
                <div class="docs-content">
                  <a
                    style="text-decoration: none"
                    href="#"
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
export default {};
</script>

<style>
</style>