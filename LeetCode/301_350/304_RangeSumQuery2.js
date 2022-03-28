/**
 * @param {number[][]} matrix
 */
 var NumMatrix = function(matrix) {
  for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[0].length; c++) {
          if (c == 0) continue;
          matrix[r][c] = matrix[r][c] + matrix[r][c-1];
      }
  }
  this.matrix = matrix;
};

/** 
* @param {number} row1 
* @param {number} col1 
* @param {number} row2 
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let sum = 0;
  for (let r = row1; r <= row2; r++) {
      if (col1 == 0) sum += this.matrix[r][col2];
      else sum += this.matrix[r][col2] - this.matrix[r][col1-1];
  }
  return sum;
};

/** 
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/