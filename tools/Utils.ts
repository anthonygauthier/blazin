function getCurrentDate(): string {
    return `${new Date().toISOString()}`;
}

export default {
    getCurrentDate
}