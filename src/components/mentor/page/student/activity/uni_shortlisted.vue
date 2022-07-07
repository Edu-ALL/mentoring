<template>
  <div id="uniShortlisted">
    <div class="border p-3 rounded mt-3">
      <div class="row row-cols-md-4 row-cols-1">
        <!-- Waitlisted  -->
        <div class="col">
          <div class="card border-1 shadow-sm my-2 btn-outline-primary">
            <div class="card-body py-1 text-center">
              <i class="fa-solid fa-plus me-2"></i>
              Add a New University
            </div>
          </div>

          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">Waitlisted</h6>
          </div>

          <draggable
            v-model="list.item_1"
            group="uniList"
            class="dragArea list-group"
            tag="waitlisted"
            :component-data="{ status: 'waitlisted' }"
            @start="drag = true"
            @end="drag = false"
            :move="newLog"
            item-key="name"
          >
            <template #item="{ element }">
              <div
                class="card-uni border-1 shadow-sm px-3 py-2 mb-2 text-center"
              >
                <h6 class="my-0">{{ element.name }}</h6>
                <small>{{ element.major }}</small>
              </div>
            </template>
          </draggable>
        </div>

        <!-- Applied  -->
        <div class="col">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">Applied</h6>
          </div>

          <draggable
            v-model="list.item_2"
            group="uniList"
            class="dragArea list-group"
            tag="waitlisted"
            :component-data="{ status: 'applied' }"
            @start="drag = true"
            @end="drag = false"
            :move="newLog"
            item-key="name"
          >
            <template #item="{ element }">
              <div
                class="card-uni border-1 shadow-sm px-3 py-2 mb-2 text-center"
              >
                <h6 class="my-0">{{ element.name }}</h6>
                <small>{{ element.major }}</small>
              </div>
            </template>
          </draggable>
        </div>

        <!-- Accepted  -->
        <div class="col">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">Accepted</h6>
          </div>

          <draggable
            v-model="list.item_3"
            group="uniList"
            class="dragArea list-group"
            tag="waitlisted"
            :component-data="{ status: 'accepted' }"
            @start="drag = true"
            @end="drag = false"
            :move="newLog"
            item-key="name"
          >
            <template #item="{ element }">
              <div
                class="card-uni border-1 shadow-sm px-3 py-2 mb-2 text-center"
              >
                <h6 class="my-0">{{ element.name }}</h6>
                <small>{{ element.major }}</small>
              </div>
            </template>
          </draggable>
        </div>

        <!-- Rejected  -->
        <div class="col">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">Rejected</h6>
          </div>

          <draggable
            v-model="list.item_4"
            group="uniList"
            class="dragArea list-group"
            tag="waitlisted"
            :component-data="{ status: 'rejected' }"
            @start="drag = true"
            @end="drag = false"
            :move="newLog"
            item-key="name"
          >
            <template #item="{ element }">
              <div
                class="card-uni border-1 shadow-sm px-3 py-2 mb-2 text-center"
              >
                <h6 class="my-0">{{ element.name }}</h6>
                <small>{{ element.major }}</small>
              </div>
            </template>
          </draggable>
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
            id: 1,
            name: "University 13",
            major: "Major Name",
          },
          {
            id: 2,
            name: "University 2",
            major: "Major Name",
          },
          {
            id: 3,
            name: "University 1",
            major: "Major Name",
          },
          {
            id: 4,
            name: "University 3",
            major: "Major Name",
          },
        ],
        item_2: [
          {
            id: 5,
            name: "University 4",
            major: "Major Name",
          },
          {
            id: 6,
            name: "University 5",
            major: "Major Name",
          },
        ],
        item_3: [
          {
            id: 1,
            name: "University 7",
            major: "Major Name",
          },
          {
            id: 2,
            name: "University 6",
            major: "Major Name",
          },
          {
            id: 3,
            name: "University 8",
            major: "Major Name",
          },
          {
            id: 4,
            name: "University 9",
            major: "Major Name",
          },
        ],
        item_4: [
          {
            id: 1,
            name: "University 10",
            major: "Major Name",
          },
          {
            id: 2,
            name: "University 11",
            major: "Major Name",
          },
          {
            id: 3,
            name: "University 12",
            major: "Major Name",
          },
          {
            id: 4,
            name: "University 14",
            major: "Major Name",
          },
        ],
      },
    };
  },
  methods: {
    newLog(e) {
      console.log(e.relatedContext.component.componentData.status);
      console.log(e.draggedContext.element.id);
    },
  },
};
</script>
<style scoped>
.dragArea {
  min-height: 150px;
}

.card-uni {
  cursor: pointer;
  border: 1px solid #ededed;
}
</style>
