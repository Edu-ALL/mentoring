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
const mentorToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNGFjYjk2YWNmMzJjMTg3YWRlNTZiYWFiMGQwZjNkNGE2MGM4ZWY0MTQzNGFkYTY5M2M1YTFlMmZkYWVmM2Q3MDBlYmEwZWM1N2ViNDhjMWIiLCJpYXQiOjE2NDk5MTA0NTIuNTAwMjcyLCJuYmYiOjE2NDk5MTA0NTIuNTAwMjc1LCJleHAiOjE2NTA1MTUyNTIuNDk1MDIsInN1YiI6IjIiLCJzY29wZXMiOlsibWVudG9yIl19.N43X00adKzII2RnHzAgFgEKNT7gu5ryWCMNMHRn9t8vhY1Z2pspzN7bBpie-_n3tmLhx0ZKK72SW1USY1hpSjjfMLECjb801kgqPSuuNqmBj6gbtHzF2jz2FXumkiDdAt3O4BsTUmL0wmaYuEdheygw4GDHra5E8PpAUwhBDxMpt0pM7mCRNUGzMDgeipozrZOihJ7amu805Pobg-7eqCdlS9JovpSTZPh4qyRZPXjX0kjQFPcLWQtxzmIcHHoM01313FUWwYApl2eamlS7xxL4azwztUs72dTiSuDIRkti89rFX6tRpqVMmoIwmLoq0BCUDMMLWoEg0UJud4CpcdAvFwHrJ_6hORiobN35RGC05ccDFBcnMBjxyieScGAvWWXo2jJj2tzvIl6iAxUYasaN4iJeq0_kUBdXEyZrj9C4Br46y8_Woyia694Cia1j99UYRfnVq0q6Un8xelUNrVqQDIX06D-w7T85-h1zxwciGYkbq7gWnuHacpvZQP3hPm4CLg5120GE2mwr2ewwtmlxw60lFKpLaYUdEm40okXL8EE_BXCKkyZxAlc7C-U_i72UZhQ8zyemA4gjXXytc1EzZJOM8GUJIaxT0D-c_W6QPXwHkIK_Q5kWUdHIXda6oEkcrUGkgxBRjOOeGG32MK1y3Qzncf5lpTEaZQEfDHII';
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
app.config.globalProperties.$mentorToken = mentorToken
app.config.globalProperties.$axios = axios
app.config.globalProperties.$alert = alert
app.config.globalProperties.$customDate = customDate
app.mount('#app')
