function evenOrOdd(number) {
    const remainder = number % 2;
    if (remainder == 0) {
        return true;
    }
    else {
        return false;
    }
}
const mynumberisEven = evenOrOdd(303);
console.log(mynumberisEven);
const hernumberisEven = evenOrOdd(404);
console.log(hernumberisEven);