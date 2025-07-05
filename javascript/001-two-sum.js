/**
 * Problem: Two Sum
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
};

// Test cases
console.log("Test 1:", twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log("Test 2:", twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log("Test 3:", twoSum([3, 3], 6)); // Expected: [0, 1]
