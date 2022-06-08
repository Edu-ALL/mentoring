<template>
  <div id="scores">
    <div class="req-header p-2 py-1">
      <i class="fa-solid fa-circle-xmark me-1 text-danger"></i>
      <i class="fa-solid fa-circle-check me-1 text-success"></i>
      IELTS/TOEFL Scores
      <div class="float-end">
        <i class="fa-solid fa-add pointer" @click="modal = 'add'"></i>
      </div>
    </div>
    <div class="req-body p-2">
      <div class="row row-cols-md-2 row-cols-1">
        <div class="col">
          <div class="text-center">TOEFL</div>
          <table class="table">
            <tr>
              <td>Reading</td>
              <td class="text-end">20</td>
            </tr>
            <tr>
              <td>Listening</td>
              <td class="text-end">20</td>
            </tr>
            <tr>
              <td>Speaking</td>
              <td class="text-end">20</td>
            </tr>
            <tr>
              <td>Writing</td>
              <td class="text-end">20</td>
            </tr>
            <tfoot>
              <tr>
                <td>Total Score</td>
                <td class="text-end">80</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="col">
          <div class="text-center">IELTS</div>
          <table class="table">
            <tr>
              <td>Reading</td>
              <td class="text-end">20</td>
            </tr>
            <tr>
              <td>Listening</td>
              <td class="text-end">20</td>
            </tr>
            <tr>
              <td>Speaking</td>
              <td class="text-end">20</td>
            </tr>
            <tr>
              <td>Writing</td>
              <td class="text-end">20</td>
            </tr>
            <tfoot>
              <tr>
                <td>Total Score</td>
                <td class="text-end">80</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
  <!-- Modal Document  -->
  <transition name="pop">
    <div class="vue-modal vue-modal-md" v-if="modal == 'add'">
      <div class="row">
        <div class="col-md-6">
          <h6>TOEFL Score</h6>
          <div class="mb-1">
            <label>Reading</label>
            <input
              type="number"
              name=""
              id=""
              max="30"
              class="form-mentoring form-control-sm w-100"
            />
          </div>
          <div class="mb-1">
            <label>Listening</label>
            <input
              type="number"
              name=""
              id=""
              max="30"
              class="form-mentoring form-control-sm w-100"
            />
          </div>
          <div class="mb-1">
            <label>Speaking</label>
            <input
              type="number"
              name=""
              id=""
              max="30"
              class="form-mentoring form-control-sm w-100"
            />
          </div>
          <div class="mb-1">
            <label>Writing</label>
            <input
              type="number"
              name=""
              id=""
              max="30"
              class="form-mentoring form-control-sm w-100"
            />
          </div>
        </div>
        <div class="col-md-6">
          <h6>IELTS Score</h6>
          <div class="mb-1">
            <label>Reading</label>
            <input
              type="number"
              name=""
              id=""
              max="9"
              class="form-mentoring form-control-sm w-100"
            />
          </div>
          <div class="mb-1">
            <label>Listening</label>
            <input
              type="number"
              name=""
              id=""
              max="9"
              class="form-mentoring form-control-sm w-100"
            />
          </div>
          <div class="mb-1">
            <label>Speaking</label>
            <input
              type="number"
              name=""
              id=""
              max="9"
              class="form-mentoring form-control-sm w-100"
            />
          </div>
          <div class="mb-1">
            <label>Writing</label>
            <input
              type="number"
              name=""
              id=""
              max="9"
              class="form-mentoring form-control-sm w-100"
            />
          </div>
        </div>
      </div>

      <div class="text-center mt-3">
        <button class="btn-mentoring btn-sm py-1 bg-primary">
          <i class="fa-solid fa-save me-2"></i>
          Save
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "links",
  data() {
    return {
      modal: "",
    };
  },
};
</script>

<style scoped>
label::after {
  content: "";
}

.score-card {
  display: block;
  width: 100%;
  height: 30px;
  text-align: center;
  background: blue;
}

.score-cat {
  display: flex;
  align-items: middle;
}

.score-card input {
  display: none;
}

input:checked {
  background: red;
}
</style>