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
const base_url = 'https://services.all-inedu.com/api/v1/'
const adminToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZGRhM2NkM2ZmM2Q0M2JjMWQzMDg1MGQ4ZmNmMzE1OGE0NWJhYWFjNDQxM2U0N2M2NDVhMTJkYmIzMjFlYjBiNmIxMzVhM2MyNjNlZWRkYTIiLCJpYXQiOjE2NDkyMTIwNjEuOTQ5NjM0LCJuYmYiOjE2NDkyMTIwNjEuOTQ5NjM5LCJleHAiOjE2NDk4MTY4NjEuOTI1OTE4LCJzdWIiOiIxIiwic2NvcGVzIjpbImFkbWluIl19.PZhT_9ZS3M4CR4VlV10zluxjRRH5ci7l_Xf1HwE8-nI-uC5n8Gb3yFuef9gzibz4uKWbzarj9iVDBXXSkYzhjcXVP_RhCxCzLs-kNOjtUJ9lbQ5BHuOe22DUc6rb6zGRQ6e7wQJnzkXTAISt9S5YFpJOyvS0L47SI1Zj_d2vkup2D60XBWIVvdUbOyo_r_t_cw6SMmTEb28xKNPnD9TuWzTJEUNa-Yt5SaoUdYmNQqAHW59bbKRI4QqLuyI1bwoz9J7Az0jHIMRRXQopWB5fDrQR9SC8bQlrGrg0qBZO7vu2XiE-l3Uo71xBhlLYI94Re7X3dZpW1hrdJm6NRlo0tIupakQscgpRAkD5saUB7l4V-dWh7iwu2OUqxR7P6S4i2LV78QytaS9c2xPp0NFTjNFYS8VIPHwWH-WO-5ymeWWh8WKWplbZPGWXEh_ozu7ks3gDH9m8KvA5_YQ5rcBOLOWmlv_frWNWLrVjDctVBkaVzMD_rbSQIQtUEsiYjUgzQ58pm5U7veuu_iF1iZU1UwlPCiRuNxj3R0z6NyqwS8lsymDuVkEWNyBGXdBinzRkIxn4HEvVvre3F9_LSLyTpqN-aoEPom0Gxyz7ghsBw2NZ0pJ6_l-hRLhMjc2NWh0CIiJuhyMhgP6PyY4SkFd2LhiFAMF4AW0catqRKhAk-MY';

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
