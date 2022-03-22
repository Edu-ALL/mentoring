<template>
  <div id="add">
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
                  <input type="file" class="form-control form-mentoring mb-3" />
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
</template>

<script>
export default {
  name: "addEvent",
  data() {
    return {
      step: 1,
    };
  },
};
</script>

<style>
</style>