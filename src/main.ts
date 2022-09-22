import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/style.css'
import {createPinia} from "pinia";
import piniaPersist from 'pinia-plugin-persist'
const pinia = createPinia()

createApp(App).use(store).use(router).use(pinia).mount('#app')
