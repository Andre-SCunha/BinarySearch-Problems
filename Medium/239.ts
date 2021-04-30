/*
    Uber Pool
    https://binarysearch.com/problems/Uber-Pool
*/

class Solution239 {
    solve(trips: Array<Array<number>>, capacity: number): boolean {
        const passTransactions = this.getPassTransactions(trips);

        let currPass = 0;
        for (const transaction of passTransactions) {
            currPass += transaction;
            if (currPass > capacity) {
                return false;
            }
        }
        return true;
    }

    getPassTransactions(trips: Array<Array<number>>): number[] {
        const stopPoints = [];
        const passTransactions = [];
        for (const trip of trips) {
            const startPtIndex = this.getValueIndex(stopPoints, trip[0]);
            stopPoints.splice(startPtIndex, 0, trip[0]);
            passTransactions.splice(startPtIndex, 0, trip[2]);

            const endPtIndex = this.getValueIndex(stopPoints, trip[1], true);
            stopPoints.splice(endPtIndex, 0, trip[1]);
            passTransactions.splice(endPtIndex, 0, -trip[2]);
        }
        return passTransactions;
    }

    getValueIndex(array: number[], value: number, priority?: boolean): number {
        let start = 0;
        let end = array.length;
        while (start < end) {
            const mid = (start + end) >>> 1;
            if (array[mid] > value || (priority && array[mid] === value)) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        return start;
    }
}
