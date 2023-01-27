function appendAndDelete(s, t, k) {
    let i = 0;

    for(i; i<s.length; i++)
        if(s[i] !== t[i]) break;

    let countsLeft = k - (s.length-i + t.length-i);
    
    return (countsLeft >= 0 && countsLeft % 2 == 0) || i*2 <= countsLeft ? 'Yes' : 'No';
}

console.clear();
console.log(appendAndDelete('abc', 'def', 6));
console.log(appendAndDelete('hackerhappy', 'hackerrank', 9));
console.log(appendAndDelete('aba', 'aba', 7));
console.log(appendAndDelete('ashley', 'ash', 2));
console.log(appendAndDelete('y', 'yu', 2));