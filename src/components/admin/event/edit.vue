<template>
  <div id="editEvent">
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
                        <button class="btn-mentoring btn-type-1">Save</button>
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
                        <button class="btn-mentoring btn-type-1">Save</button>
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
</template>

<script>
export default {
  name: "editEvent",
  data() {
    return {
      step: 1,
      modal: "",
    };
  },
};
</script>

<style>
</style>