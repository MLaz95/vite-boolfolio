<script>
export default {
  name: "ProjectItem",

  props: {
    project: Object,
  },
};
</script>

<template>
  <div class="col-6">
    <router-link
      :to="{ name: 'single-project', params: { slug: project.slug } }"
      class="text-decoration-none"
    >
      <div class="card h-100 px-3">
        <h2 class="text-center py-4">
          {{ project.name }}
        </h2>

        <div class="d-flex justify-content-between">
          <h3 v-if="project.type">{{ project.type.title }}</h3>
          <div v-if="project.technologies">
            <span
              v-for="tech in project.technologies"
              class="badge rounded-pill"
              >{{ tech.title }}</span
            >
          </div>
        </div>

        <div class="info text-center">
          <p>
            {{ project.description }}
          </p>

          <p>
            {{ project.github }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped></style>
