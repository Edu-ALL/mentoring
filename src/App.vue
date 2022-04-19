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
      username: "Hafidz",
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMWFhMDU2MjJjZTViNDdlZWZlNzExYjNkYzNjYzFiMTFjZDI2ZGRlMzU0NTJhOGZmYzIyY2VmYTQ0NTIyN2NlYzM4YjEwZDhhNTM3ZTdlOTQiLCJpYXQiOjE2NDk4MzUzNTkuNjk2ODczLCJuYmYiOjE2NDk4MzUzNTkuNjk2ODc4LCJleHAiOjE2NTA0NDAxNTkuNjk0MDQyLCJzdWIiOiIxIiwic2NvcGVzIjpbImFkbWluIl19.mmEg_tQgANX9zPYts0YXPrYcWIP2PE82nAJgcP3iQ5bcv1_CxwGzAFrZh_SD0jF3Mnuc0b3uFLpORRq20V9WDNBUqEm7PuSFwYVncFrGgJIhqXU4n08sDWjtvlwx9Vc-jXT4G5oVV4C0kbA-8iL3QBz3NnbuUn39XB-gOzniZhODTvD-l3TerhNYFsMfOlQVxkSYg0-UxuL9wGGQ2VTl6Z0eyNZOvI5RG9E8K-zRNR82n34lcYX9wxpUmE--4-ZZZrlS9d6iL62LOlT03p8LvjsyXqBFWOmQjc6vPIin3cWkQ3vVJw0JLOo6fv9fUxkZWDRDhFwsQioYKK7ot7e_fvRw7hor6IMwnJT_GHNTnv-_klJd4HgeRqJVm3jNBrlNwphv0F20937VN4arkAj0Z4dc2X8vQSLPc3eN2T3R-uomfcqYMcsnL5nMnXH4x6Y16u-9gRNC0jVrr2IxpLEE2qxw0GzxnsbB0MyE3h4gqSO8w5u6OXkdHkoRdUJhXbSST3R4VqAJufho6eZSpz3zE1Zc8XEVdjpz_NaW6PqwOmtuKebLgeQUY8G5yrvQYgM-P6rEvsoFvSRPtP2De3jAzng7mQZ5jokjaoHr3D_VrgE0ujjZEs4snnUOBppoFqf8_FWnS4f-zhBiW3Q09k3Uzf2jruWn_VQI3QxmIBnwSTk",
    };

    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("token", data.token);

    // console.log(JSON.parse(localStorage.getItem("user")));
  },
};
</script>
<style>
</style>
