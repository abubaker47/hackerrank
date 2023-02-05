function flippingBits(n) {
    // Write your code here
    return n.toString(2) >>> 0;
}

console.clear();
console.log(flippingBits(2147483647));