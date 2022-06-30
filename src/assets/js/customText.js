export const customText = {
    text(i, n) {
        var trimmedString = i.substr(0, n);
        return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
    },

    removeDash(str) {
        return str.replaceAll('-', ' ');
    },

    excerpt(text, number) {
        let arr = text.split(' ')
        let string = arr.length + ' - ' + number;
        return string;
    }
}