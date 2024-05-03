<script>
import axios from 'axios'

export default {
    // name of the page
    name: "ContactForm",

    data() {
        return {
            formData: {
                name: '',
                address: '',
                message: '',
            },
        };
    },

    methods: {

        sendRequest(){
            axios.post('http://127.0.0.1:8000/api/new-contact', this.formData).then(res => {
                console.log('Risposta API:', res)
            })
        }

    },

};
</script>

<template>

    <form @submit.prevent="sendRequest()">
        
        <div class="mb-3">
            <label for="name" class="form-label">Nome</label>
            <input type="text" class="form-control" id="name" v-model="formData.name">
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="formData.address">
            <div id="emailHelp" class="form-text">Non condivideremo mai la tua mail con terzi</div>
        </div>

        <div class="mb-3">
            <label class="form-label" for="message">Messaggio</label>
            <textarea class="form-control" name="message" id="message" v-model="formData.message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Invia</button>

    </form>

</template>

<style lang="scss" scoped>

    textarea {
        height: 200px;
    }

</style>