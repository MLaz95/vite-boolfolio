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
    <div class="container">
      <h2 class="text-center mb-5">
        Project: <span class="fw-bold">{{ project.name }}</span>
      </h2>

      <div class="text-center">
        <img
          v-if="project.cover"
          class="img-fluid mb-2"
          :src="'http://localhost:8000/storage/' + project.cover"
          :alt="'project ' + project.name + ' thumbnail'"
        />
        <img
          v-else
          class="img-fluid mb-2"
          src="/img/project-img-placeholder.jpg"
          :alt="'project ' + project.name + ' thumbnail'"
        />
        <table class="table w-100 mx-auto text-start">
          <tbody>
            <tr>
              <th scope="row" class="d-none d-md-table-cell text-nowrap">
                Description:
              </th>
              <td>
                <h5 class="d-block d-md-none">Description:</h5>
                <div class="ps-2 ps-md-0">{{ project.description }}</div>
              </td>
            </tr>
            <tr>
              <th scope="row" class="d-none d-md-table-cell text-nowrap">
                Project Type:
              </th>
              <td>
                <h5 class="d-block d-md-none">Project Type:</h5>
                <div class="ps-2 ps-md-0">
                  <span v-if="project.type">{{ project.type.title }}</span>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row" class="d-none d-md-table-cell text-nowrap">
                Technologies:
              </th>
              <td>
                <h5 class="d-block d-md-none">Technologies:</h5>
                <img
                  v-for="tech in project.technologies"
                  :src="'/img/tech-logos/' + tech.title + '.png'"
                  class="tech-thumb"
                />
              </td>
            </tr>
            <tr>
              <th scope="row" class="d-none d-md-table-cell text-nowrap">
                Github Link:
              </th>
              <td>
                <h5 class="d-block d-md-none">GitHub Links:</h5>
                <a class="text-white text-break" href="#">
                  <div class="ps-2 ps-md-0">{{ project.github }}</div>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;
.tech-thumb {
  height: 30px;
}
</style>
