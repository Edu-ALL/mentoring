<template>
  <div id="webinarDetail">
    <div class="mb-2" @click="this.$router.push({ path: '/admin/webinar' })">
      <vue-feather
        type="arrow-left"
        class="float-start mt-0 me-2"
      ></vue-feather>
      Webinar List
    </div>
    <!-- ADD  -->
    <transition name="fade">
      <div class="card-white" v-if="menus.submenu == 'add'">
        <h5>Add a New Webinar</h5>
        <hr />
        <form action="">
          <div class="row">
            <div class="col-md-6">
              <input
                type="text"
                class="form-control form-mentoring mb-3"
                placeholder="Webinar Name"
              />

              <select class="form-control form-mentoring mb-3">
                <option value="">Webinar 1</option>
                <option value="">Webinar 2</option>
              </select>

              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                class="form-control form-mentoring mb-3"
              ></textarea>
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control form-mentoring mb-3"
                placeholder="Video Embed"
              />

              <div class="preview"></div>
            </div>
            <div class="col-md-12">
              <hr />
              <div class="float-end">
                <button class="btn-mentoring btn-type-1">Save</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </transition>

    <!-- Detail  -->
    <transition name="fade">
      <div class="card-white" v-if="menus.submenu == 'detail'">
        <div class="flex">
          <h5 class="d-inline">Webinar</h5>
          <div class="float-end">
            <button
              class="btn-mentoring btn-type-2 btn-sm"
              @click="this.$router.push({ path: '/admin/webinar/edit' })"
            >
              Edit Webinar
            </button>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-7">
            <div class="mb-3">
              <label>Webinar Name</label> <br />
              Webinar Name
            </div>
            <div class="mb-3">
              <label>Category</label> <br />
              Category Name
            </div>
            <div class="mb-3">
              <label>Descriptions</label> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              doloremque, nostrum veritatis totam consectetur consequuntur eaque
              laboriosam voluptate perspiciatis ratione minima dolorem, tenetur
              culpa tempore rem! Quibusdam architecto animi temporibus!
            </div>
            <div class="mb-3">
              <label>Video</label> <br />
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/PQTG3xcNW_o"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="col-md-5">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <label>Watched</label> <br />
                <h6 class="d-inline">234 x</h6>
                <div
                  class="float-end pointer text-primary"
                  @click="userList = true"
                  v-if="!userList"
                >
                  Show
                  <vue-feather
                    type="arrow-right"
                    size="18"
                    class="float-end mt-1 ms-2"
                  ></vue-feather>
                </div>
                <div
                  class="float-end pointer text-primary"
                  @click="userList = false"
                  v-if="userList"
                >
                  Hide
                  <vue-feather
                    type="arrow-right"
                    size="18"
                    class="float-end mt-1 ms-2"
                  ></vue-feather>
                </div>
                <transition name="fade">
                  <div class="border p-2 mt-2" v-if="userList">
                    <ul class="list-group">
                      <li class="list-group-item" v-for="i in 5" :key="i">
                        Full Name <br />
                        <small class="text-muted" style="font-size: 0.8em">
                          <vue-feather
                            type="play-circle"
                            size="17"
                            class="float-start mt-1 me-1"
                          ></vue-feather>
                          25 July 2022
                        </small>
                      </li>
                    </ul>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Edit  -->
    <transition name="fade">
      <div class="card-white" v-if="menus.submenu == 'edit'">
        <h5>Edit Webinar</h5>
        <hr />
        <form action="">
          <div class="row">
            <div class="col-md-6">
              <input
                type="text"
                class="form-control form-mentoring mb-3"
                placeholder="Webinar Name"
              />

              <select class="form-control form-mentoring mb-3">
                <option value="">Webinar 1</option>
                <option value="">Webinar 2</option>
              </select>

              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                class="form-control form-mentoring mb-3"
              ></textarea>
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control form-mentoring mb-3"
                placeholder="Video Embed"
              />

              <div class="preview"></div>
            </div>
            <div class="col-md-12">
              <hr />
              <div class="float-end">
                <button class="btn-mentoring btn-type-1">Save Changes</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "webinarDetail",
  props: {
    menus: Object,
  },
  data() {
    return {
      userList: false,
    };
  },
  created() {},
};
</script>

<style scoped>
.form-control {
  box-shadow: none !important;
}

.preview {
  background: #dedede;
  width: 100%;
  height: 310px;
}
</style>