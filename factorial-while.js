function factorial(number) {
    multiplication = 1;
    while (number >= 1) {
        multiplication = number * multiplication;
        number--;
    }
    return multiplication;
}
const mynumber = factorial(7);
console.log(mynumber);