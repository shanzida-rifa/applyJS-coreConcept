function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = element + sum;
        // console.log(index, element, sum);
    }
    return sum;
}
function getOddNumbersOfAnArray(numbers) {
    let sum = 0;
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 != 0) {
            oddNumbers.push(element);
            sum = sum + element;
        }
    }
    return sum;

}
const numbers = [5, 7, 8, 10, 45, 30];
const oddNumbersSum = getOddNumbersOfAnArray(numbers);
console.log(oddNumbersSum);
// getSumOfAnArray(numbers);
