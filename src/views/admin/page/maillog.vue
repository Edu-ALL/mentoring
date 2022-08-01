<template>
  <div id="mail">
    <div class="row">
      <transition name="fade">
        <div class="col-md-12" v-if="menus.submenu == ''">
          <v-error :mails_count="mails" :menus="menus" />
        </div>
      </transition>
      <transition name="fade">
        <div class="col-md-12" v-if="menus.submenu == 'success'">
          <v-success :mails_count="mails" :menus="menus" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Error from "@/components/admin/maillog/error";
import Success from "@/components/admin/maillog/success";

export default {
  name: "mail",
  props: {
    menus: Object,
  },
  components: {
    "v-error": Error,
    "v-success": Success,
  },
  data() {
    return {
      mails: { error: "", success: "" },
    };
  },
  methods: {
    getMailError() {
      this.$axios
        .get(this.$url + "list/mail/log/error")
        .then((response) => {
          this.mails.error = response.data.data.data.length;
          // console.log(this.mails.error);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMailSuccess() {
      this.$axios
        .get(this.$url + "list/mail/log/success")
        .then((response) => {
          this.mails.success = response.data.data.data.length;
          // console.log(this.mails.error);
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