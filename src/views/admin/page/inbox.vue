<template>
  <div id="inbox">
    <div class="row">
      <div class="col-md-4">
        <div class="sticky-top card-inbox shadow-sm">
          <div class="sticky-top bg-white p-2">
            <input
              type="text"
              class="form-mentoring w-100"
              placeholder="Search"
            />
          </div>
          <div class="bg-white p-2">
            <div class="list-group">
              <button
                type="button"
                class="list-group-item list-group-item-action"
                aria-current="true"
                v-for="i in 30"
                :key="i"
              >
                Full Name
                <div class="float-end">
                  <span class="badge bg-primary rounded-pill">14</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-white shadow-sm">
          <h6>Full Name</h6>
          <div class="inboxes">
            <div v-for="i in 10" :key="i">
              <div class="receiver" v-if="i % 2 != 0">
                <div class="receiver-chat">
                  <strong> Lorem ipsum dolor sit amet consectetur </strong>
                  <hr class="my-1" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam autem dolorem perferendis aliquid, eligendi a velit
                  tempore eaque. Architecto velit maiores fugit unde quia iure
                  cumque. Illo ex numquam et?
                </div>
                <div class="inbox-date">25 July 2022</div>
              </div>
              <div class="sender" v-if="i % 2 == 0">
                <div class="sender-chat">Lorem ipsum dolor,</div>
                <div class="inbox-date">25 July 2022</div>
              </div>
            </div>
          </div>
          <div class="chat mt-2">
            <textarea name="" id="" rows="1" class="chat-textarea"></textarea>
            <div class="chat-send">
              <vue-feather type="send"></vue-feather>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "inbox",
};
</script>

<style scoped>
.card-inbox {
  height: 615px;
  overflow: auto;
}

.inboxes {
  position: relative;
  background: #f8f8f8;
  border: 1px solid #ebe8e8;
  padding: 10px;
  height: 500px;
  overflow: auto;
  flex-grow: 1;
}

.receiver {
  text-align: left;
  margin-bottom: 10px;
}

.receiver-chat {
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
  background-color: #999999;
  color: #fff;
  max-width: 50%;
}

.sender {
  text-align: right;
}

.sender-chat {
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
  max-width: 50%;
  background-color: #223872;
  color: #fff;
}

.inbox-date {
  font-size: 0.75em;
}

.chat {
  display: flex;
}

.chat-textarea {
  width: 93%;
  border-radius: 10px 0 0px 10px !important;
}

.chat-send {
  padding-top: 8px;
  width: 7%;
  text-align: center;
  background: #efa859;
  color: #fff;
  border-radius: 0 10px 10px 0 !important;
  transition: all 0.3s ease-in-out;
}

.chat-send:hover {
  background: #eb983a;
}
</style>