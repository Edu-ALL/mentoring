<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  created() {
    let data = {
      username: "fael",
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZWEzNGVkODVlMWZjM2JmMDZhMGEwYjY1MzUyNThmYmNiMDUzMTMxNTYyMjdiM2MzODc3NzYzMTgxMzlkMjA1NjEwOGVhZmUwZWIwNWE1MzkiLCJpYXQiOjE2NTA1OTYzMzQuMTcxNDMyLCJuYmYiOjE2NTA1OTYzMzQuMTcxNDM1LCJleHAiOjE2NTEyMDExMzQuMTY3MjcxLCJzdWIiOiIyIiwic2NvcGVzIjpbIm1lbnRvciJdfQ.YjvD2KAE7KRskdylrMl6uUeLCcpzw3azx5w-5oVBw9kgFaf1j26HpRWcCsD3Tk2BOsJCVFvO1yJsS3c-XQktJMq1ivRSbWEdGsXdmWwJRrVI6TEAVVRGLisle1U-LV9537mf4lzrgV-8At0tMOODVxD6rNtZWLec5Oce1F2_IBjnSx02MnHu9wlxIWkIsclz-sZJKHaYkibwJhOZ0t0aSK6ugDsoYiKAvpkY28S66ggbWV2ZUWXC4xbOGjS4DkheV8dYa88tgVU_ucFgoHLpkMwG74UP13RSDk2BfO8MhKA-Wpgiy7Hk-z4hXMfEpIP-81x0_28q0cRkGfiAjPiyr91fMal4cM8l-FlPhEGgYn4p-2WHv46S4abnoBC0F6gBQdRQck7gYj-r5pkYvdG-jgUCH5yfXs4mSuMR1Zw4-4aFreprcChLb5BQp7sFiJOdMobo8huHGWItHHZVgGQiod-ju-0omxRtO6pAZNMUHh7ocA2A5VnrrTHb-io8pkDcny_OHl9U6Phtp9AbIpvnph-HAojUbG_6t4joTTIIusXKHgpYYK10ENW59088IdeIbhqkAcpHikPAPq3PDiuQfQwMqMA0XHHcbsglJus7Lus1-lX8Yd1jzgrkzc4n4aHEGcmCz6UaIuMRL_0TLfDFrdn2HqGy0Y1-uhF8BNPeX3w",
    };

    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("token", data.token);

    // console.log(JSON.parse(localStorage.getItem("user")));
  },
};
</script>
<style>
</style>
