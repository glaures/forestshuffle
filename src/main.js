import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import './assets/custom.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import i18n from "@/i18n/i18n.js";
import { createHead, VueHeadMixin } from '@unhead/vue'

import App from './App.vue'
import router from './router'

import VueGtag from "vue-gtag";

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faBars,
    faCaretLeft,
    faCaretUp,
    faCircleMinus,
    faCirclePlus, faEdit, faListOl, faUserPlus,
    faWindowClose
} from '@fortawesome/free-solid-svg-icons'
library.add(faCircleMinus)
library.add(faCirclePlus)
library.add(faWindowClose)
library.add(faCaretUp)
library.add(faCaretLeft)
library.add(faBars)
library.add(faEdit)
library.add(faUserPlus)
library.add(faListOl)
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

import './registerServiceWorker'

const app = createApp(App)

app.use(i18n)
const head = createHead()
app.use(head)
app.mixin(VueHeadMixin)
app.use(createPinia())
app.use(router)
app.use(VueGtag, {
    config: { id: (import.meta.env.MODE === 'production') ? "G-KFWTPR47EN" : "G-TWE679TCG0"}
})

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

