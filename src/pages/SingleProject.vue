<script>
    import axios from 'axios';

    export default{
        name: 'SingleProject',

        data() {
            return{
                project: null,
                projectId: null,

                baseApiUrl: "http://127.0.0.1:8000/api/",
            }
        },

        mounted() {
            this.projectId = this.$route.params.id;

            axios.get(this.baseApiUrl + 'projects/' + this.projectId).then(res =>{
                console.log(res);
                this.project = res.data.project;
            })
        }
    }

</script>

<template>

    <div v-if="project">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
    </div>

</template>

<style></style>