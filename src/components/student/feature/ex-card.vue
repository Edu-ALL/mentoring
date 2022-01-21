<template>
  <div id="ex-card">
    <!-- Career Module  -->
    <v-card
      v-if="feature_name == 'career-module'"
      class="card content-card bg-primary shadow"
      lazy="loading"
    >
      <div class="card-body">
        <h3 class="content-title text-white">
          Explore More Career Path with Us!
        </h3>
        <div class="content-desc text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          rem reiciendis quas aspernatur magnam repudiandae quisquam repellat
          quasi laboriosam libero id ipsum tempore quod doloremque rerum vero
          autem, voluptatum voluptas.
        </div>
        <button class="btn btn-allin bg-secondary mt-3">Explore Now!</button>
      </div>
      <img
        src="@/assets/img/home/card-blue.webp"
        alt="ALL-in Mentoring"
        class="card-corner"
      />
    </v-card>

    <!-- CV Builder  -->
    <v-card
      v-if="feature_name == 'cv-builder'"
      class="card content-card bg-secondary shadow"
      lazy="loading"
    >
      <div class="card-body">
        <h3 class="content-title text-white">Build your CV with Us!</h3>
        <div class="content-desc text-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          rem reiciendis quas aspernatur magnam repudiandae quisquam repellat
          quasi laboriosam libero id ipsum tempore quod doloremque rerum vero
          autem, voluptatum voluptas.
        </div>
        <button class="btn btn-allin bg-primary mt-3">Explore Now!</button>
      </div>
      <img
        src="@/assets/img/home/card-orange.webp"
        alt="ALL-in Mentoring"
        class="card-corner"
      />
    </v-card>

    <!-- Internship  -->
    <v-card
      v-if="feature_name == 'internship'"
      class="card content-card bg-primary shadow"
      lazy="loading"
    >
      <div class="card-body">
        <h3 class="content-title text-white">Internship</h3>
        <div class="content-desc text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          rem reiciendis quas aspernatur magnam repudiandae quisquam repellat
          quasi laboriosam libero id ipsum tempore quod doloremque rerum vero
          autem, voluptatum voluptas.
        </div>
        <button class="btn btn-allin bg-secondary mt-3">Explore Now!</button>
      </div>
      <img
        src="@/assets/img/home/card-orange.webp"
        alt="ALL-in Mentoring"
        class="card-corner"
      />
    </v-card>

    <!-- Essay  -->
    <v-card
      v-if="feature_name == 'essay'"
      class="card content-card bg-primary shadow"
      lazy="loading"
    >
      <div class="card-body">
        <h3 class="content-title text-white">Editing Your Essay Better</h3>
        <div class="content-desc text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          rem reiciendis quas aspernatur magnam repudiandae quisquam repellat
          quasi laboriosam libero id ipsum tempore quod doloremque rerum vero
          autem, voluptatum voluptas.
        </div>
        <button class="btn btn-allin bg-secondary mt-3">Explore Now!</button>
      </div>
      <img
        src="@/assets/img/home/card-orange.webp"
        alt="ALL-in Mentoring"
        class="card-corner"
      />
    </v-card>

    <!-- Academic Tutoring  -->
    <v-card
      v-if="feature_name == 'acad'"
      class="card content-card bg-secondary shadow"
      lazy="loading"
    >
      <div class="card-body">
        <h3 class="content-title text-white">Academic Tutoring</h3>
        <div class="content-desc text-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          rem reiciendis quas aspernatur magnam repudiandae quisquam repellat
          quasi laboriosam libero id ipsum tempore quod doloremque rerum vero
          autem, voluptatum voluptas.
        </div>
        <button class="btn btn-allin bg-primary mt-3">Explore Now!</button>
      </div>
      <img
        src="@/assets/img/home/card-blue.webp"
        alt="ALL-in Mentoring"
        class="card-corner"
      />
    </v-card>

    <!-- SAT  -->
    <v-card
      v-if="feature_name == 'sat'"
      class="card content-card bg-primary shadow"
      lazy="loading"
    >
      <div class="card-body">
        <h3 class="content-title text-white">SAT</h3>
        <div class="content-desc text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          rem reiciendis quas aspernatur magnam repudiandae quisquam repellat
          quasi laboriosam libero id ipsum tempore quod doloremque rerum vero
          autem, voluptatum voluptas.
        </div>
        <button class="btn btn-allin bg-secondary mt-3">Explore Now!</button>
      </div>
      <img
        src="@/assets/img/home/card-orange.webp"
        alt="ALL-in Mentoring"
        class="card-corner"
      />
    </v-card>
  </div>
</template>
<script>
export default {
  name: "ex-card",
  props: {
    feature_name: String,
  },
};
</script>
<style scoped>
h3 {
  margin-bottom: 30px !important;
}

.bg-primary {
  background: rgb(34, 56, 114) !important;
  background: linear-gradient(
    35deg,
    rgba(34, 56, 114, 1) 0%,
    rgba(70, 99, 173, 1) 59%
  ) !important;
}

.bg-secondary {
  background: rgb(240, 171, 84) !important;
  background: linear-gradient(
    35deg,
    rgba(240, 171, 84, 1) 0%,
    rgba(254, 205, 142, 1) 59%
  ) !important;
}

.content-card {
  border-radius: 10px;
  padding: 10px 20px;
  box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
}

.content-title {
  font-weight: 600;
  width: 50%;
  margin-bottom: 20px;
  font-size: 2em;
}

.content-desc {
  font-size: 1.2em;
  width: 80%;
}

.card-corner {
  position: absolute;
  width: 30% !important;
  bottom: -1px;
  right: -1px;
}

@media only screen and (max-width: 800px) {
  .content-card {
    padding: 10px;
  }

  .content-title {
    width: 100%;
    font-size: 1.3em;
    line-height: 1.5;
    margin-bottom: 15px;
  }

  .content-desc {
    width: 100%;
    font-size: 1em;
    text-align: justify;
  }
}
</style>