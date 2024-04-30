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
      // links to different result pages
      apiLinks: [],
      // keeps track of current page
      apiPageNumber: 1,

      baseApiUrl: "http://127.0.0.1:8000/api/",
    };
  },

  methods: {
    apiCall() {
      axios.get(this.baseApiUrl + "projects", {
        params:{
          // sets current page as parameter, by default it's 1
          page: this.apiPageNumber
        }
      }).then((res) => {
        console.log(res.data.results);
        this.projects = res.data.results;
        this.apiLinks = res.data.results.links;
      });
    },

    changePage(pageNumber) {
      // previous page
      if(pageNumber.includes('Previous') && this.apiPageNumber > 1){
        this.apiPageNumber--
      }
      // next page
      if (pageNumber.includes('Next') && this.apiPageNumber < this.projects.last_page) {
        this.apiPageNumber++
      }
      // specific page
      if(!isNaN(pageNumber)){
        this.apiPageNumber = pageNumber;
      }
      
      console.log(this.apiPageNumber);
      this.apiCall();
    }

  },

  mounted() {
    this.apiCall();
  },
};
</script>

<template>
  <div class="container py-5">

    <h1 class="mb-5 text-center">
      Projects
    </h1>

    <div class="row row-gap-4">
      <ProjectItem 
        v-for="project in projects.data" 
        :project="project">
      </ProjectItem>
    </div>

    <div>
      <ul class="d-flex gap-3 py-5">
        <li v-for="link in apiLinks" v-html="link.label" @click="changePage(link.label)"></li>
      </ul>
    </div>
  </div>

</template>

<style scoped>
  ul{
    list-style: none;
  }
</style>
