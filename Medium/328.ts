/* 
    Leaves in Same Level 
    https://binarysearch.com/problems/Leaves-in-Same-Level
*/

class Tree328 {
    val: number;
    left: Tree328 | null;
    right: Tree328 | null;

    constructor(val: number, left: Tree328 | null, right: Tree328 | null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution328 {
    solve(root: Tree328): boolean {
        const stack = [root];
        const levelstk = [0];
        let level = null;
        while (stack.length > 0) {
            const curr = stack[0];
            const currlvl = levelstk[0];

            if (level && level < currlvl) {
                return false;
            }
            if (!level) {
                if (!curr.left && !curr.right) {
                    level = currlvl;
                }
            }
            if (curr.left) {
                stack.push(curr.left);
                levelstk.push(currlvl + 1);
            }
            if (curr.right) {
                stack.push(curr.right);
                levelstk.push(currlvl + 1);
            }
            stack.shift();
            levelstk.shift();
        }
        return true;
    }
}
