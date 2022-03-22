<template>
  <div id="errorMail">
    <div class="row my-4">
      <div class="col-md-6 text-start">
        <input type="text" class="form-mentoring" placeholder="Search" />
      </div>
      <!-- <div class="col-md-6 text-md-end text-center">
        <button class="btn-mentoring btn-type-1 me-2">
          Sync Students Data
        </button>
        <button class="btn-mentoring btn-type-2">Add a New Student</button>
      </div> -->
    </div>
    <div class="card-white">
      <div class="table-responsive">
        <table class="table align-middle table-hover">
          <thead>
            <tr class="text-center">
              <th>No</th>
              <th>Receiver</th>
              <th>Sender</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center" v-for="i in 5" :key="i">
              <td>{{ i }}</td>
              <td>Eric</td>
              <td>Hafidz</td>
              <td>Resume</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
              <td>20 Feburary 2022</td>
              <td class="pointer" @click="checkDetail(i)">Error</td>
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

    <transition name="fade">
      <div class="" v-if="detail">
        <div class="vue-modal vue-modal-md">
          <h6>Error Description</h6>
          <hr class="my-0 mb-2" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            doloremque voluptatum cumque, ratione earum repellat repellendus
            ullam cum ipsam sint hic explicabo officia in, aspernatur quis
            maiores dolorum fugit accusantium!
          </p>
        </div>
        <div class="vue-modal-overlay" @click="detail = false"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "errorMail",
  data() {
    return {
      detail: false,
    };
  },
  methods: {
    checkDetail(i) {
      console.log(i);
      this.detail = true;
    },
  },
};
</script>

<style>
</style>