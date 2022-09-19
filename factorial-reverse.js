function factorial(number) {
    multiplication = 1;
    for (let i = number; i >= 1; i--) {
        multiplication = i * multiplication;
    }
    return multiplication;
}
const mynumber = factorial(7);
console.log(mynumber);