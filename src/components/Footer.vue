<script>
export default {
    // name of the page
    name: "Footer",

    data() {
        return {

        };
    },

    methods: {

    },
    mounted() {

    },
};
</script>

<template>
    <footer>
        <div class="container d-flex justify-content-between align-items-center h-100">
            <div class="d-flex align-items-center">
                <div class="me-3 d-none d-md-block">Realized by:</div>
                <ul class="d-flex align-items-center">
                    <li><a href="#!">Emanuele Pogliari</a></li>
                    <li><a href="#!">Federico Viganò</a></li>
                    <li><a href="#!">Marco Lazzari</a></li>
                    <li><router-link :to="{name: 'contact-us'}">Contattaci</router-link></li>
                </ul>
            </div>

            <div>
                <ul class="d-flex align-items-center">
                    <li><a href="#!"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="#!"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#!"><i class="fa-brands fa-facebook"></i></a></li>
                </ul>
                
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
footer {
    height: 100px;
    // test
    background-image: linear-gradient(transparent, black);

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            cursor: pointer;
            padding: 0.5rem;
            transition: background-color 0.3s;

            &:hover {
                background-color: rgba($color: #FFFFFF, $alpha: 0.2);
            }

            a{
                text-decoration: none;
                color: white;
            }
        }
    }
}
</style>
