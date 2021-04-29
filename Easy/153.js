class Solution153 {
    solve(nums) {
        const sortedNums = nums.slice(0).sort((a, b) => a - b);
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === sortedNums[i]) {
                count++;
            }
        }
        return count;
    }
}
