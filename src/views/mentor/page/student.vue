<template>
  <div id="student">
    <div class="" v-if="menus.submenu == ''">
      <div class="card-white m-0">
        <v-list></v-list>
      </div>
    </div>
    <v-detail v-if="menus.menu == 'student' && menus.submenu != ''" />
  </div>
</template>

<script>
import Student from "@/components/mentor/student/list-student";
import Detail from "@/components/mentor/student/detail";
export default {
  name: "student",
  props: {
    menus: Object,
  },
  components: {
    "v-list" : Student,
    "v-detail" : Detail,
  },
};
</script>

<style>
.card-white {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>