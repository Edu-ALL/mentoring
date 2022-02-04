import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core'
import './assets/css/style.css'
import './assets/css/transition.css'
import './assets/css/modal.css'
import './assets/css/form.css'
import './assets/css/navbar.css'
import './assets/css/tabs.css'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import 'vue3-date-time-picker/dist/main.css'


import 'axios'
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'
import Datepicker from "vue3-datepicker";
import VueFeather from 'vue-feather';
import VueSplide from '@splidejs/vue-splide';
import VueLazyLoad from 'vue3-lazyload'
import Datetimepicker from 'vue3-date-time-picker';

const VueTelInputOptions = {
    mode: "international",
    onlyCountries: ['ID', 'SG', "GB", "US", "CA", "MY"]
}
// import sessionStorage from 'sessionstorage'

const app = createApp(App)
app.use(router)
app.use(VueTelInput, VueTelInputOptions)
app.use(Datepicker)
app.component(VueFeather.name, VueFeather);
app.component('v-datepicker', Datetimepicker)
app.use(VueSplide)
app.use(VueLazyLoad)
app.mount('#app')
