import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/style.css'
import {createPinia} from "pinia";

createApp(App).use(store).use(createPinia()).use(router).mount('#app')
