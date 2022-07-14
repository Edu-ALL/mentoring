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
                  v-if="count.pending > 0"
                >
                  {{ count.pending > 99 ? "99+" : count.pending }}
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
                  v-if="count.need_confirmation > 0"
                >
                  {{
                    count.need_confirmation > 99
                      ? "99+"
                      : count.need_confirmation
                  }}
                </span>
              </button>

              <button
                type="button"
                class="btn-sm btn-mentoring position-relative me-3"
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
                  v-if="count.paid > 0"
                >
                  {{ count.paid > 99 ? "99+" : count.paid }}
                </span>
              </button>

              <button
                type="button"
                class="btn-sm btn-mentoring position-relative"
                :class="
                  menus.submenu == 'expired' ? 'btn-type-1' : ' btn-type-2'
                "
                @click="
                  this.$router.push({ path: '/admin/transactions/expired' })
                "
              >
                Expired
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
                  v-if="count.expired > 0"
                >
                  {{ count.expired > 99 ? "99+" : count.expired }}
                </span>
              </button>
            </div>

            <div class="row">
              <div class="col-md-12 mt-4">
                <transition name="fade">
                  <v-pending v-if="menus.submenu == ''" :menus="menus" />
                </transition>
                <transition name="fade">
                  <v-confirm v-if="menus.submenu == 'confirm'" />
                </transition>
                <transition name="fade">
                  <v-paid v-if="menus.submenu == 'paid'" />
                </transition>
                <transition name="fade">
                  <v-expired v-if="menus.submenu == 'expired'" />
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
import Expired from "@/components/admin/transaction/expired";

export default {
  name: "transaction",
  props: {
    menus: String,
  },

  components: {
    "v-pending": Pending,
    "v-confirm": Confirm,
    "v-paid": Paid,
    "v-expired": Expired,
  },

  data() {
    return {
      count: [],
    };
  },

  methods: {
    getCount() {
      this.$axios
        .get(this.$url + "overview/transaction")
        .then((response) => {
          this.count = response.data.data;
          // console.log(this.count);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    this.getCount();
  },
};
</script>

<style>
</style>