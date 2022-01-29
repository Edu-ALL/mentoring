<template>
  <div id="files">
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <div class="card shadow-md">
            <div class="card-body">
              <h3>Library</h3>
              <div class="row">
                <div class="col">
                  <div class="form">
                    <input
                      type="text"
                      class="form-control file-search"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div class="col text-end">
                  <button
                    class="btn btn-allin bg-primary float-end"
                    @click="add = !add"
                  >
                    Upload File
                    <vue-feather
                      type="upload"
                      size="20"
                      class="float-end ms-2"
                    ></vue-feather>
                  </button>
                  <vue-feather
                    :type="grid ? 'list' : 'grid'"
                    @click="grid = !grid"
                    class="float-end mt-1 me-2 pointer"
                  ></vue-feather>
                </div>
              </div>

              <div class="library-content" v-if="!add">
                <!-- Grid  -->
                <transition name="fade">
                  <div
                    class="row row-cols-md-5 row-cols-1 mt-1 g-2"
                    v-if="grid"
                  >
                    <div class="col" v-for="i in 20" :key="i">
                      <div class="card card-media" v-if="i % 2 == 0">
                        <div class="card-image">
                          <img
                            src="https://picsum.photos/id/6/200/200"
                            alt="Files"
                            class="img"
                          />
                        </div>
                        <div class="card-name">
                          <vue-feather
                            type="image"
                            size="15"
                            class="float-start mt-1 me-2"
                          ></vue-feather>
                          Image
                        </div>
                        <div class="card-overlay">Download</div>
                      </div>
                      <div class="card card-media" v-if="i % 2 == 1">
                        <div class="card-image">
                          <img
                            src="~@/assets/img/docs.png"
                            alt="Files"
                            class="docs"
                          />
                        </div>
                        <div class="card-name">
                          <vue-feather
                            type="file-text"
                            size="15"
                            class="float-start mt-1 me-2"
                          ></vue-feather>
                          Docs
                        </div>
                        <div class="card-overlay">Download</div>
                      </div>
                    </div>
                  </div>
                </transition>

                <!-- List  -->
                <transition name="fade">
                  <div
                    class="row row-cols-1 mt-3 mx-2 align-items-center"
                    v-if="!grid"
                  >
                    <div
                      class="col border-bottom py-2"
                      v-for="i in 20"
                      :key="i"
                    >
                      <div class="row align-items-center">
                        <div class="col">Documents Name</div>
                        <div class="col text-end">12 Dec 2021</div>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>

              <transition name="fade">
                <div class="library-add" v-if="add">
                  <div class="row justify-content-center">
                    <div class="col-md-5">
                      <div class="card">
                        <div class="card-body">
                          <div class="mb-3">
                            <label>File Name</label>
                            <input type="text" class="form-control" />
                          </div>
                          <div class="mb-3">
                            <label>Category Name</label>
                            <select class="form-control">
                              <option value="">Category</option>
                            </select>
                          </div>
                          <div class="mb-3">
                            <label>Upload File</label>
                            <input type="file" class="form-control" />
                          </div>
                          <div class="float-start">
                            <button class="btn btn-allin btn-outline-info">
                              Cancel
                            </button>
                          </div>
                          <div class="float-end">
                            <button class="btn btn-allin bg-primary">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "files",
  data() {
    return {
      add: false,
      grid: true,
    };
  },
  created() {},
};
</script>
<style scoped>
.card {
  border-radius: 10px;
}

.card-media {
  cursor: pointer;
}

.card-image {
  text-align: center;
  background: rgba(193, 213, 250, 0.719);
  border-radius: 10px 10px 0 0;
}

.card-image .img {
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-image .docs {
  height: 150px;
  padding: 10%;
}

.card-name {
  padding: 5px;
}

.card-overlay {
  background: #f0aa54d2;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  text-align: center;
  padding: 28%;
  top: 0;
  color: #000;
  font-weight: bold;
  opacity: 0;
  transition: all 0.4s ease-in-out;
}

.card-media:hover .card-overlay {
  opacity: 1;
}

.file-search {
  border-radius: 15px;
}

.library-content {
  height: 70vh;
  padding: 0px 10px;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-gutter: stable;
}

/* width */
.library-content::-webkit-scrollbar {
  width: 7px;
}

/* Track */
.library-content::-webkit-scrollbar-track {
  background: rgb(202, 141, 49);
  border-radius: 20px;
}

/* Handle */
.library-content::-webkit-scrollbar-thumb {
  background: rgb(26, 14, 99);
  border-radius: 20px;
}

/* Handle on hover */
.library-content::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 14, 99);
}

.library-add {
  margin: 5% 0;
}
</style>