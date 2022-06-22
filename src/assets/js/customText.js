export const customText = {
    text(i, n) {
        var trimmedString = i.substr(0, n);
        return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
    },
}