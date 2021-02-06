export function getSeconds(increment: number = 0) {
    return Math.floor(Date.now() / 1000) + increment;
}