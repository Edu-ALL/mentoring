<template>
  <div id="uni_req">
    <div class="border p-3 rounded mt-3">
      <div
        class="mb-3 overflow-auto d-flex w-100 mentoring-scroll"
        style="white-space: nowrap"
      >
        <!-- <button
          class="btn-mentoring btn-sm me-2 py-0 mt-2 mx-1"
          :class="tab == 'all' ? 'bg-secondary' : 'btn-type-2'"
          @click="checkTab('all')"
        >
          ALL
        </button> -->
        <div class="text-end" style="white-space: nowrap">
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
        <!-- <div v-for="i in uni_list" :key="i">
          <button
            class="btn-mentoring btn-sm mt-1 me-2"
            :class="tab == i.imported_id ? 'bg-secondary' : 'btn-type-2'"
            @click="checkTab(i.imported_id)"
          >
            {{ i.uni_name }}
          </button>
        </div> -->
      </div>
      <v-essay :data="documents.essay" @check="checkData" />
      <v-sat :data="academic.sat" @check="checkData" />
      <v-lor :data="documents.lor" @check="checkData" />
      <v-transcript :data="documents.transcript" @check="checkData" />
      <v-link :data="academic.publication_links" @check="checkData" />
      <v-score
        :toefl="academic.toefl"
        :ielts="academic.ielts"
        @check="checkData"
      />
      <v-ap :data="academic.ap_score" @check="checkData" />
    </div>
  </div>
</template>

<script>
import Essay from "@/components/admin/user/detail/student-activity/requirement/essay";
import SAT from "@/components/admin/user/detail/student-activity/requirement/sat";
import LOR from "@/components/admin/user/detail/student-activity/requirement/lor";
import Transcript from "@/components/admin/user/detail/student-activity/requirement/transcript";
import Link from "@/components/admin/user/detail/student-activity/requirement/link";
import Score from "@/components/admin/user/detail/student-activity/requirement/score";
import AP from "@/components/admin/user/detail/student-activity/requirement/ap";

export default {
  name: "UniReq",
  props: {
    menus: Object,
  },
  components: {
    "v-essay": Essay,
    "v-sat": SAT,
    "v-lor": LOR,
    "v-transcript": Transcript,
    "v-link": Link,
    "v-score": Score,
    "v-ap": AP,
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
      // alert(this.uni_select);
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
      this.$alert.loading();
      const id = this.$route.params.key;
      try {
        const response = await this.$axios.get(
          "list/requirement/document/" + id + "/" + i
        );

        this.documents = response.data.data;
        this.$alert.close();
        // console.log(response);
      } catch (e) {
        this.$alert.close();
        console.log(e.response);
      }
    },

    async getDataText() {
      const id = this.$route.params.key;
      try {
        const response = await this.$axios.get(
          "list/requirement/academic/" + id
        );

        this.academic = response.data.data;
        console.log(response.data.data);
      } catch (e) {
        console.log(e.response);
      }
    },

    async getUniList() {
      const id = this.$route.params.key;
      try {
        const response = await this.$axios.get(
          // https://services.all-inedu.com/api/v1/select/shortlisted/{{student_id}}/all
          "select/shortlisted/" + id + "/all"
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
  background: #dedede;
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