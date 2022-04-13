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
import './assets/css/alert.css'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import 'vue3-date-time-picker/dist/main.css'


import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'
import Datepicker from "vue3-datepicker";
import VueFeather from 'vue-feather';
import VueSplide from '@splidejs/vue-splide';
import VueLazyLoad from 'vue3-lazyload'
import Datetimepicker from 'vue3-date-time-picker';
import axios from 'axios'
import { alert } from './assets/js/alert'
import { customDate } from './assets/js/customDate'

const VueTelInputOptions = {
    mode: "international",
    onlyCountries: ['ID', 'SG', "GB", "US", "CA", "MY"]
}

const url = 'https://services.all-inedu.com/api/v1/'
const base_url = 'https://services.all-inedu.com/'
const adminToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiM2RjYjgzNDFmY2JmMDAxMzZkN2VlNmE1YTU1ZTYzZTViNzY4OTU3YmZlNzU0ZDY0OWQwMGY2ZmExODNhYjFkMTU1YzBhZGQzZTkxMjEwYTMiLCJpYXQiOjE2NDk4MTgwMjYuNDk0MDk3LCJuYmYiOjE2NDk4MTgwMjYuNDk0MTAxLCJleHAiOjE2NTA0MjI4MjYuNDkwODg4LCJzdWIiOiIxIiwic2NvcGVzIjpbImFkbWluIl19.cnm1zLUgsC2yQgAW6DQwrsUz8bYxAxiOWDXSQaFTsv71gYLs5YjGzfL-Bnm6LtEUU4faOt7nAJKf5UWZO3Vc5J3TI3Gm9pKOiWWz32xJigSPm-EciTAUUx1h76s7JKa35rD6x4gk7G7z-FWvE4MUWVHE8EpQpXH8MvYQA8vojibyahUXOVWqsDDj2Nj6a01ie9_2tBNEh3r8egjI9SizGlGv67QSgYfJ2smic1f-VelEmdKBssiTVusmG7R5ZYZzBa4O3nlcAg8-XFx67mhJE9MhiAaQbpIOjsGtr5mDndr-fOgxlSStxlqFBBNsus8kRLpjYS8FfJlP5v_INbAfXSnOiq1nhl2hP9yTDu-5EtO78YniXXbUWK0qsP_3C4xIMci-8CnzqAR9mjbQZWz_pPWL7QYC63VsJDgEB9ez7WdEHaB5hW3Iu-_DAvHsJ2ep2CSYHv1G8Cauq9ls256VFqtYe487N7NES_y87ZqyggkWTKTaob28SgC56jBmy-MvXzXSPwgtrSRLBW-eBplPuuIx7o1a73OPinROigiQJdNNxXWP7Q6z78j69X00Jx5a7jb8DTCDGt62_UEOr8CLmhiWr9W91bzCTN9zpUobgk95u8QdNdwBnCFEhaOVOANBj21khyBI915BWpaHKAO21Ui9r61U_ncEpWz3orDJF5o';

// import sessionStorage from 'sessionstorage'

const app = createApp(App)
app.use(router)
app.use(VueTelInput, VueTelInputOptions)
app.component('datepicker', Datepicker)
app.component(VueFeather.name, VueFeather)
app.component('v-datepicker', Datetimepicker)
app.use(VueSplide)
app.use(VueLazyLoad)
app.config.globalProperties.$base_url = base_url
app.config.globalProperties.$url = url
app.config.globalProperties.$adminToken = adminToken
app.config.globalProperties.$axios = axios
app.config.globalProperties.$alert = alert
app.config.globalProperties.$customDate = customDate
app.mount('#app')
