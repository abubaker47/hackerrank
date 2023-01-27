function appendAndDelete(s, t, k) {
    let i = 0;

    for(i; i<s.length; i++)
        if(s[i] !== t[i]) break;
    
    return (s.length-i + t.length-i <= k) ? 'YES' : 'NO';
}

console.clear();