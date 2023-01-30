function repeatedString(s, n) {
    return (s.match(/a/g) || []).length * Math.floor(n/s.length) + (s.slice(0,n%s.length).match(/a/g) || []).length
}

console.clear();
//console.log(repeatedString('abcac', 10));
console.log(repeatedString('aba', 10));
console.log(repeatedString('a', 1000000000000));