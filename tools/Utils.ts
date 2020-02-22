function getCurrentDate(): string {
    const date = new Date()
    return `${date.toISOString()}`;
}

export default {
    getCurrentDate
}