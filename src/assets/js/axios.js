import axios from "axios";

axios.defaults.baseURL = 'https://services.all-inedu.com/api/v1/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Content-Type'] = "multipart/form-data";