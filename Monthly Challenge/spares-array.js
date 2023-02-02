function matchingStrings(strings, queries) {
    let resArr = [];
    
    for(let q of queries)
        resArr.push(strings.filter(e => e == q).length);

    return resArr;
}

console.clear();
console.log(
    matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc'])
);