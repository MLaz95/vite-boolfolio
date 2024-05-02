<script>
export default {
  name: "ProjectItem",

  props: {
    project: Object,
  },
};
</script>

<template>
  <div class="col-12 col-md-6 col-xl-3">
    <router-link
      :to="{ name: 'single-project', params: { slug: project.slug } }"
      class="text-decoration-none"
    >
      <div class="my_card card px-3 pt-3">
        <img
          v-if="project.cover"
          :src="'http://localhost:8000/storage/' + project.cover"
          :alt="'project ' + project.name + ' thumbnail'"
        />
        <img
          v-else
          src="/img/project-img-placeholder.jpg"
          :alt="'project ' + project.name + ' thumbnail'"
        />

        <h2 class="text-center py-4">
          {{ project.name }}
        </h2>

        <div class="details">
          <div class="d-flex justify-content-between">
            <h3 v-if="project.type">{{ project.type.title }}</h3>
            <div v-if="project.technologies">
              <span
                v-for="tech in project.technologies"
                class="badge rounded-pill text-black"
                >{{ tech.title }}</span
              >
            </div>
          </div>

          <div class="info text-center">
            <p>
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.my_card {
  transition: all 0.2s ease;

  &:hover {
    position: relative;
    transform: scale(1.05);
    background-color: white;
    color: black;
  }

  img {
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  .details {
    display: none;
  }

  &:hover .details {
    display: block;
  }
}
</style>
