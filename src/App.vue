<script>
import axios from "axios";
import ProjectItem from "./components/ProjectItem.vue";

export default {
  components: {
    ProjectItem,
  },

  data() {
    return {};
  },

  methods: {},

  mounted() {},
};
</script>

<template>
  <div class="container py-5">
    <router-view></router-view>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>
