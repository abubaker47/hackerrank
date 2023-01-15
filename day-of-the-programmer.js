function dayOfProgrammer(year) {
    // Write your code here
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    return [firstDay.getMonth(), lastDay]
}

console.clear();
console.log(dayOfProgrammer(2016));