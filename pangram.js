function pangrams(s) {
    s = s.toLowerCase();
    let list = "abcdefghijklmnopqrstuvwxyz";
    return (list.split('').every(e => s.includes(e))) ? "pangram" : "not pangram";
}

console.clear();
console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));
console.log(pangrams("Hi"));