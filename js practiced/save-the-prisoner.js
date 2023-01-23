function saveThePrisoner(n, m, s) {
    // Write your code here
    m=m%n;

	let result=(s+(m-1))%n;
	return result==0?n:result;
}

console.clear();
console.log(saveThePrisoner(5,278162896,2));