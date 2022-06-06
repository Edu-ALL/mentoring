<template>
  <div id="info" style="scroll-margin-top: 120px">
    <div class="heading">
      Personal Information

      <div class="float-end">
        <button
          class="btn-mentoring btn-sm bg-primary py-1"
          v-if="!edit"
          @click="edit = true"
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          class="btn-mentoring btn-sm btn-outline-danger py-1"
          v-if="edit"
          @click="edit = false"
        >
          <i class="fa-solid fa-x"></i>
        </button>
      </div>
    </div>
    <div class="desc">
      <div class="field">
        <div class="label">Full Name</div>
        <div class="data" v-if="!edit">Saeka Minami</div>
        <div class="row g-1" v-if="edit">
          <div class="col-6">
            <input
              type="text"
              name=""
              class="form-mentoring form-control-sm w-100"
              placeholder="First Name"
            />
          </div>
          <div class="col-6">
            <input
              type="text"
              name=""
              class="form-mentoring form-control-sm w-100"
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="data" v-if="!edit">saeka@gmail.com</div>
        <div class="" v-if="edit">
          <input
            type="text"
            name=""
            class="form-mentoring form-control-sm w-50"
            placeholder="E-mail"
          />
        </div>
      </div>

      <div class="field">
        <div class="label">Phone Number</div>
        <div class="data" v-if="!edit">+62 823-8323-2322</div>
        <div class="" v-if="edit">
          <input
            type="text"
            name=""
            class="form-mentoring form-control-sm w-50"
          />
        </div>
      </div>

      <div class="field">
        <div class="label">Address</div>
        <div class="data" v-if="!edit">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          nobis reiciendis delectus voluptates architecto porro soluta dolorum
          similique voluptate. Officia modi consequuntur laborum tempora fuga
          cupiditate, nam molestiae distinctio esse.
        </div>
        <div class="" v-if="edit">
          <textarea name="" class="form-mentoring w-100"></textarea>
        </div>
      </div>

      <div class="row" v-if="!edit">
        <div class="col-md-4">
          <div class="field">
            <div class="label">School Name</div>
            <div class="data">Bina Bangsa School</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="field">
            <div class="label">Grade</div>
            <div class="data">11</div>
          </div>
        </div>
      </div>
      <div class="row mb-3" v-if="edit">
        <div class="col">
          <hr />
          <div class="text-end">
            <button class="btn-mentoring btn-sm btn-outline-success py-1">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "personal-info",
  data() {
    return {
      edit: false,
    };
  },
};
</script>

<style>
</style>