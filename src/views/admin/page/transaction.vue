<template>
  <div id="transaction">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card-white">
            <div class="">
              <button
                type="button"
                class="btn-sm btn-mentoring position-relative me-3"
                :class="menus.submenu == '' ? 'btn-type-1' : ' btn-type-2'"
                @click="this.$router.push({ path: '/admin/transactions/' })"
              >
                Pending
                <span
                  class="
                    position-absolute
                    top-0
                    start-100
                    translate-middle
                    badge
                    rounded-pill
                    bg-primary
                  "
                >
                  99+
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>

              <button
                type="button"
                class="btn-sm btn-mentoring position-relative me-3"
                :class="
                  menus.submenu == 'confirm' ? 'btn-type-1' : ' btn-type-2'
                "
                @click="
                  this.$router.push({ path: '/admin/transactions/confirm' })
                "
              >
                Need Confirmation
                <span
                  class="
                    position-absolute
                    top-0
                    start-100
                    translate-middle
                    badge
                    rounded-pill
                    bg-primary
                  "
                >
                  99+
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>

              <button
                type="button"
                class="btn-sm btn-mentoring position-relative"
                :class="menus.submenu == 'paid' ? 'btn-type-1' : ' btn-type-2'"
                @click="this.$router.push({ path: '/admin/transactions/paid' })"
              >
                Paid
                <span
                  class="
                    position-absolute
                    top-0
                    start-100
                    translate-middle
                    badge
                    rounded-pill
                    bg-primary
                  "
                >
                  99+
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>
            </div>

            <div class="row">
              <div class="col-md-12 mt-4">
                <transition name="fade">
                  <v-pending v-if="menus.submenu == ''" />
                </transition>
                <transition name="fade">
                  <v-confirm v-if="menus.submenu == 'confirm'" />
                </transition>
                <transition name="fade">
                  <v-paid v-if="menus.submenu == 'paid'" />
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
import Pending from "@/components/admin/transaction/pending";
import Confirm from "@/components/admin/transaction/confirm";
import Paid from "@/components/admin/transaction/paid";

export default {
  name: "transaction",
  props: {
    menus: String,
  },

  components: {
    "v-pending": Pending,
    "v-confirm": Confirm,
    "v-paid": Paid,
  },
};
</script>

<style>
</style>