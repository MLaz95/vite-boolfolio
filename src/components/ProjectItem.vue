<script>
export default {
  name: "ProjectItem",

  props: {
    project: Object,
  },
};
</script>

<template>
  <div class="card">
    <h2>
      {{ project.name }}
    </h2>
  </div>
</template>

<style scoped></style>
