<template>
  <div id="user">
    <div class="container mt-4">
      <div class="row">
        <!-- List  -->
        <transition name="fade">
          <div class="col" v-if="menus.id == ''">
            <transition name="fade">
              <v-student v-if="menus.submenu == 'student'"></v-student>
            </transition>
            <transition name="fade">
              <v-mentor v-if="menus.submenu == 'mentor'"></v-mentor>
            </transition>
            <transition name="fade">
              <v-editor v-if="menus.submenu == 'editor'"></v-editor>
            </transition>
            <transition name="fade">
              <v-alumni v-if="menus.submenu == 'alumni'"></v-alumni>
            </transition>
          </div>
        </transition>

        <!-- Detail  -->
        <transition name="fade">
          <div class="col" v-if="menus.id != ''">
            <transition name="fade">
              <v-student-detail
                v-if="menus.submenu == 'student'"
                :menus="menus"
              ></v-student-detail>
            </transition>
            <transition name="fade">
              <v-mentor-detail
                v-if="menus.submenu == 'mentor'"
                :menus="menus"
              ></v-mentor-detail>
            </transition>
            <transition name="fade">
              <v-editor-detail
                v-if="menus.submenu == 'editor'"
                :menus="menus"
              ></v-editor-detail>
            </transition>
            <transition name="fade">
              <v-alumni-detail
                v-if="menus.submenu == 'alumni'"
                :menus="menus"
              ></v-alumni-detail>
            </transition>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Student from "@/components/admin/user/student";
import Mentor from "@/components/admin/user/mentor";
import Editor from "@/components/admin/user/editor";
import Alumni from "@/components/admin/user/alumni";

import StudentDetail from "@/components/admin/user/detail/student";
import MentorDetail from "@/components/admin/user/detail/mentor";
import EditorDetail from "@/components/admin/user/detail/editor";
import AlumniDetail from "@/components/admin/user/detail/alumni";
export default {
  name: "user",
  props: {
    menus: Object,
  },
  components: {
    "v-student": Student,
    "v-student-detail": StudentDetail,
    "v-mentor": Mentor,
    "v-mentor-detail": MentorDetail,
    "v-editor": Editor,
    "v-editor-detail": EditorDetail,
    "v-alumni": Alumni,
    "v-alumni-detail": AlumniDetail,
  },
  created() {},
};
</script>

<style scoped>
</style>