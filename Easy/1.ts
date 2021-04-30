/*
    Sum of Two Numbers
    https://binarysearch.com/problems/Sum-of-Two-Numbers
*/

class Solution1 {
    solve(nums: Array<number>, k: number): boolean {
        const difSet = new Set<number>();
        for (let i = 0; i < nums.length; i++) {
            if (difSet.has(nums[i])) return true;
            difSet.add(k - nums[i]);
        }
        return false;
    }
}
