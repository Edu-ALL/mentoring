<template>
  <div id="mail">
    <div class="row">
      <transition name="fade">
        <div class="col-md-12" v-if="menus.submenu == ''">
          <v-error :mails_count="mails" :menus="menus" @check="checkData" />
        </div>
      </transition>
      <transition name="fade">
        <div class="col-md-12" v-if="menus.submenu == 'success'">
          <v-success :mails_count="mails" :menus="menus" @check="checkData" />
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
          this.mails.error = response.data.data.total;
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMailSuccess() {
      this.$axios
        .get(this.$url + "list/mail/log/success")
        .then((response) => {
          this.mails.success = response.data.data.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkData() {
      this.getMailError();
      this.getMailSuccess();
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