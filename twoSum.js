function twoSum(nums, target) {
    // Create a map to store numbers and their indices
    const map = new Map();
    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i]; // The number we need to find
      // If the complement exists in the map, return the pair of indices
      if (map.has(complement)) return [map.get(complement), i];
      // Otherwise, store the current number and its index in the map
      map.set(nums[i], i);
    }
    // If no pair found, return null
    return null;
  }
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
  