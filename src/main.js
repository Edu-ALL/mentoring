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
import './assets/css/pagination.css'
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

const url = 'https://services.all-inedu.com/api/v1/'
const adminToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOGY4NDhkZThlYmYyZTg4YjMyZGMzZmEyY2M3OWI5ZDE4ZTY3ZGQzMTQ1ZTlkMTJjZTMwNzk5YzhjMjgwM2E0OTEzOTMwNzMwMzkzZDE1YmQiLCJpYXQiOjE2NDc5MTY3MDQuMTk2OTgsIm5iZiI6MTY0NzkxNjcwNC4xOTY5ODQsImV4cCI6MTY0ODUyMTUwNC4xOTU0MTcsInN1YiI6IjEiLCJzY29wZXMiOlsiYWRtaW4iXX0.QorG8V-DLJ_htsRgRT3B4SsEB4AAz_PwrasyVJSUT6POGqQzBeh1fX_m0dKxZiGwmj7be64lMP2Nwp-ygRRcXyz6Br6egwrk9aCJvjDAm6y5fz1Jm2M2EE1j2qGCuXkk3CQxjblONwnVzvKKuSpScmv50HXeEsVSZxQhJqslOqweKyHoMdtIEUeM6iSwNApUH9wYKuc3zkM43SE59C8IHi_ocoYcor1RukitIQA6fDHpH1SBg7P8RiakxEgKYD9-r0tGtaAxeRG1ddUaIthCqjEvYnjoxkECkAWOiuTkUpzf6vDXlJ4XQ0idD7DLltA1EWqTJXrcDj02AGB6HK7O4aDI-LHEwC_lOE7u-BwmnSjhWN7-5FDDT1JbXC1g6qZvKZ_v6jjrkMx9HSKWHjxSOMnLP4eCbDb_yclxVo7RBDKRhGOX7VzfqF-qdVDf0f0QK85WbKOo7-jWaNGRCCf51P8p0Dz5bDk3XgXMnJX_cRYWPIJoLieUWGw4OFT1iPNE8EWqg4TwsL2Fo3qOdmxwUJVsxUhGAHtYkn7oSfdo7DOPeOQXCKUSaDmroAm-vpCFq_LlFeSQi7aqKYQ6bbx2b7ppbF6tERWsy_fo5Ut2esrVRqVj6IuGjycq7BIytTMvN5x6eu8-ttEaqNH_w5n1Vn100U7KM7PrkzlLr73psqQ';

// import sessionStorage from 'sessionstorage'

const app = createApp(App)
app.use(router)
app.use(VueTelInput, VueTelInputOptions)
app.component('datepicker', Datepicker)
app.component(VueFeather.name, VueFeather)
app.component('v-datepicker', Datetimepicker)
app.use(VueSplide)
app.use(VueLazyLoad)
app.config.globalProperties.$url = url
app.config.globalProperties.$adminToken = adminToken
app.mount('#app')
