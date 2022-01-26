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
          Explore More Career Paths with Us!
        </h3>
        <div class="content-desc text-white">
          Still looking to find a career that matches your passion and goal in
          the future? Let’s explore various career paths and job roles in
          different industries with ALL-in!
          <br />
          Grasp the key and basic knowledge of each career and simulate yourself
          on how to apply it through case studies. Come start to take a step on
          your career exploration journey with the experts!
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
          Don’t underestimate the power of a CV! It’s important to give the
          right impression to the employers through a well-endowed CV.
          <br />
          Make your potential shine! Construct your CV with ALL-in through
          easy-to-follow steps.
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
          Start off your career in the right way! Improve your skill set, expand
          connections, and develop your career goal path through an internship.
          <br />
          Look for the best-fit internship positions offered by numerous
          renowned companies right now!
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
          If you want to make sure your essay is well-written and ready to be
          submitted, take this one last step: edit your essay with help from
          mentors and essay editors.
          <br />
          It’s safe and simple. Try it out!
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
          Behold for the new way of tutoring! Not only this program will result
          in a better academic score but there will be also major exploration at
          the same time. Our experienced, IB and A level high achievers and
          friendly mentors will bring you a real-life application learning
          style, making sure that you will completely understand the concepts by
          relating them to their life and having fun learning them.
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
          Get the guidance to make your study session time-efficient, strategize
          the learning by targeting weaknesses, have learning materials tailored
          to your needs, learn on concept understanding, and get the drills to
          improve your performance. Enroll in our semi-private or private SAT
          Prep Class.
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
v-card {
  margin-bottom: 40px !important;
}

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