<template>
  <div id="uniList">
    <!-- LIST  -->
    <div class="container mt-4">
      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <div class="row">
            <div class="col-12">
              <div class="pointer" style="top: 100px" @click="redirect">
                <h5 class="d-inline">University List</h5>
              </div>
            </div>
          </div>

          <!-- Tabs  -->
          <div class="row mt-3">
            <div class="col-12 menu-tab">
              <button
                class="btn-mentoring btn-sm mx-1"
                :class="
                  tab == '' || tab == 'shortlisted'
                    ? 'btn-type-1'
                    : 'btn-type-2'
                "
                @click="changeTab('shortlisted')"
              >
                Shortlisted
              </button>
              <button
                class="btn-mentoring btn-sm mx-1"
                :class="tab == 'applied' ? 'btn-type-1' : 'btn-type-2'"
                @click="changeTab('applied')"
              >
                Applied
              </button>
              <button
                class="btn-mentoring btn-sm mx-1"
                :class="tab == 'accepted' ? 'btn-type-1' : 'btn-type-2'"
                @click="changeTab('accepted')"
              >
                Accepted
              </button>
              <button
                class="btn-mentoring btn-sm mx-1"
                :class="tab == 'rejected' ? 'btn-type-1' : 'btn-type-2'"
                @click="changeTab('rejected')"
              >
                Rejected
              </button>
              <button
                class="btn-mentoring btn-sm mx-1"
                :class="
                  tab == '' || tab == 'waitlisted' ? 'btn-type-1' : 'btn-type-2'
                "
                @click="changeTab('waitlisted')"
              >
                Waitlisted
              </button>
            </div>
          </div>

          <!-- Content  -->
          <div class="row mt-3" v-if="uniList.length == 0">
            <div class="col-12 pt-3 text-center">No university list yet</div>
          </div>
          <div class="row mt-3 row-cols-md-4 row-cols-1 align-items-stretch">
            <div class="col mb-3" v-for="i in uniList" :key="i">
              <div class="card border-1 shadow-sm card-uni h-100">
                <div class="uni-icon">
                  <i class="fa-solid fa-clock" v-if="tab == 'waitlisted'"></i>
                  <i
                    class="fa-solid fa-paper-plane"
                    v-if="tab == 'applied'"
                  ></i>
                  <i
                    class="fa-solid fa-clipboard-check"
                    v-if="tab == 'accepted'"
                  ></i>
                  <i
                    class="fa-solid fa-file-circle-xmark"
                    v-if="tab == 'rejected'"
                  ></i>
                </div>
                <div class="card-body d-flex align-items-center">
                  <div class="uni-name">
                    <h5 class="my-0">{{ i.uni_name }}</h5>
                    <p class="my-1 mb-0">{{ i.uni_major }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- VIEW  -->
  </div>
</template>

<script>
export default {
  name: "uniList",
  components: {},
  data() {
    return {
      tab: "shortlisted",
      uniList: [],
    };
  },
  methods: {
    changeTab(tab) {
      this.tab = tab;
      this.uniList = [];
      this.getData(tab);
    },

    async getData(status = "shortlisted") {
      this.$alert.loading();
      try {
        const response = await this.$axios.get(
          "student/university/shortlisted/" + status
        );

        this.uniList = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
      this.$alert.close();
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.card-uni {
  position: relative;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  color: #626262;
  cursor: pointer;
  border: 1px solid #e9e9e9;
}

.card-uni .card-body {
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
}

.uni-icon {
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 20px;
  color: #dddddd72;
  z-index: 0;
}

.uni-name {
  display: block;
  width: 100%;
  position: relative;
  z-index: 1;
}

.card-uni.active,
.card-uni:hover {
  background: #223872;
  color: #fff !important;
}
</style>