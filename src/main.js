// CSS
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/custom.scss';

// create the app
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// Vue Router
import router from './router'
app.use(router)

// Pinia
import { createPinia } from 'pinia'
app.use(createPinia())

// Google Analytics
import VueGtag from "vue-gtag";
app.use(VueGtag, {
    config: { id: (import.meta.env.MODE === 'production') ? "G-KFWTPR47EN" : "G-TWE679TCG0"}
})

// Fontawesome
import FontAwesomeIcon from './utils/font-awesome.js';
app.component('font-awesome-icon', FontAwesomeIcon)

// i18n
import i18n from "@/i18n/i18n.js";
app.use(i18n)

// unhead
import { createHead, VueHeadMixin } from '@unhead/vue'
const head = createHead()
app.use(head)
app.mixin(VueHeadMixin)

// Toastification
import Toast, {POSITION} from "vue-toastification";
import "vue-toastification/dist/index.css";
import './registerServiceWorker'
const toastOptions = {
    position: POSITION.BOTTOM_RIGHT
};
app.use(Toast, toastOptions);

app.mount('#app')

