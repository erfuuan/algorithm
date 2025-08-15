function mergeSortedArrays(a, b) {
    // Initialize pointers for both arrays and the result array
    let i = 0, j = 0, result = [];

    // Loop until we reach the end of either array
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            result.push(a[i]); // Add element from array 'a' to result
            i++;               // Move pointer i to the next element in 'a'
        } else {
            result.push(b[j]); // Add element from array 'b' to result
            j++;               // Move pointer j to the next element in 'b'
        }
    }

    // Add any remaining elements from 'a' or 'b' to the result
    // slice(i) and slice(j) create a new array from the current pointer to the end
    return result.concat(a.slice(i)).concat(b.slice(j));
}

// Test the function
console.log(mergeSortedArrays([1, 3, 5, 8], [2, 4, 6, 12, 15]));