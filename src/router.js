import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';

const router = createRouter ({

    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },

        {
            path: '/projects/:id',
            name: 'single-project',
            component: SingleProject
        },
    ]

})

export { router };