<template>
  <div id="student">
    <div class="" v-if="menus.submenu == ''">
      <div class="row mb-4">
        <div class="col-md-6 text-start">
          <input-group>
            <input
              type="text"
              class="form-mentoring form-control-sm"
              required
            />
            <label>Search</label>
          </input-group>
        </div>
        <div class="col-12">
          <div class="card-white m-0 px-2 py-1 mt-2">
            <div class="table-responsive">
              <table class="table table-hover align-middle">
                <thead>
                  <tr class="text-secondary">
                    <td nowrap>No</td>
                    <td nowrap>Full Name</td>
                    <td nowrap>Email</td>
                    <td nowrap>School Name</td>
                    <td nowrap>Grade</td>
                    <td nowrap class="text-center">Progress Status</td>
                    <td nowrap class="text-end">Tags</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(i, index) in 10" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td
                      class="pointer"
                      @click="
                        this.$router.push({ path: '/mentor/student/' + i })
                      "
                    >
                      Full Name
                    </td>
                    <td nowrap>Email</td>
                    <td nowrap>School Name</td>
                    <td>Grade</td>
                    <td nowrap class="text-center">
                      <button
                        class="btn-mentoring py-0 px-3 btn-sm btn-type-2 mx-1"
                      >
                        On-track
                      </button>
                      <button
                        class="btn-mentoring py-0 px-3 btn-sm btn-type-2 mx-1"
                      >
                        Behind
                      </button>
                      <button
                        class="btn-mentoring py-0 px-3 btn-sm btn-type-2 mx-1"
                      >
                        Ahead
                      </button>
                    </td>
                    <td class="text-end" width="20%">
                      <div class="d-flex align-items-center" v-if="add_tags">
                        <select class="form-mentoring w-100 form-control-sm">
                          <option value="val1">Value 1</option>
                          <option value="val2">Value 2</option>
                          <option value="val3">Value 3</option>
                        </select>
                        <i
                          class="fa-solid fa-close ms-2 text-danger pointer"
                          @click="add_tags = !add_tags"
                        ></i>
                      </div>
                      <div class="d-flex flex-wrap align-items-center">
                        <div v-for="i in 3" :key="i">
                          <div class="badge bg-primary me-1">
                            Tags {{ i }}

                            <div class="badge bg-white ms-2 pointer">
                              <i class="fa-solid fa-close text-danger"></i>
                            </div>
                          </div>
                        </div>
                        <div
                          class="pointer mt-1"
                          v-if="!add_tags"
                          @click="add_tags = !add_tags"
                        >
                          <i
                            class="fa-solid fa-plus-square text-success"
                            style="font-size: 1.1em"
                          ></i>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav class="mt-2">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link" href="#">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <v-detail v-if="menus.menu == 'student' && menus.submenu != ''" />
  </div>
</template>

<script>
import Detail from "@/components/mentor/page/student/view";
export default {
  name: "student",
  props: {
    menus: Object,
  },
  data() {
    return {
      add_tags: false,
    };
  },
  components: {
    "v-detail": Detail,
  },
};
</script>

<style>
.card-white {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>