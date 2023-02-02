function timeConversion(s) {
    // Write your code here
    s = s.split(':');
    let a = s[2].substr(-2, 2);

    if(a == 'PM' && s[0] != 12) s[0] = Number(s[0]) + 12;
    else if(a == 'AM' && s[0] == 12) {s[0] -= 12;}

    if(String(s[0]).length === 1) s[0] = '0' + s[0];

    return `${s[0]}:${s[1]}:${s[2].substr(0, 2)}`;
}

console.clear();
console.log(timeConversion('12:00:00AM'));
console.log(timeConversion('12:00:00PM'));
console.log(timeConversion('07:05:45PM'));