import moment from 'moment';

export const customDate = {
    date(i) {
        return moment(i).format("MMMM Do YYYY");
    },

    time(i) {
        return moment(i).format("H:mm A");
    },
}