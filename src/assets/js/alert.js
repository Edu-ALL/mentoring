import Swal from 'sweetalert2';

export const alert = {
    loading() {
        Swal.fire({
            width: '100px',
            allowOutsideClick: false
        });
        Swal.showLoading();
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