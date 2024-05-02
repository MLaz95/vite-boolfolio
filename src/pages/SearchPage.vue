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

      per_page: "",

      last_page: "",

      total_items: "",
    };
  },

  methods: {

  },

  mounted() {
    this.query = this.$route.params.query;

    axios.get(this.baseApiUrl + "projects/search/" + this.query).then((res) => {
      console.log(res);
      this.projects = res.data.results;
    });

    console.log(this.$route.params)
  },

};
</script>

<template>
  <h1 class="mb-5 text-center">Projects</h1>

  <div class="row row-gap-4">
    <ProjectItem v-for="project in projects.data" :project="project">
    </ProjectItem>
  </div>

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
</template>

<style lang="scss">
.btn-vue {
  height: 40px;
  width: 40px;
  border: none;
  margin-inline: 5px;
  cursor: pointer;
}
.back-btn {
  background-color: red;
}
.next-btn {
  background-color: red;
}
.btn-active {
  background-color: blue;
  color: white;
}
</style>
