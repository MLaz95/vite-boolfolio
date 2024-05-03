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
      <div class="my_card card px-3 pt-3 h-100">

        <img
          v-if="project.cover"
          :src="'http://localhost:8000/storage/' + project.cover"
          :alt="'project ' + project.name + ' thumbnail'"
        />
        <img
          v-else
          src="/img/project-img-placeholder.jpg"
          :alt="'project ' + project.name + ' thumbnail'"
          class="rounded-1"
        />

        <h2 class="text-center py-4">
          {{ project.name }}
        </h2>

        <div class="details">
          <h3 class="text-center fs-5" v-if="project.type">
            Type: {{ project.type.title }}
          </h3>
          <!-- <div v-if="project.technologies">
              <span
                v-for="tech in project.technologies"
                class="badge rounded-pill text-black"
                >{{ tech.title }}</span
              >
            </div> -->
          <div
            v-if="project.technologies"
            class="d-flex justify-content-center pb-3 gap-2"
          >
            <img
              v-for="tech in project.technologies"
              :src="'/img/tech-logos/' + tech.title + '.png'"
              class="tech-thumb"
            />
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;

.my_card {
  transition: all 0.2s ease;
  background-color: transparent;
  color: white;
  border-color: $quaternaryColor;
  // border-radius: 0;

  &:hover {
    position: relative;
    background-color: $primaryColor;
    color: $quaternaryColor;
  }

  img {
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  .tech-thumb {
    height: 30px;
  }
}
</style>
