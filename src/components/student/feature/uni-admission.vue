<template>
  <div id="uni-admission">
    <h2 class="content-title">Upcoming Events</h2>
    <Splide :options="options">
      <SplideSlide v-for="(i, index) in events" :key="index">
        <div class="card h-100">
          <!-- <div class="card-type bg-primary text-white" v-if="i % 2 == 0">
            Introduction
          </div>
          <div class="card-type bg-secondary text-dark" v-if="i % 2 != 0">
            Academic
          </div> -->
          <div class="card-img mb-2">
            <img
              v-lazy="'https://picsum.photos/id/' + index * 30 + '/600/400'"
              :alt="i.topic"
            />
          </div>
          <div class="card-title">
            <div class="row align-items-center h-100">
              <div class="col">
                {{ i.topic }}
              </div>
            </div>
          </div>
          <div class="card-label">
            <div class="row align-items-center">
              <div class="col-md-7 text-start mb-2">
                <vue-feather
                  type="calendar"
                  class="me-1"
                  size="13"
                ></vue-feather>
                {{ i.date }}<br />
                <vue-feather type="clock" class="me-1" size="13"></vue-feather>
                {{ i.time }}
              </div>
              <div class="col-md-5 text-md-end text-start mb-1">
                <button class="btn btn-allin btn-success btn-sm">Book</button>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>
<script>
export default {
  name: "uni-admission",
  data() {
    return {
      options: {
        autoPlay: true,
        // type: "loop",
        arrows: true,
        pagination: false,
        width: "100%",
        perPage: 3,
        gap: 20,
        padding: { left: "0", right: "4rem" },
        breakpoints: {
          800: {
            perPage: 2,
          },
          640: {
            perPage: 1,
            padding: { left: "0", right: "1rem" },
          },
        },
      },
      events: [
        {
          topic: "Regular Talks: Food Science & Full Stack Developer",
          date: "26 Feb 2022",
          time: "00.00 WIB",
        },
        {
          topic: "Career Bootcamp: Food Science",
          date: "5-6 Mar 2022",
          time: "00.00 WIB",
        },
        {
          topic: "Career Bootcamp: Full Stack Developer",
          date: "19-20 Mar 2022",
          time: "00.00 WIB",
        },
      ],
    };
  },
};
</script>
<style scoped>
.card {
  cursor: pointer;
  border-radius: 15px;
  border: none;
  background: #ebf3fd;
  box-shadow: 8px 10px 10px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 8px 10px 10px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 10px 10px -7px rgba(0, 0, 0, 0.75);
}

.card-type {
  position: absolute;
  z-index: 99;
  top: 5px;
  right: 5px;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 12px;
  border: 1px solid #2c588f;
}

.card-img {
  height: 200px;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
}

.card-img img {
  width: 100%;
  transition: transform 0.5s ease;
}

.card-img img:hover,
.card:hover .card-img img {
  transform: scale(1.1);
}

.card-title {
  margin-top: -20px;
  height: 60px;
  background: #223872;
  color: white;
  font-weight: bold;
  font-size: 14px;
  padding: 10px 10px;
  text-transform: uppercase;
  text-align: center;
  z-index: 99;
  transition: all 0.4s ease-in-out;
}

.card:hover .card-title {
  background: #f0ab54;
  color: #051844;
}

.card-label {
  margin-top: -7px;
  padding: 10px 15px 10px 15px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 0 0 15px 15px;
}

@media only screen and (max-width: 800px) {
  .card-img {
    height: 150px;
  }
}
</style>