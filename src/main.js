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


import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'
import Datepicker from "vue3-datepicker";
import VueFeather from 'vue-feather';
import VueSplide from '@splidejs/vue-splide';
import VueLazyLoad from 'vue3-lazyload'
import Datetimepicker from 'vue3-date-time-picker';
import axios from 'axios'

const VueTelInputOptions = {
    mode: "international",
    onlyCountries: ['ID', 'SG', "GB", "US", "CA", "MY"]
}

const url = 'https://services.all-inedu.com/api/v1/'
const adminToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTk3ZWUyODkwNzAyYjdkNzM2MThlMGQzYTg2ZWM1ODMxOTM0Njg3YmFmOTJhMjQ1YzVjZTFiMDdmOWI2YTgyMDcyMDljMWRlYTBmOWY5YjAiLCJpYXQiOjE2NDg2MDcwMjUuODUzMTIxLCJuYmYiOjE2NDg2MDcwMjUuODUzMTI0LCJleHAiOjE2NDkyMTE4MjUuODUxNTY5LCJzdWIiOiIxIiwic2NvcGVzIjpbImFkbWluIl19.AcwkU4teZFL5rMCAE6QB76x0M4OiZcfq8qoHb5tLl6MnLXdXdgnlbiHFSKPawNvaaH76tuFe_08Ac06oRDBcOtJKUOmTd-U-lJqIPKMNxFPnnBvomgzkk587zgBFWNUAB5PdMZJlCA-hDmMaEPqxpaiTC084aO-hMGzQmjVp9NzDXp34sOy_f9jZ8tTDtHoDJUpWi5iGE1J22HSOM46NoBrOawoKvSwsDD5J132th4NPBPiIu3zxYGm8cBpip6pLOTKQ61f6KMRvaOEmqwZ4-wO9XWiaeK_gmdAdKmqW7aKLeWG6FhROlDalw25NQnaV_tJK42zl1EUqWMmcm-HFk8x6miW_WbvB-kxRqaM0FMH2Z6TJA2IrXrrtjPKWtIJv-QZCKFIZRYoCgsQ6GY8qLIsBLNEz1nbGIWSJfvbVDYS5fhY07KPTvpuVJAtpxmtF24_QYKIfUPolRbXvC7l7WiI0Xdnd_U7WVoKtmphGU9ipn-6WiZyH9Kg_9Om8lKN8aZ4r62pTTx_dZ-Je59jb6Ic2ktjUt5FZTqhGwn-DJUM8F9G4ffcY4wCOe_nwELv3pyyA56bgGf2KsEI2RZHCbglhmjjhbZWCgXAUI6i2EdIMPNWC8IVzYhG7heaMi_0Na3kMzogeeMjIxutUBDc-r2ky_63oDyt9Ey6RKzSri3Q';

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
app.config.globalProperties.$axios = axios
app.mount('#app')
