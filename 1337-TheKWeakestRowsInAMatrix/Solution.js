/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    
        let soldiers = [];
        let result = [];
        
        for (let i = 0; i < mat.length; i++) {
            let count = 0;
            for (let j = 0; j < mat[i].length; j++) {
                if (mat[i][j] === 1) {
                    count++;
                }
            }
            soldiers.push({index: i, count: count});
        }
        
        soldiers.sort((a, b) => {
            if (a.count === b.count) {
                return a.index - b.index;
            }
            return a.count - b.count;
        });
        
        for (let i = 0; i < k; i++) {
            result.push(soldiers[i].index);
        }
        
        return result;
    
};