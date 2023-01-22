function beautifulDays(i, j, k) {
    // Write your code here
    let days = 0;

    for(let n=i; n <= j; n++){
        let rev = Number(String(n).split('').reverse().join(''));
        if(Math.abs(n-rev) % k === 0) days++;
    }

    return days;
}

console.clear();
console.log(beautifulDays(20,23,6));