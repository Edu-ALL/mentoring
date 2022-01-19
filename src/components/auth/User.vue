<template>
  <div id="user"></div>
</template>

<script>
// import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "User",
  data() {
    return {
      token: "",
      role: "",
    };
  },
  methods: {
    toast(status, title) {
      const Toast = Swal.mixin({
        toast: true,
        width: "33%",
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: status,
        title: title,
      });
    },
  },
  created() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      this.token = user.data.token;
      this.role = user.data.role_id;
    } else {
      this.toast("warning", "Please log in first !");
      this.$router.push({ path: "/" });
    }
  },
};
</script>