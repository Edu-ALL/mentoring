<template>
  <div id="eventDetail">
    <div class="mb-2" @click="this.$router.push({ path: '/admin/events' })">
      <vue-feather
        type="arrow-left"
        class="float-start mt-0 me-2"
      ></vue-feather>
      Event List
    </div>
    <!-- ADD  -->
    <transition name="fade">
      <div class="card-white" v-if="menus.submenu == 'add'">
        <v-add></v-add>
      </div>
    </transition>

    <!-- Detail  -->
    <transition name="fade">
      <div class="card-white" v-if="menus.submenu == 'detail'">
        <div class="flex">
          <h5 class="d-inline">Event</h5>
          <div class="float-end">
            <button
              class="btn-mentoring btn-type-2 btn-sm"
              @click="this.$router.push({ path: '/admin/events/edit' })"
            >
              Edit Event
            </button>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-7">
            <div class="mb-3">
              <label>Event Name</label> <br />
              Event Name
            </div>
            <div class="mb-3">
              <label>Category</label> <br />
              Category Name
            </div>
            <div class="mb-3">
              <label>Price</label> <br />
              Rp 123.000
            </div>
            <div class="mb-3">
              <label>Descriptions</label> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              doloremque, nostrum veritatis totam consectetur consequuntur eaque
              laboriosam voluptate perspiciatis ratione minima dolorem, tenetur
              culpa tempore rem! Quibusdam architecto animi temporibus!
            </div>
          </div>
          <div class="col-md-5">
            <div class="card shadow border-0">
              <div class="card-body">
                <h6>Date & Time</h6>
                <ul class="list-group">
                  <li class="list-group-item" v-for="i in 5" :key="i">
                    <div class="float-start">12 April 2022</div>
                    <div class="float-end">09.30 - 10.30 WIB</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-12 mt-3">
            <h6>Speaker List</h6>
            <div class="row row-cols-3 row-cols-1">
              <div class="col" v-for="i in 2" :key="i">
                <div
                  class="card border-0 shadow"
                  @click="modal = 'speakerDetail'"
                >
                  <div class="card-body">
                    <div class="row align-items-center">
                      <div class="col-md-3">
                        <div class="text-center">
                          <img
                            v-lazy="'https://picsum.photos/100'"
                            alt=""
                            class="w-100"
                          />
                        </div>
                      </div>
                      <div class="col-md-9">
                        <b>Speaker Name</b>
                        <div class="text-muted">Position Title</div>
                        <p class="mb-0 text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                        <small class="pointer text-info"
                          >More info

                          <vue-feather
                            type="arrow-right"
                            size="16"
                            class="float-end mt-2"
                          ></vue-feather>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="" v-if="modal == 'speakerDetail'">
            <div class="vue-modal vue-modal-lg">
              <div class="row">
                <div class="col-md-3">
                  <img
                    v-lazy="'https://picsum.photos/300'"
                    alt=""
                    class="w-100"
                  />
                </div>
                <div class="col-md-9">
                  <b>Speaker Name</b>
                  <div class="text-muted">Position Name</div>
                  <p class="mb-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem labore rem quaerat odit, sit, dolores aut itaque
                    dolor voluptas perspiciatis nulla ducimus. Omnis rem quaerat
                    eveniet molestiae reprehenderit quo rerum!
                  </p>
                </div>
              </div>
            </div>
            <div class="vue-modal-overlay" @click="modal = ''"></div>
          </div>

          <div class="col-md-12 mt-3">
            <h6>Partner List</h6>
            <div class="row row-cols-6 row-cols-2">
              <div class="col" v-for="i in 4" :key="i">
                <div class="card border-0 shadow">
                  <div class="card-body text-center">
                    <img v-lazy="'https://picsum.photos/100'" alt="" />
                    <b class="d-block mt-2">Partner Name</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <v-participants></v-participants>
          </div>
        </div>
      </div>
    </transition>

    <!-- Edit  -->
    <transition name="fade">
      <div class="card-white" v-if="menus.submenu == 'edit'">
        <v-edit></v-edit>
      </div>
    </transition>
  </div>
</template>

<script>
import AddEvent from "@/components/admin/event/add";
import EditEvent from "@/components/admin/event/edit";
import Participants from "@/components/admin/event/participants";

export default {
  name: "eventDetail",
  props: {
    menus: Object,
  },
  components: {
    "v-add": AddEvent,
    "v-edit": EditEvent,
    "v-participants": Participants,
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style scoped>
.form-control {
  box-shadow: none !important;
}
</style>