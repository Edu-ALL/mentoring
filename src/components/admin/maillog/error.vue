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
              <td><i class="fa-regular fa-user fa-fw"></i> Eric</td>
              <td><i class="fa-regular fa-user fa-fw"></i> Hafidz</td>
              <td>Resume</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
              <td>
                <i class="fa-regular fa-calendar fa-fw"></i> 20 Feburary 2022
              </td>
              <td class="pointer text-danger" @click="checkDetail(i)">
                <i class="fa-solid fa-triangle-exclamation fa-fw"></i>
                Error
              </td>
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
      mails: [],
      detail: false,
    };
  },
  methods: {
    checkDetail(i) {
      console.log(i);
      this.detail = true;
    },

    getData() {
      this.$axios
        .get(this.$url + "list/mail/log", {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.mails = response.data.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getPage(link) {
      this.$axios
        .get(link, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.mails = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
</style>