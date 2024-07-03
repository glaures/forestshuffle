import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import './assets/custom.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import i18n from "@/i18n/i18n.js";

import App from './App.vue'
import router from './router'

import VueGtag from "vue-gtag";

import { library } from '@fortawesome/fontawesome-svg-core'
import {faCircleMinus, faCirclePlus, faWindowClose} from '@fortawesome/free-solid-svg-icons'
library.add(faCircleMinus)
library.add(faCirclePlus)
library.add(faWindowClose)
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)
app.use(VueGtag, {
    config: { id: (import.meta.env.MODE === 'production') ? "G-KFWTPR47EN" : "G-TWE679TCG0"}
})

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
