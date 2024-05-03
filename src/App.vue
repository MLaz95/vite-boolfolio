<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      changeColor: false,
      scrollPosition: null,
      currentQuery: "",
      currentQueryResults: null,
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
  <Footer></Footer>
</template>

<style lang="scss">
@use "styles/variables" as *;
ul {
  list-style: none;
}

body {
  background-color: $secondaryColor;
}
</style>
