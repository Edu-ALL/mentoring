<template>
  <div id="mail">
    <div class="container">
      <div class="card-white">
        <div class="row">
          <div class="col-md-12">
            <button
              type="button"
              class="btn-sm btn-mentoring position-relative me-3"
              :class="menus.submenu == '' ? 'btn-type-1' : ' btn-type-2'"
              @click="this.$router.push({ path: '/admin/mail/' })"
            >
              Error
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
                {{ mails.error > 99 ? "99+" : mails.error }}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
            <button
              type="button"
              class="btn-sm btn-mentoring position-relative me-3"
              :class="menus.submenu == 'success' ? 'btn-type-1' : ' btn-type-2'"
              @click="this.$router.push({ path: '/admin/mail/success' })"
            >
              Success
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
                {{ mails.success > 99 ? "99+" : mails.success }}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
        <div class="row">
          <transition name="fade">
            <div class="col-md-12" v-if="menus.submenu == ''">
              <v-error></v-error>
            </div>
          </transition>
          <transition name="fade">
            <div class="col-md-12" v-if="menus.submenu == 'success'">
              <v-success></v-success>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Error from "@/components/admin/maillog/error";
import Success from "@/components/admin/maillog/success";

export default {
  name: "mail",
  props: {
    menus: String,
  },
  components: {
    "v-error": Error,
    "v-success": Success,
  },
  data() {
    return {
      mails: [],
    };
  },
  methods: {
    getMailError() {
      this.$axios
        .get(this.$url + "list/mail/log/error", {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.mails.error = response.data.data.data.length;
          console.log(this.mails.error);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMailSuccess() {
      this.$axios
        .get(this.$url + "list/mail/log/success", {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.mails.success = response.data.data.data.length;
          console.log(this.mails.error);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getMailError();
    this.getMailSuccess();
  },
};
</script>

<style>
</style>