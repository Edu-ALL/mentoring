<template>
  <div id="view">
    <div class="container mt-4">
      <div class="row">
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <h5>University Requirements</h5>
            <div class="row row-cols-md-1 row-cols-1 g-3">
              <!-- Essay  -->
              <div class="col">
                <div class="req-card">
                  <v-essay></v-essay>
                </div>
              </div>

              <!-- SAT  -->
              <div class="col">
                <div class="req-card">
                  <v-sat></v-sat>
                </div>
              </div>

              <!-- LOR  -->
              <div class="col">
                <div class="req-card">
                  <v-lor></v-lor>
                </div>
              </div>

              <!-- Transcript -->
              <div class="col">
                <div class="req-card">
                  <v-transcript></v-transcript>
                </div>
              </div>

              <div class="col">
                <div class="req-card">
                  <v-link></v-link>
                </div>
              </div>

              <div class="col">
                <div class="req-card">
                  <v-score></v-score>
                </div>
              </div>

              <div class="col">
                <div class="req-card">
                  <v-ap></v-ap>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Essay from "@/components/student/page/unireq-detail/essay";
import SAT from "@/components/student/page/unireq-detail/sat";
import LOR from "@/components/student/page/unireq-detail/lor";
import Transcript from "@/components/student/page/unireq-detail/transcript";
import Link from "@/components/student/page/unireq-detail/link";
import Score from "@/components/student/page/unireq-detail/score";
import Ap from "@/components/student/page/unireq-detail/ap";

export default {
  name: "viewUni",
  components: {
    "v-essay": Essay,
    "v-transcript": Transcript,
    "v-lor": LOR,
    "v-sat": SAT,
    "v-link": Link,
    "v-score": Score,
    "v-ap": Ap,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style>
.req-card {
  position: relative;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  /* height: 200px; */
  overflow-x: hidden;
  overflow-y: auto;
}

.req-card:hover .req-header {
  background: #223872;
  color: #fff;
}

.req-header {
  background: #f3f3f3;
  color: #f0ab54;
  position: sticky;
  font-size: 1.1em;
  font-weight: 600;
  top: 0;
  z-index: 5;
  transition: all 0.3s ease-in-out;
}

.req-body .card {
  transition: all 0.3s ease-in-out;
}

.req-body .card:hover {
  cursor: pointer;
  background: rgb(234, 241, 255);
}

.dropzone {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
  border: 2px dashed #41b883;
  background-color: #fff;
  transition: 0.3s ease all;
}

.dropzone label {
  padding: 8px 12px;
  color: #fff;
  background-color: #41b883;
  transition: 0.3s ease all;
}
.dropzone input {
  display: none;
}

.active-dropzone {
  color: #fff;
  border-color: #fff;
  background-color: #41b883;
}

.active-dropzone label {
  background-color: #fff;
  color: #41b883;
}

.file-group-item {
  width: 100%;
  border: 1px solid #dedede;
  border-radius: 5px;
  padding: 5px 10px;
}

.file-group-item label {
  cursor: pointer;
}

.file-group input[type="radio"] {
  display: none;
}

.file-group input[type="radio"] + .file-group-item:before {
  content: "\2713";
  color: transparent;
  font-weight: bold;
  margin-right: 10px;
}

.file-group input[type="radio"]:checked + .file-group-item {
  background-color: #0275d8;
  color: #fff;
}

.file-group input[type="radio"]:checked + .file-group-item:before {
  color: inherit;
}

/* Scroll  */
/* width */
.req-card::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.req-card::-webkit-scrollbar-track {
  background: #223872;
}

/* Handle */
.req-card::-webkit-scrollbar-thumb {
  background: #ffc783;
  border-radius: 10px;
}

/* Handle on hover */
.req-card::-webkit-scrollbar-thumb:hover {
  background: #ffba66;
}
</style>