function viralAdvertising(n) {
    // Write your code here
    let cumulative = 0;
    let liked = 0;
    let shares = 5;

    if(n >= 1 && n <= 50)
    for(let day=1; day <= n; day++){
        shares = (day > 1) ? liked * 3 : shares;
        liked = Math.floor(shares/2);
        cumulative += liked;
    }
    
    return cumulative;
}

console.clear();
console.log(viralAdvertising(5));