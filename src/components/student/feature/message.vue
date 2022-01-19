<template>
  <div id="message">
    <h2 class="content-title">Contact a Mentor</h2>
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <input
            type="text"
            class="form-control form-message"
            placeholder="Subject"
          />
        </div>
        <div class="mb-3">
          <textarea
            class="form-control form-message"
            rows="10"
            placeholder="Message"
          ></textarea>
        </div>
        <button class="btn btn-allin bg-secondary">
          <strong> Send </strong>
          <vue-feather type="send" size="15" class="ms-1"></vue-feather>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "message",
};
</script>
<style scoped>
.form-message {
  background: #ebf3fd;
  border-radius: 15px;
  border: none;
}
</style>