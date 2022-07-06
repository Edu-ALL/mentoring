<template>
  <div id="uniShortlisted">
    <div class="border p-3 rounded mt-3">
      <div class="row row-cols-md-4 row-cols-1">
        <!-- Waitlisted  -->
        <div class="col">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">Waitlisted</h6>
          </div>

          <div class="d-flex">
            <draggable
              v-model="list.item_1"
              group="uniList"
              tag="waitlisted"
              @start="drag = true"
              @end="drag = false"
              @add="newLog"
              item-key="name"
            >
              <template #item="{ element }">
                <div>{{ element }}</div>
              </template>
            </draggable>

            <draggable
              v-model="list.item_2"
              group="uniList"
              tag="applied"
              @start="drag = true"
              @end="drag = false"
              item-key="name"
              @add="newLog"
            >
              <template #item="{ element }">
                <div>{{ element.name }}</div>
              </template>
            </draggable>
          </div>
        </div>

        <!-- Waitlisted  -->
        <div class="col">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">Applied</h6>
          </div>
        </div>

        <!-- Waitlisted  -->
        <div class="col">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">Accepted</h6>
          </div>
        </div>

        <!-- Waitlisted  -->
        <div class="col">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">Rejected</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "uniShortlisted",
  components: {
    draggable,
  },
  data() {
    return {
      drag: false,
      list: {
        item_1: [
          {
            name: "test1",
          },
          {
            name: "test2",
          },
          {
            name: "test3",
          },
          {
            name: "test4",
          },
        ],
        item_2: [
          {
            name: "test1",
          },
          {
            name: "test2",
          },
        ],
      },
    };
  },
  methods: {
    newLog(e) {
      console.log(e.target);
    },
  },
};
</script>
