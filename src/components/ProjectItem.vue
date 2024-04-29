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
        <div class="card">
          <h2 class="text-center py-4">
            Progetto: {{ project.name }}
          </h2>
        </div>
    </div>

</template>

<style scoped></style>
