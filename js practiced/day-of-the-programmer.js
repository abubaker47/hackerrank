function dayOfProgrammer(year) {
    // Write your code here
    const isLeapYear = (year) =>  {
        if (year < 1917) {
            return year % 4 === 0
        } else {
            return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
        }
    }
    if (year === 1918) {
        return '26.09.1918'
    }
    return isLeapYear(year) ? `12.09.${year}` : `13.09.${year}`
}

console.clear();
console.log(dayOfProgrammer(1800));