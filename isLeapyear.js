function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder == 0) {
        return true;
    }
    else {
        return false;
    }
}
const myYear = isLeapYear(2034);
console.log(myYear);
const herYear = isLeapYear(2020);
console.log(herYear);