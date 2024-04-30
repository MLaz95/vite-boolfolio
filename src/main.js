import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { router } from './router.js';

createApp(App).use(router).mount('#app')
