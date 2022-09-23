import Swal from 'sweetalert2';
import axios from 'axios';
import router from '../../router'

export const alert = {
    loading() {
        Swal.fire({
            width: '100px',
            allowOutsideClick: false
        });
        Swal.showLoading();
    },

    confirm(link, token, to) {
        const customSwal = Swal.mixin({
            customClass: {

                confirmButton: 'btn-mentoring btn-outline-success mx-1',
                cancelButton: 'btn-mentoring btn-danger mx-1'
            },
            buttonsStyling: false
        })

        customSwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: 'warning',
            width: '400px',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.loading()
                axios
                    .delete(link, {
                        headers: {
                            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
                            Authorization: token,
                        },
                    })
                    .then(() => {
                        // console.log(response);
                        // this.close()
                        this.toast("success", "Your file has been deleted.");

                        setTimeout(() => {
                            if (to == '') {
                                router.go()
                            } else {
                                router.push({ path: to })
                            }
                        }, 3000)

                    })
                    .catch((error) => {
                        this.close()
                        this.toast("warning", "Error, please try again!");
                        console.log(error.response);
                    });

            }
        })
    },

    toast(status, title) {
        const Toast = Swal.mixin({
            toast: true,
            width: "32rem",
            position: "bottom-end",
            iconColor: 'white',
            customClass: {
                popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });

        Toast.fire({
            icon: status,
            title: title,
        });
    },

    close() {
        Swal.close();
    }
}