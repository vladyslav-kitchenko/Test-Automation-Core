export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function truncate(str, n) {
    return str.length > n ? str.slice(0, n) + '...' : str;
}
