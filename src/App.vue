<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      changeColor: false,
      scrollPosition: null,
    };
  },

  methods: {},

  mounted() {},
};
</script>

<template>
  <Header></Header>
  <div class="container py-5">
    <router-view></router-view>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>
