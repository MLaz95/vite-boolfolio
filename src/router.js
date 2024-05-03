import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import SingleProject from "./pages/SingleProject.vue";
import SearchPage from "./pages/SearchPage.vue";
import ContactUs from "./pages/ContactUs.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },

    {
      path: "/projects/:slug",
      name: "single-project",
      component: SingleProject,
    },

    {
      path: "/projects/search/:query",
      name: "search",
      component: SearchPage,
    },

    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs
    }

  ],
});

export { router };
