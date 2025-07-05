package main

import "fmt"

/*
Problem: Two Sum
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.

Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

func twoSum(nums []int, target int) []int {
	numMap := make(map[int]int)

	for i, num := range nums {
		complement := target - num

		if index, exists := numMap[complement]; exists {
			return []int{index, i}
		}

		numMap[num] = i
	}

	return []int{}
}

func main() {
	// Test cases
	fmt.Println("Test 1:", twoSum([]int{2, 7, 11, 15}, 9)) // Expected: [0 1]
	fmt.Println("Test 2:", twoSum([]int{3, 2, 4}, 6))      // Expected: [1 2]
	fmt.Println("Test 3:", twoSum([]int{3, 3}, 6))         // Expected: [0 1]
}
