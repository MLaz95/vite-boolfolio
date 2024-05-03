<script>
import axios from "axios";

import ProjectItem from "../components/ProjectItem.vue";
export default {
  // name of the page
  name: "SearchPage",

  components: {
    ProjectItem,
  },

  data() {
    return {
      projects: [],
      // links to different result pages
      apiLinks: [],
      // keeps track of current page
      apiPageNumber: 1,

      baseApiUrl: "http://127.0.0.1:8000/api/",

      per_page: 1,

      last_page: 1,

      total_items: 1,
    };
  },

  methods: {},

  mounted() {
    this.query = this.$route.params.query;

    axios.get(this.baseApiUrl + "projects/search/" + this.query).then((res) => {
      console.log(res);
      this.projects = res.data.results;
    });

    console.log(this.$route.params);
  },
};
</script>

<template>
  <h1 class="mb-5 text-center">Projects</h1>

  <div class="row row-gap-4">
    <ProjectItem v-for="project in projects.data" :project="project">
    </ProjectItem>
  </div>

  <div class="pagination-container d-flex justify-content-center">
    <vue-awesome-paginate
      :total-items="total_items"
      v-model="apiPageNumber"
      :items-per-page="per_page"
      :max-pages-shown="last_page"
      :on-click="changePage"
      :hide-prev-next-when-ends="true"
      paginate-buttons-class="btn-vue"
      active-page-class="btn-active"
    />
  </div>
</template>

<style lang="scss">
@use "../styles/variables" as *;
</style>
