<template>
  <div id="page">
    <transition name="fade">
      <v-loader v-if="loading"></v-loader>
    </transition>
    <transition name="fade">
      <div id="content" v-if="!loading">
        <v-header></v-header>
        <transition name="fade">
          <v-profile v-if="page == 'my-profile'"></v-profile>
        </transition>
        <transition name="fade">
          <v-activity v-if="page == 'my-activity'"></v-activity>
        </transition>
        <transition name="fade">
          <v-files v-if="page == 'my-files'"></v-files>
        </transition>
      </div>
    </transition>
  </div>
</template>
<script>
import Header from "@/components/layout/student/header";
import Loader from "@/components/library/loader";

import Profile from "@/components/student/page/profile";
import Activity from "@/components/student/page/activity";
import Files from "@/components/student/page/files";

export default {
  name: "page",
  components: {
    "v-header": Header,
    "v-loader": Loader,
    "v-profile": Profile,
    "v-activity": Activity,
    "v-files": Files,
  },
  data() {
    return {
      loading: true,
      page: this.$route.params.page,
    };
  },
  methods: {
    load(status) {
      this.loading = status;
    },
  },
  watch: {
    $route(to) {
      this.page = to.params.page;
    },
  },
  created() {
    document.title = "Your Dashboard";
    setTimeout(() => {
      this.load(false);
    }, 1000);
  },
};
</script>