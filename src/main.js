import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '@popperjs/core'
import './assets/css/style.css'
import './assets/css/transition.css'
import './assets/css/modal.css'
import './assets/css/form.css'
import './assets/css/navbar.css'
import './assets/css/tabs.css'
import './assets/css/pagination.css'
import './assets/css/alert.css'
import './assets/css/tooltip.css'
import 'vue-multiselect/dist/vue-multiselect.css'
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
import { customText } from './assets/js/customText'
import Youtube from 'vue3-youtube'
import Popper from 'vue3-popper'
import Pagination from './components/library/pagination'



import '../src/assets/js/axios'


const VueTelInputOptions = {
    mode: "international",
    onlyCountries: ['ID', 'SG', "GB", "US", "CA", "MY"]
}

const url = 'https://services.all-inedu.com/api/v1/'
const base_url = 'https://services.all-inedu.com/'
const adminToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMWFhMDU2MjJjZTViNDdlZWZlNzExYjNkYzNjYzFiMTFjZDI2ZGRlMzU0NTJhOGZmYzIyY2VmYTQ0NTIyN2NlYzM4YjEwZDhhNTM3ZTdlOTQiLCJpYXQiOjE2NDk4MzUzNTkuNjk2ODczLCJuYmYiOjE2NDk4MzUzNTkuNjk2ODc4LCJleHAiOjE2NTA0NDAxNTkuNjk0MDQyLCJzdWIiOiIxIiwic2NvcGVzIjpbImFkbWluIl19.mmEg_tQgANX9zPYts0YXPrYcWIP2PE82nAJgcP3iQ5bcv1_CxwGzAFrZh_SD0jF3Mnuc0b3uFLpORRq20V9WDNBUqEm7PuSFwYVncFrGgJIhqXU4n08sDWjtvlwx9Vc-jXT4G5oVV4C0kbA-8iL3QBz3NnbuUn39XB-gOzniZhODTvD-l3TerhNYFsMfOlQVxkSYg0-UxuL9wGGQ2VTl6Z0eyNZOvI5RG9E8K-zRNR82n34lcYX9wxpUmE--4-ZZZrlS9d6iL62LOlT03p8LvjsyXqBFWOmQjc6vPIin3cWkQ3vVJw0JLOo6fv9fUxkZWDRDhFwsQioYKK7ot7e_fvRw7hor6IMwnJT_GHNTnv-_klJd4HgeRqJVm3jNBrlNwphv0F20937VN4arkAj0Z4dc2X8vQSLPc3eN2T3R-uomfcqYMcsnL5nMnXH4x6Y16u-9gRNC0jVrr2IxpLEE2qxw0GzxnsbB0MyE3h4gqSO8w5u6OXkdHkoRdUJhXbSST3R4VqAJufho6eZSpz3zE1Zc8XEVdjpz_NaW6PqwOmtuKebLgeQUY8G5yrvQYgM-P6rEvsoFvSRPtP2De3jAzng7mQZ5jokjaoHr3D_VrgE0ujjZEs4snnUOBppoFqf8_FWnS4f-zhBiW3Q09k3Uzf2jruWn_VQI3QxmIBnwSTk';

// import sessionStorage from 'sessionstorage'



const app = createApp(App)
app.use(router)
app.use(VueTelInput, VueTelInputOptions)
app.use(VueSplide)
app.use(VueLazyLoad)
app.component('datepicker', Datepicker)
app.component(VueFeather.name, VueFeather)
app.component('v-datepicker', Datetimepicker)
app.component('v-tooltip', Popper)
app.component('v-youtube', Youtube)
app.component('v-pagination', Pagination)
app.config.globalProperties.$base_url = base_url
app.config.globalProperties.$url = url
app.config.globalProperties.$adminToken = adminToken
app.config.globalProperties.$axios = axios
app.config.globalProperties.$alert = alert
app.config.globalProperties.$customDate = customDate
app.config.globalProperties.$customText = customText
app.mount('#app')
