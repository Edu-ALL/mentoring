<template>
  <div id="groups">
    <div class="border p-3 rounded mt-3">
      <div class="row row-cols-md-3 row-cols-1">
        <!-- New Request  -->
        <div class="col">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">New Request</h6>
          </div>

          <div class="card card-project shadow-sm">
            <div class="card-body">
              <h6 class="my-0">Group Project Name</h6>
              <div
                class="badge bg-secondary text-white"
                style="border-radius: 10px"
              >
                Group Project Type
              </div>
              <div class="group-desc mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
                quidem, doloribus explicabo ...
              </div>
              <hr class="my-1" />
              <div class="d-flex justify-content-between align-items-center">
                <div class="">
                  <i class="fa-solid fa-users me-2"></i> 3 Members
                </div>
                <div class="">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- In Progress  -->
        <div class="col">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">In Progress</h6>
          </div>

          <div class="card card-project shadow-sm">
            <div class="card-body">
              <h6 class="my-0">Group Project Name</h6>
              <div
                class="badge bg-secondary text-white"
                style="border-radius: 10px"
              >
                Group Project Type
              </div>
              <div class="group-desc mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
                quidem, doloribus explicabo ...
              </div>
              <hr class="my-1" />
              <div class="d-flex justify-content-between align-items-center">
                <div class="">
                  <i class="fa-solid fa-users me-2"></i> 3 Members
                </div>
                <div class="">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- History  -->
        <div class="col">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">History</h6>
          </div>

          <div class="card card-project shadow-sm">
            <div class="card-body">
              <h6 class="my-0">Group Project Name</h6>
              <div
                class="badge bg-secondary text-white"
                style="border-radius: 10px"
              >
                Group Project Type
              </div>
              <div class="group-desc mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
                quidem, doloribus explicabo ...
              </div>
              <hr class="my-1" />
              <div class="d-flex justify-content-between align-items-center">
                <div class="">
                  <i class="fa-solid fa-users me-2"></i> 3 Members
                </div>
                <div class="">
                  <i class="fa-solid fa-arrow-right"></i>
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
  name: "groupProject",
};
</script>
<style scoped>
.card-project {
  border: 0;
  cursor: pointer;
  transition: all 0.3s;
}
.card-project:hover {
  background: #ccdafc;
  border: 0;
}
</style>
