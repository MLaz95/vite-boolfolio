<script>
import axios from "axios";

import ProjectItem from "../components/ProjectItem.vue";
export default {
  // name of the page
  name: "HomePage",

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

  methods: {
    apiCall() {
      axios
        .get(this.baseApiUrl + "projects", {
          params: {
            // sets current page as parameter, by default it's 1
            page: this.apiPageNumber,
          },
        })
        .then((res) => {
          console.log(res.data.results);
          this.projects = res.data.results;
          this.apiLinks = res.data.results.links;
          this.per_page = res.data.results.per_page;
          this.last_page = res.data.results.last_page;
          this.total_items = res.data.results.total;
        });
    },

    changePage(pageNumber) {
      // previous page
      if (pageNumber === "Prev" && this.apiPageNumber > 1) {
        this.apiPageNumber--;
      }
      // next page
      if (
        pageNumber === "Next" &&
        this.apiPageNumber < this.projects.last_page
      ) {
        this.apiPageNumber++;
      }
      // specific page
      if (!isNaN(pageNumber)) {
        this.apiPageNumber = parseInt(pageNumber); // Converti in numero intero
      }

      console.log(this.apiPageNumber);
      this.apiCall();
    },
  },
  mounted() {
    this.apiCall();
  },
};
</script>

<template>
  <div class="row row-gap-5 mb-5">
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

.pagination-container {
  align-items: center;
  .btn-vue {
    height: 40px;
    width: 40px;
    border: none;
    margin-inline: 5px;
    cursor: pointer;
    border-radius: 10px;
    background-color: $primaryColor;
  }

  .btn-vue:hover {
    background-color: white;
    color: black;
  }
  .back-button,
  .next-button {
    background-color: $tertiaryColor;
    height: 50px;
    width: 50px;
  }
  .btn-active {
    background-color: $quaternaryColor;
    color: white;
  }
}
</style>
