
function fibonacci(n )  {
	if (n <= 1) {
		console.log("yes", n)
		return n
	}
	console.log(n-1,n-2)
	return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(6))