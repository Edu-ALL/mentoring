<template>
  <div id="view">
    <div class="row">
      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="mb-0"></h5>
            <div class="mb-2 text-end" style="white-space: nowrap">
              <select
                class="form-mentoring"
                v-model="uni_select"
                @change="checkTab()"
              >
                <option value="all">General</option>
                <option :value="i.imported_id" v-for="i in uni_list" :key="i">
                  {{ i.uni_name }}
                </option>
              </select>
            </div>
          </div>

          <div
            class="alert alert-info alert-dismissible fade show"
            role="alert"
            style="font-size: 0.9em"
          >
            Uploaded files must be of the following types:
            <strong> doc, docx, pdf, png, jpeg, jpg </strong> and not larger
            than <strong> 2048 kilobytes (2MB). </strong>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>

          <div class="row row-cols-md-1 row-cols-1 g-3">
            <!-- Essay  -->
            <div class="col">
              <div class="req-card">
                <v-essay :data="documents.essay" @check="checkData"></v-essay>
              </div>
            </div>

            <!-- SAT  -->
            <div class="col">
              <div class="req-card">
                <v-sat :data="academic.sat" @check="checkData"></v-sat>
              </div>
            </div>

            <!-- LOR  -->
            <div class="col">
              <div class="req-card">
                <v-lor :data="documents.lor" @check="checkData"></v-lor>
              </div>
            </div>

            <!-- Transcript -->
            <div class="col">
              <div class="req-card">
                <v-transcript
                  :data="documents.transcript"
                  @check="checkData"
                ></v-transcript>
              </div>
            </div>

            <div class="col">
              <div class="req-card">
                <v-link
                  :data="academic.publication_links"
                  @check="checkData"
                ></v-link>
              </div>
            </div>

            <div class="col">
              <div class="req-card">
                <v-score
                  :toefl="academic.toefl"
                  :ielts="academic.ielts"
                  @check="checkData"
                ></v-score>
              </div>
            </div>

            <div class="col">
              <div class="req-card">
                <v-ap :data="academic.ap_score" @check="checkData"></v-ap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Essay from "@/components/student/page/uni/unireq-detail/essay";
import SAT from "@/components/student/page/uni/unireq-detail/sat";
import LOR from "@/components/student/page/uni/unireq-detail/lor";
import Transcript from "@/components/student/page/uni/unireq-detail/transcript";
import Link from "@/components/student/page/uni/unireq-detail/link";
import Score from "@/components/student/page/uni/unireq-detail/score";
import Ap from "@/components/student/page/uni/unireq-detail/ap";

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
    return {
      tab: "all",
      documents: [],
      academic: [],
      uni_select: "all",
      uni_list: [],
    };
  },

  methods: {
    checkTab() {
      this.getDataDocument(this.uni_select);
    },

    checkData(i) {
      if (i == "academic") {
        this.getDataText();
      } else if (i == "file") {
        this.getDataDocument(this.uni_select);
      }
    },

    async getDataDocument(i = "all") {
      this.$Progress.start();
      try {
        const response = await this.$axios.get(
          "student/university/requirement/document/" + i
        );
        this.$Progress.finish();
        this.documents = response.data.data;
        // console.log(response.data);
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
      }
    },

    async getDataText() {
      try {
        const response = await this.$axios.get(
          "student/university/requirement/academic"
        );

        this.academic = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
    },

    async getUniList() {
      try {
        const response = await this.$axios.get(
          "student/university/shortlisted/all"
        );

        this.uni_list = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
    },
  },
  created() {
    this.getDataDocument();
    this.getDataText();
    this.getUniList();
  },
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

.req-body .card .docs-detail {
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.req-body .card:hover .docs-detail {
  filter: blur(2px);
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

.docs {
  border: 1px solid rgb(243, 243, 243);
  font-weight: 500;
  border-radius: 10px;
  overflow: hidden;
}

.docs-content {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  border-top: 5px solid #223872;
  background: #f0aa54ec;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s;
}

.docs:hover .docs-content {
  top: 30%;
  height: 70%;
}

.docs-content button i {
  transition: all 0.8s;
}

.docs-content button:hover,
.docs-content a:hover {
  background: #223872 !important;
}

.docs-content button:hover i,
.docs-content a:hover i {
  color: #fff !important;
}
</style>