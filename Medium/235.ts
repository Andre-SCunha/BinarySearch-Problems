/*
    Largest Tree Sum Path
    https://binarysearch.com/problems/Largest-Tree-Sum-Path
*/

class Tree235 {
    val: number;
    left: Tree235 | null;
    right: Tree235 | null;

    constructor(val: number, left: Tree235 | null, right: Tree235 | null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution235 {
    solve(root: Tree235): number {
        return this.largestSum(root)[0];
    }
    largestSum(root): number[] {
        if (!root) return [-Infinity, 0];
        const lS = this.largestSum(root.left);
        console.log(lS);
        const rS = this.largestSum(root.right);

        const ruM = rS[1];
        const luM = lS[1];

        const uLargest = Math.max(ruM + root.val, luM + root.val, root.val);
        const largest = Math.max(ruM + root.val + luM, uLargest, lS[0], rS[0]);
        return [largest, uLargest];
    }
}
