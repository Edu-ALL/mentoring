<template>
  <div id="meeting">
    <div class="container mt-4">
      <div class="row">
        <div class="col-12">
          <div class="ps-3 pointer" style="top: 100px">
            <h5 class="d-inline">Meetings</h5>
          </div>
        </div>
      </div>
      <!-- Tabs  -->
      <div class="row mt-3">
        <div class="col-md-9 col-8 menu-tab">
          <button
            class="btn-mentoring btn-sm mx-1"
            :class="tab == '' || tab == 'request' ? 'btn-type-1' : 'btn-type-2'"
            @click="tab = 'request'"
          >
            New Request
          </button>
          <button
            class="btn-mentoring btn-sm mx-1"
            :class="tab == 'pending' ? 'btn-type-1' : 'btn-type-2'"
            @click="tab = 'pending'"
          >
            Pending
          </button>
          <button
            class="btn-mentoring btn-sm mx-1"
            :class="tab == 'upcoming' ? 'btn-type-1' : 'btn-type-2'"
            @click="tab = 'upcoming'"
          >
            Upcoming
          </button>
          <button
            class="btn-mentoring btn-sm mx-1"
            :class="tab == 'history' ? 'btn-type-1' : 'btn-type-2'"
            @click="tab = 'history'"
          >
            History
          </button>
        </div>
        <div class="col-md-3 col-4 text-end">
          <button
            class="btn-mentoring btn-sm btn-type-3 mx-1"
            @click="modal = 'new'"
          >
            <i class="fa-solid fa-add"></i>
          </button>
        </div>
      </div>

      <!-- Content  -->
      <div class="row mt-2">
        <div class="col">
          <div class="card border-0 shadow">
            <transition name="fade">
              <v-request v-if="tab == '' || tab == 'request'"></v-request>
            </transition>
            <transition name="fade">
              <v-pending v-if="tab == 'pending'"></v-pending>
            </transition>
            <transition name="fade">
              <v-upcoming v-if="tab == 'upcoming'"></v-upcoming>
            </transition>
            <transition name="fade">
              <v-history v-if="tab == 'history'"></v-history>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal  -->
    <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
    <transition name="pop">
      <div
        class="vue-modal vue-modal-lg bg-secondary"
        style="min-height: 300px"
        v-if="modal == 'new'"
      >
        <h5>New Meeting</h5>
        <hr class="my-1" />
        <div class="row">
          <div class="col-md-6">
            <div class="mb-2">
              <label>Call with</label>
              <multiselect
                v-model="value"
                :options="options"
                placeholder="Select One"
              >
              </multiselect>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-2">
              <label>Meeting Date</label>
              <input type="datetime-local" class="form-mentoring w-100" />
            </div>
          </div>
          <div class="col-md-12">
            <div class="mb-2">
              <label>Location Link</label>
              <input type="text" class="form-mentoring w-100" />
            </div>
          </div>
          <div class="col-md-12">
            <div class="mb-2">
              <label> Subject </label>
              <div
                class="row row-cols-md-4 row-cols-2 align-items-stretch mt-1"
              >
                <div class="col mb-2">
                  <label>
                    <input
                      type="radio"
                      name="product"
                      class="card-input-element"
                    />
                    <div class="panel panel-default card-input">
                      <div class="panel-heading">Life Skill</div>
                    </div>
                  </label>
                </div>
                <div class="col mb-2">
                  <label>
                    <input
                      type="radio"
                      name="product"
                      class="card-input-element"
                    />
                    <div class="panel panel-default card-input">
                      <div class="panel-heading">Career Exploration</div>
                    </div>
                  </label>
                </div>
                <div class="col mb-2">
                  <label>
                    <input
                      type="radio"
                      name="product"
                      class="card-input-element"
                    />
                    <div class="panel panel-default card-input">
                      <div class="panel-heading">University Admission</div>
                    </div>
                  </label>
                </div>
                <div class="col mb-2">
                  <label>
                    <input
                      type="radio"
                      name="product"
                      class="card-input-element"
                    />
                    <div class="panel panel-default card-input">
                      <div class="panel-heading">Life at University</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-3" />
          <div class="col-6">
            <button
              class="btn-mentoring btn-outline-danger"
              @click="modal = ''"
            >
              Cancel
            </button>
          </div>
          <div class="col-6 text-end">
            <button class="btn-mentoring btn-success">Save Meeting</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

import Request from "@/components/student/page/meeting-detail/request";
import Pending from "@/components/student/page/meeting-detail/pending";
import Upcoming from "@/components/student/page/meeting-detail/upcoming";
import History from "@/components/student/page/meeting-detail/history";

export default {
  name: "meetings",
  components: {
    "v-request": Request,
    "v-pending": Pending,
    "v-upcoming": Upcoming,
    "v-history": History,
    Multiselect,
  },
  data() {
    return {
      value: "",
      options: ["value 1", "value 2", "value 3"],
      tab: "",
      modal: "",
    };
  },
};
</script>
<style scoped>
label {
  width: 100%;
}

label::after {
  content: "";
}

.card-input-element {
  display: none;
}

.card-input {
  width: 100%;
  background: #fff;
  border: 3px solid #fff;
  color: #223872;
  text-align: center;
  border-radius: 20px;
  padding: 5px;
  height: 65px;
  display: flex;
  align-items: center;
}

.panel-heading {
  width: 100%;
  display: block;
  font-size: 1.2em;
  line-height: 1em;
  text-align: center;
}

.card-input:hover {
  cursor: pointer;
}

.card-input-element:checked + .card-input {
  border: 3px solid #fff;
  color: #fff;
  background: #223872;
}
</style>