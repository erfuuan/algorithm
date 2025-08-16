function fibonacci(n) {
    // Base case: if n is 0 or 1, return n directly
    if (n <= 1) return n;
    // Initialize the first two numbers of the Fibonacci sequence
    let a = 0, b = 1;
    // Loop from 2 to n to calculate the Fibonacci numbers iteratively
    for (let i = 2; i <= n; i++) {
      console.log({i,a,b})
      // Calculate the next Fibonacci number as the sum of the previous two
      const temp = a + b;
      // Move the window: previous second number becomes the first
      a = b;
      // Update the second number to the newly calculated Fibonacci number
      b = temp;
    }
    // After the loop, b contains the nth Fibonacci number
    return b;
  }
console.log(fibonacci(6)); // 8
