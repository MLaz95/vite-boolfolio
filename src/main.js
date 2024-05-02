import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { router } from "./router.js";

// import the package
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
import "vue-awesome-paginate/dist/style.css";

import * as bootstrap from "bootstrap";
createApp(App).use(router).use(VueAwesomePaginate).mount("#app");
