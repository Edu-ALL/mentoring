<template>
  <div id="page">
    <!-- <transition name="fade">
      <v-loader v-if="loading"></v-loader>
    </transition> -->
    <v-header></v-header>
    <transition name="fade">
      <div id="content" v-if="!loading">
        <transition name="fade">
          <v-dashboard v-if="page == ''"></v-dashboard>
        </transition>
        <transition name="fade">
          <v-profile v-if="page == 'my-profile'"></v-profile>
        </transition>
        <transition name="fade">
          <v-activity v-if="page == 'my-activity'"></v-activity>
        </transition>
        <transition name="fade">
          <v-meeting v-if="page == 'meetings'"></v-meeting>
        </transition>
        <transition name="fade">
          <v-group v-if="page == 'groups'"></v-group>
        </transition>
        <transition name="fade">
          <v-webinar v-if="page == 'webinar'"></v-webinar>
        </transition>
        <transition name="fade">
          <v-event v-if="page == 'event'"></v-event>
        </transition>
        <transition name="fade">
          <v-uni v-if="page == 'uni-list'"></v-uni>
        </transition>
        <transition name="fade">
          <v-uni-req v-if="page == 'uni-requirement'"></v-uni-req>
        </transition>
        <transition name="fade">
          <v-files v-if="page == 'my-files'"></v-files>
        </transition>
      </div>
    </transition>
  </div>
</template>
<script>
// import Loader from "@/components/library/loader";
import Header from "@/components/layout/student/header";

import Dashboard from "@/components/student/page/dashboard";
import Profile from "@/components/student/page/profile";
import Meeting from "@/components/student/page/meeting";
import Group from "@/components/student/page/groups";
import Webinar from "@/components/student/page/webinar";
import Event from "@/components/student/page/event";
import Uni from "@/components/student/page/uni-list";
import UniReq from "@/components/student/page/uni-req";
import Activity from "@/components/student/page/activity";
import Files from "@/components/student/page/files";

export default {
  name: "page",
  components: {
    // "v-loader": Loader,
    "v-header": Header,
    "v-dashboard": Dashboard,
    "v-profile": Profile,
    "v-meeting": Meeting,
    "v-group": Group,
    "v-webinar": Webinar,
    "v-event": Event,
    "v-uni": Uni,
    "v-uni-req": UniReq,
    "v-activity": Activity,
    "v-files": Files,
  },
  data() {
    return {
      loading: true,
      page: this.$route.params.menu,
    };
  },
  methods: {
    load(status) {
      this.loading = status;
    },
  },
  watch: {
    $route(to) {
      this.page = to.params.menu;
    },
  },
  created() {
    document.title = "Your Dashboard";
    setTimeout(() => {
      this.load(false);
    }, 100);
  },
};
</script>
<style>
</style>