import moment from 'moment';

export const customDate = {
    tomorrow() {
        var date = new Date();
        date.setDate(date.getDate() + 1);
        return moment(date).format("YYYY-MM-DDT00:00");
    },

    date(i) {
        return moment(i).format("MMMM Do YYYY");
    },

    time(i) {
        return moment(i).format("H:mm A");
    },
}