<template>
  <div id="activity">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card-white">
            <div class="">
              <button class="btn btn-mentoring position-relative me-3 btn-type-2 py-1" :class="menus.submenu == '' ? 'btn-type-1' : ' btn-type-2'" @click="this.$router.push({ path: '/alumni/activity' })">Pending</button>
              <button class="btn btn-mentoring position-relative me-3 btn-type-2 py-1" :class="menus.submenu == 'history' ? 'btn-type-1' : ' btn-type-2'" @click="this.$router.push({ path: '/alumni/activity/history' })">History</button>
            </div>
            <div class="row">
              <div class="col-md-12 mt-4">
                <transition name="fade">
                  <v-pending v-if="menus.submenu == ''" />
                </transition>
                <transition name="fade">
                  <v-history v-if="menus.submenu == 'history'" />
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Pending from "@/components/alumni/activity/pending";
import History from "@/components/alumni/activity/history";
export default {
  name: "activity",
  props: {
    menus: Object,
  },
  components: {
    "v-pending": Pending,
    "v-history": History,
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