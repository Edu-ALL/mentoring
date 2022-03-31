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
const adminToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNWNmODk5NDViM2M1ZDRjZjVjYjZiOWRjYzU2YjA5MWE4N2NkMmFlMzM3ZjUzOGFlYjMxYTdmYzRhM2ZkZTFjMTE2OTc0OTk2ZWVmODhlN2QiLCJpYXQiOjE2NDg1NDA1NjIuMzU5MzksIm5iZiI6MTY0ODU0MDU2Mi4zNTk0MDQsImV4cCI6MTY0OTE0NTM2Mi4zNDc3NDEsInN1YiI6IjEiLCJzY29wZXMiOlsiYWRtaW4iXX0.J2Zt7PK90vdGUAV0fvqV_mBk_evrP2ssHvo2iTcWuTTrlPcoUBQtBqTylzT3QfPgdCIf-lC89lSLbrJn2kAQF4FU_QYAzORSHn1n9xPiGCHiqpDQm5KllEV8yoKgYcMl-yjoAKf405j1TzQO_SUmPj1bHkvXqQSys0-ImE4NjBFUK_hD1x2Ni_Vl7_ObI9O96yZGffe4s0QH86OuC9dJBnXSOEYz4ZWMH3KnZERFdeu4HJgFNmRIS2yHY2WND6v0PqJ0bDULoq_WaaL-WJXEuuSxBiQsUJHRmQbkFwmYEEyGYavgPJYxvzSLDCGsQuDctYA1CETFzJ5i6qIcHXT6E5Wz8ny4jnYk-KUw2XzAHMt7IZosGrW9lbYPLiQeJwroUBC-9nbrnyzhSV-qBPQIuyVxwsjYGYfIHDwy5k4l6mh00V113opke75pPNZhT3LjNLstkz3vWIc4kDUzykHJ2JrbxDnYz764YEevwJTgdAr119Z6fDOwhBbPts4Xlg5AIUDcK1auTxKnN6fYZCh72sy--lhzfxFpANm5kYbeDCOSINCkp03DW2ahr7jIeO1ZiGeSXh447DaAIIYhU7wfS3hRB8iJUXV2NMTf5XigfubNtpg9AAMl18HX8QiteDFcfrIGRKORbDtoIfEc-ibb-XxF32cugxr24kBfd6IKdRU';
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
