/*
    Shortest Common Supersequence
    https://binarysearch.com/problems/Shortest-Common-Supersequence
*/

class Solution185 {
    solve(a: string, b: string): number {
        return a.length + b.length - this.getLCS(a, b);
    }
    getLCS(a: string, b: string): number {
        const LCS = [];
        for (const _ of a) {
            LCS.push(new Array(b.length));
        }
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < b.length; j++) {
                if (a[i] === b[j]) {
                    LCS[i][j] = i && j ? LCS[i - 1][j - 1] + 1 : 1;
                } else {
                    const li = i ? LCS[i - 1][j] : 0;
                    const lj = j ? LCS[i][j - 1] : 0;
                    LCS[i][j] = Math.max(li, lj);
                }
            }
        }
        return LCS[a.length - 1][b.length - 1];
    }
}
