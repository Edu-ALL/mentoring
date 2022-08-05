<template>
  <div id="pagination">
    <nav class="mt-2" v-if="datas.from != null">
      <ul class="pagination justify-content-center">
        <li class="page-item" v-if="datas.current_page != 1">
          <a class="page-link" @click="getResult(datas.prev_page_url)">
            <i class="fa-solid fa-chevron-left"></i>
          </a>
        </li>
        <div v-for="(i, index) in datas.last_page" :key="index">
          <li
            class="page-item"
            v-if="datas.current_page - 2 < i && datas.current_page + 2 > i"
          >
            <a
              class="page-link"
              :class="datas.current_page == i ? 'bg-primary text-white' : ''"
              href="#"
              @click="
                getResult(
                  datas.current_page < i
                    ? datas.next_page_url
                    : datas.prev_page_url
                )
              "
            >
              {{ i }}
            </a>
          </li>
        </div>
        <li class="page-item" v-if="datas.current_page != datas.last_page">
          <a class="page-link" @click="getResult(datas.next_page_url)">
            <i class="fa-solid fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "pagination",
  props: {
    datas: Object,
  },
  methods: {
    getResult(link) {
      this.$emit("result", link);
    },
  },
};
</script>

<style>
</style>