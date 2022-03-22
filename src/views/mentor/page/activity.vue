<template>
  <div id="activity">
    <div class="">
      <div class="row">
        <div class="col">
          <button class="btn btn-mentoring btn-type-2 py-1">Pending</button>
          <button class="btn btn-mentoring btn-type-2 py-1">History</button>
        </div>
      </div>
      <v-pending />
    </div>
  </div>
</template>

<script>
import Pending from "@/components/mentor/activity/pending";
export default {
  name: "activity",
  props: {
    menus: Object,
  },
  components: {
    "v-pending": Pending,
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