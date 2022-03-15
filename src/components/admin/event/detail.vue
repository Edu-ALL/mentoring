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
        <h5>Add a New Event</h5>
        <hr />
        <transition name="fade">
          <div class="step-1" v-if="step == 1">
            <div class="row">
              <div class="col-md-12">
                <input
                  type="text"
                  class="form-control form-mentoring mb-3"
                  placeholder="Event Name"
                />
              </div>
              <div class="col-md-4">
                <select class="form-control form-mentoring mb-3">
                  <option value="">Career Bootcamp</option>
                  <option value="">University Application Bootcamp</option>
                  <option value="">Competition Program</option>
                  <option value="">ALL-in Program</option>
                </select>
              </div>
              <div class="col-md-4">
                <input
                  type="text"
                  class="form-control form-mentoring mb-3"
                  placeholder="Price"
                />
              </div>
              <div class="col-md-4">
                <input
                  type="text"
                  class="form-control form-mentoring mb-3"
                  placeholder="Discount"
                />
              </div>
              <div class="col-md-12">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  class="form-control form-mentoring mb-3"
                ></textarea>
              </div>

              <div class="col-md-12">
                <hr />
                <div class="float-end">
                  <button class="btn-mentoring btn-type-1" @click="step = 2">
                    Add Date & Time
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade">
          <div class="step-2" v-if="step == 2">
            <h6 class="text-muted mb-3">Add Date & Time</h6>
            <div class="row">
              <div class="col-md-5">
                <input
                  type="date"
                  class="form-control form-mentoring mb-3"
                  placeholder="Event Name"
                />
              </div>
              <div class="col-md-3">
                <input
                  type="time"
                  class="form-control form-mentoring mb-3"
                  placeholder="Event Name"
                />
              </div>
              <div class="col-md-3">
                <input
                  type="time"
                  class="form-control form-mentoring mb-3"
                  placeholder="Event Name"
                />
              </div>
              <div class="col-md-1 text-end">
                <button class="btn-mentoring btn-type-1">Save</button>
              </div>
              <div class="col-md-12 mt-3">
                <table class="table table-bordered">
                  <tr class="text-center" @click="modal = 'detailDate'">
                    <td width="5%">1</td>
                    <td>25 July 2022</td>
                    <td>10.00 WIB</td>
                    <td>14.00 WIB</td>
                  </tr>
                </table>
              </div>

              <div class="col-md-12">
                <hr />
                <div class="float-start">
                  <button class="btn-mentoring btn-type-2" @click="step = 1">
                    Back
                  </button>
                </div>
                <div class="float-end">
                  <button class="btn-mentoring btn-type-1" @click="step = 3">
                    Add Speaker
                  </button>
                </div>
              </div>
            </div>

            <transition name="fade">
              <div v-if="modal == 'detailDate'">
                <div class="vue-modal vue-modal-md">
                  <h5>Date & Time Detail</h5>
                  <hr />
                  <div class="row">
                    <div class="col-md-12">
                      <input
                        type="date"
                        class="form-control form-mentoring mb-3"
                        placeholder="Event Date"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="time"
                        class="form-control form-mentoring mb-3"
                        placeholder="Start Time"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="time"
                        class="form-control form-mentoring mb-3"
                        placeholder="End Time"
                      />
                    </div>
                    <div class="col-md-12">
                      <hr />
                      <div class="float-start">
                        <button class="btn-mentoring btn-type-2">Delete</button>
                      </div>
                      <div class="float-end">
                        <button class="btn-mentoring btn-type-1">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vue-modal-overlay" @click="modal = ''"></div>
              </div>
            </transition>
          </div>
        </transition>

        <transition name="fade">
          <div class="step-3" v-if="step == 3">
            <h6 class="text-muted mb-3">Add Speaker</h6>
            <div class="row">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control form-mentoring mb-3"
                  placeholder="Speaker Name"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control form-mentoring mb-3"
                  placeholder="Education/Position"
                />
              </div>
              <div class="col-md-12">
                <input
                  type="file"
                  class="form-control form-mentoring mb-3"
                  placeholder="Profile Picture"
                />
              </div>
              <div class="col-md-12">
                <textarea
                  name=""
                  id=""
                  class="form-control form-mentoring"
                  rows="5"
                ></textarea>
              </div>
              <div class="col-md-12 mt-3 text-end">
                <button class="btn-mentoring btn-type-1">Save</button>
              </div>
              <div class="col-md-12 mt-3">
                <table class="table table-bordered">
                  <tr class="text-center" @click="modal = 'detailSpeaker'">
                    <td width="5%">1</td>
                    <td>Full Name</td>
                    <td>Position</td>
                    <td>Description</td>
                    <td>Profile</td>
                  </tr>
                </table>
              </div>

              <div class="col-md-12">
                <hr />
                <div class="float-start">
                  <button class="btn-mentoring btn-type-2" @click="step = 2">
                    Add Date & Time
                  </button>
                </div>
                <div class="float-end">
                  <button class="btn-mentoring btn-type-1" @click="step = 4">
                    Add Partner
                  </button>
                </div>
              </div>
            </div>

            <transition name="fade">
              <div v-if="modal == 'detailSpeaker'">
                <div class="vue-modal vue-modal-md">
                  <h5>Speaker Detail</h5>
                  <hr />
                  <div class="row">
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control form-mentoring mb-3"
                        placeholder="Speaker Name"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control form-mentoring mb-3"
                        placeholder="Education/Position"
                      />
                    </div>
                    <div class="col-md-12">
                      <input
                        type="file"
                        class="form-control form-mentoring mb-3"
                        placeholder="Profile Picture"
                      />
                    </div>
                    <div class="col-md-12">
                      <textarea
                        name=""
                        id=""
                        class="form-control form-mentoring"
                        rows="5"
                      ></textarea>
                    </div>
                    <div class="col-md-12">
                      <hr />
                      <div class="float-start">
                        <button class="btn-mentoring btn-type-2">Delete</button>
                      </div>
                      <div class="float-end">
                        <button class="btn-mentoring btn-type-1">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vue-modal-overlay" @click="modal = ''"></div>
              </div>
            </transition>
          </div>
        </transition>

        <transition name="fade">
          <div class="step-4" v-if="step == 4">
            <h6 class="text-muted mb-3">Add Partner</h6>
            <div class="row">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control form-mentoring mb-3"
                  placeholder="Partner Name"
                />
              </div>
              <div class="col-md-5">
                <input type="file" class="form-control form-mentoring mb-3" />
              </div>

              <div class="col-md-1 text-end">
                <button class="btn-mentoring btn-type-1">Save</button>
              </div>

              <div class="col-md-12 mt-3">
                <table class="table table-bordered">
                  <tr class="text-center" @click="modal = 'detailPartner'">
                    <td width="5%">1</td>
                    <td>Partner Name</td>
                    <td>Logo</td>
                  </tr>
                </table>
              </div>

              <div class="col-md-12">
                <hr />
                <div class="float-start">
                  <button class="btn-mentoring btn-type-2" @click="step = 3">
                    Add Speaker
                  </button>
                </div>
                <div class="float-end">
                  <button class="btn-mentoring btn-type-1" @click="step = 1">
                    Finish
                  </button>
                </div>
              </div>
            </div>

            <transition name="fade">
              <div v-if="modal == 'detailPartner'">
                <div class="vue-modal vue-modal-md">
                  <h5>Partner Detail</h5>
                  <hr />
                  <div class="row">
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control form-mentoring mb-3"
                        placeholder="Partner Name"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="file"
                        class="form-control form-mentoring mb-3"
                      />
                    </div>

                    <div class="col-md-12">
                      <hr />
                      <div class="float-start">
                        <button class="btn-mentoring btn-type-2">Delete</button>
                      </div>
                      <div class="float-end">
                        <button class="btn-mentoring btn-type-1">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vue-modal-overlay" @click="modal = ''"></div>
              </div>
            </transition>
          </div>
        </transition>
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
      </div>
    </transition>

    <!-- Edit  -->
    <transition name="fade">
      <div class="card-white" v-if="menus.submenu == 'edit'">
        <h5>Edit Event</h5>
        <hr />
        <form action="">
          <div class="row">
            <div class="col-md-12">
              <input
                type="text"
                class="form-control form-mentoring mb-3"
                placeholder="Event Name"
              />
            </div>
            <div class="col-md-4">
              <select class="form-control form-mentoring mb-3">
                <option value="">Career Bootcamp</option>
                <option value="">University Application Bootcamp</option>
                <option value="">Competition Program</option>
                <option value="">ALL-in Program</option>
              </select>
            </div>
            <div class="col-md-4">
              <input
                type="text"
                class="form-control form-mentoring mb-3"
                placeholder="Price"
              />
            </div>
            <div class="col-md-4">
              <input
                type="text"
                class="form-control form-mentoring mb-3"
                placeholder="Discount"
              />
            </div>
            <div class="col-md-12">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                class="form-control form-mentoring mb-3"
              ></textarea>
            </div>

            <div class="col-md-12 my-2">
              <div class="float-end">
                <button class="btn-mentoring btn-type-1" @click="step = 2">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
        <hr />
        <div class="card border-0 shadow">
          <div class="card-body">
            <div class="row">
              <div class="col-md-4 mb-3">
                <div class="text-center">
                  <button
                    class="btn btn-sm btn-mentoring btn-primary mb-2"
                    @click="modal = 'addDateTime'"
                  >
                    Add Date & Time
                  </button>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr class="text-center">
                        <th>Date</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="i in 2"
                        :key="i"
                        class="text-center pointer"
                        @click="modal = 'editDateTime'"
                      >
                        <td>24 Maret 2022</td>
                        <td>09.00 - 13.00 WIB</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="" v-if="modal == 'addDateTime'">
                  <div class="vue-modal vue-modal-lg">
                    <div class="container">
                      <div class="row">
                        <h6>Add Date & Time</h6>
                        <hr />
                        <div class="col-md-5">
                          <input
                            type="date"
                            class="form-control form-mentoring mb-3"
                            placeholder="Event Name"
                          />
                        </div>
                        <div class="col-md-3">
                          <input
                            type="time"
                            class="form-control form-mentoring mb-3"
                            placeholder="Event Name"
                          />
                        </div>
                        <div class="col-md-3">
                          <input
                            type="time"
                            class="form-control form-mentoring mb-3"
                            placeholder="Event Name"
                          />
                        </div>
                        <div class="col-md-1 text-end">
                          <button class="btn-mentoring btn-type-1">Save</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="vue-modal-overlay" @click="modal = ''"></div>
                </div>

                <div class="" v-if="modal == 'editDateTime'">
                  <div class="vue-modal vue-modal-lg">
                    <div class="container">
                      <div class="row">
                        <h6>Edit Date & Time</h6>
                        <hr />
                        <div class="col-md-12">
                          <input
                            type="date"
                            class="form-control form-mentoring mb-3"
                            placeholder="Event Name"
                          />
                        </div>
                        <div class="col-md-6">
                          <input
                            type="time"
                            class="form-control form-mentoring mb-3"
                            placeholder="Event Name"
                          />
                        </div>
                        <div class="col-md-6">
                          <input
                            type="time"
                            class="form-control form-mentoring mb-3"
                            placeholder="Event Name"
                          />
                        </div>
                        <hr />
                        <div class="col-md-12">
                          <div class="float-start">
                            <button class="btn-mentoring btn-outline-danger">
                              Delete
                            </button>
                          </div>
                          <div class="float-end">
                            <button class="btn-mentoring btn-type-1">
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="vue-modal-overlay" @click="modal = ''"></div>
                </div>
              </div>

              <div class="col-md-4 mb-3">
                <div class="text-center">
                  <button
                    class="btn btn-sm btn-mentoring btn-primary mb-2"
                    @click="modal = 'addSpeaker'"
                  >
                    Add Speaker
                  </button>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr class="text-center">
                        <th>Speaker Name</th>
                        <th>Position</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="i in 2"
                        :key="i"
                        class="text-center pointer"
                        @click="modal = 'editSpeaker'"
                      >
                        <td>Full Name</td>
                        <td>Position Name</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="" v-if="modal == 'addSpeaker'">
                  <div class="vue-modal vue-modal-lg">
                    <div class="container">
                      <div class="row">
                        <h6>Add Speaker</h6>
                        <hr />
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control form-mentoring mb-3"
                            placeholder="Speaker Name"
                          />
                        </div>
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control form-mentoring mb-3"
                            placeholder="Education/Position"
                          />
                        </div>
                        <div class="col-md-12">
                          <input
                            type="file"
                            class="form-control form-mentoring mb-3"
                            placeholder="Profile Picture"
                          />
                        </div>
                        <div class="col-md-12">
                          <textarea
                            name=""
                            id=""
                            class="form-control form-mentoring"
                            rows="5"
                          ></textarea>
                        </div>
                        <div class="col-md-12">
                          <hr />
                          <div class="float-end">
                            <button class="btn-mentoring btn-type-1">
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="vue-modal-overlay" @click="modal = ''"></div>
                </div>

                <div class="" v-if="modal == 'editSpeaker'">
                  <div class="vue-modal vue-modal-lg">
                    <div class="container">
                      <div class="row">
                        <h6>Edit Speaker</h6>
                        <hr />
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control form-mentoring mb-3"
                            placeholder="Speaker Name"
                          />
                        </div>
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control form-mentoring mb-3"
                            placeholder="Education/Position"
                          />
                        </div>
                        <div class="col-md-12">
                          <input
                            type="file"
                            class="form-control form-mentoring mb-3"
                            placeholder="Profile Picture"
                          />
                        </div>
                        <div class="col-md-12">
                          <textarea
                            name=""
                            id=""
                            class="form-control form-mentoring"
                            rows="5"
                          ></textarea>
                        </div>
                        <div class="col-md-12">
                          <hr />
                          <div class="float-start">
                            <button class="btn-mentoring btn-type-2">
                              Delete
                            </button>
                          </div>
                          <div class="float-end">
                            <button class="btn-mentoring btn-type-1">
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="vue-modal-overlay" @click="modal = ''"></div>
                </div>
              </div>

              <div class="col-md-4 mb-3">
                <div class="text-center">
                  <button
                    class="btn btn-sm btn-mentoring btn-primary mb-2"
                    @click="modal = 'addPartner'"
                  >
                    Add Partner
                  </button>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr class="text-center">
                        <th>Partner Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="i in 2"
                        :key="i"
                        class="text-center pointer"
                        @click="modal = 'editPartner'"
                      >
                        <td>Partner Name</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="" v-if="modal == 'addPartner'">
                  <div class="vue-modal vue-modal-lg">
                    <div class="container">
                      <div class="row">
                        <h6>Add Partner</h6>
                        <hr />
                        <div class="col-md-5">
                          <input
                            type="text"
                            class="form-control form-mentoring mb-3"
                            placeholder="Partner Name"
                          />
                        </div>
                        <div class="col-md-5">
                          <input
                            type="file"
                            class="form-control form-mentoring mb-3"
                          />
                        </div>

                        <div class="col-md-2 text-end">
                          <button class="btn-mentoring btn-type-1">Save</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="vue-modal-overlay" @click="modal = ''"></div>
                </div>

                <div class="" v-if="modal == 'editPartner'">
                  <div class="vue-modal vue-modal-lg">
                    <div class="container">
                      <div class="row">
                        <h6>Edit Partner</h6>
                        <hr />
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control form-mentoring mb-3"
                            placeholder="Partner Name"
                          />
                        </div>
                        <div class="col-md-6">
                          <input
                            type="file"
                            class="form-control form-mentoring mb-3"
                          />
                        </div>

                        <div class="col-md-12">
                          <hr />
                          <div class="float-start">
                            <button class="btn-mentoring btn-outline-danger">
                              Delete
                            </button>
                          </div>
                          <div class="float-end">
                            <button class="btn-mentoring btn-type-1">
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="vue-modal-overlay" @click="modal = ''"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "eventDetail",
  props: {
    menus: Object,
  },
  data() {
    return {
      modal: "",
      step: 1,
    };
  },
  created() {},
};
</script>

<style scoped>
.form-control {
  box-shadow: none !important;
}
</style>