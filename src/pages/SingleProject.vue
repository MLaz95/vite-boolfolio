<script>
import axios from "axios";

export default {
  name: "SingleProject",

  data() {
    return {
      project: null,
      projectSlug: null,

      baseApiUrl: "http://127.0.0.1:8000/api/",
    };
  },

  mounted() {
    this.projectSlug = this.$route.params.slug;

    axios.get(this.baseApiUrl + "projects/" + this.projectSlug).then((res) => {
      console.log(res);
      this.project = res.data.project;
    });
  },
};
</script>

<template>
  <div v-if="project">
    <h2>{{ project.name }}</h2>
    <p>{{ project.description }}</p>
    <img :src="'http://localhost:8000/storage/' + project.cover" alt="">
  </div>
</template>

<style></style>
