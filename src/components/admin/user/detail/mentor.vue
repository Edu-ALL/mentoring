<template>
  <div id="mentor">
    <!-- Detail  -->
    <div class="card-white">
      <div class="row">
        <div class="col-md-3 text-center">
          <img
            v-lazy="'https://picsum.photos/200/300'"
            alt="Profile"
            class="st-pic"
          />
        </div>
        <div class="col-md-9">
          <h5>Mentors Name</h5>
          <hr class="my-0 mb-2" />
          <div class="row">
            <div class="col-md-6">
              <div class="mb-2">
                <label>Email</label> <br />
                Lorem@all-inedu.com
              </div>
              <div class="mb-2">
                <label>School Name</label> <br />
                Lorem ipsum
              </div>
              <div class="mb-2">
                <label>Grade</label> <br />
                Lorem ipsum
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-2">
                <label>Social Media</label> <br />
                <vue-feather
                  type="instagram"
                  class="float-start me-2 mt-1"
                  size="16"
                ></vue-feather>
                Lorem Ipsum <br />
                <vue-feather
                  type="linkedin"
                  class="float-start me-2 mt-1"
                  size="16"
                ></vue-feather>
                Lorem Ipsum <br />
              </div>
              <div class="mb-2">
                <label>Address</label> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus nisi reprehenderit placeat est repudiandae saepe,
                voluptatem.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Activity  -->

    <div class="card-white">
      <button
        class="btn-mentoring me-2"
        :class="activity == '1on1' ? 'btn-type-1' : 'btn-type-2'"
        @click="activity = '1on1'"
      >
        1on1 Calls
      </button>
      <button
        class="btn-mentoring me-2"
        :class="activity == 'student' ? 'btn-type-1' : 'btn-type-2'"
        @click="activity = 'student'"
      >
        Student List
      </button>

      <!-- 1on1 Calls  -->
      <transition name="fade">
        <div class="border p-3 rounded mt-3" v-if="activity == '1on1'">
          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr class="text-center">
                  <th>No</th>
                  <th>Call with</th>
                  <th>Category</th>
                  <th>Date & Time</th>
                  <th>Status</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center" v-for="i in 5" :key="i">
                  <td>{{ i }}</td>
                  <td>Devi Kasih</td>
                  <td>Life Skill - Mentor</td>
                  <td>
                    <small>
                      20 Feburary 2022 <br />
                      14.00 WIB
                    </small>
                  </td>
                  <td>Waiting</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <nav class="mt-2">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link" href="#">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </transition>

      <!-- Student -->
      <transition name="fade">
        <div class="border p-3 rounded mt-3" v-if="activity == 'student'">
          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr class="text-center">
                  <th>No</th>
                  <th>Students Name</th>
                  <th>Email</th>
                  <th>School Name</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center" v-for="i in 5" :key="i">
                  <td>{{ i }}</td>
                  <td>Lorem Ipsum</td>
                  <td>lorem@all-inedu.com</td>
                  <td>School Name</td>
                  <td>11</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <nav class="mt-2">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link" href="#">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "mentorDetail",
  data() {
    return {
      activity: "1on1",
    };
  },
};
</script>

<style>
.card-white {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}

.st-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>