<template>
  <div id="ex-card">
    <!-- Career Module  -->
    <div
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
    </div>

    <!-- CV Builder  -->
    <div
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
    </div>

    <!-- CV Builder  -->
    <div
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
    </div>

    <!-- Academic Tutoring  -->
    <div
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
    </div>

    <!-- SAT  -->
    <div
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
    </div>
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
.content-card {
  border-radius: 10px;
  padding: 10px 20px;
  box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
}

.content-title {
  font-weight: 600;
  width: 30%;
  margin-bottom: 20px;
}

.content-desc {
  width: 60%;
}

div[lazy="loading"] {
  background: red;
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