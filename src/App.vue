<script>
import axios from "axios";
import ProjectItem from "./components/ProjectItem.vue";

export default {
  components: {
    ProjectItem,
  },

  data() {
    return {
      projects: [],

      baseApiUrl: "http://127.0.0.1:8000/api/",
    };
  },

  methods: {
    apiCall() {
      axios.get(this.baseApiUrl + "projects", {}).then((res) => {
        console.log(res.data.results);
        this.projects = res.data.results;
      });
    },
  },

  mounted() {
    this.apiCall();
  },
};
</script>

<template>
  <div class="container py-5">
    <h1>Projects</h1>
    <ProjectItem v-for="project in projects" :project="project"></ProjectItem>
  </div>
</template>

<style scoped></style>
