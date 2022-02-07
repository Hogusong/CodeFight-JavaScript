/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
  const b = new Board(board.length, board);
  const answer = getAnswerRec(b);
  board = answer.solvedPuzzle;
  console.log(board);
  return board;
};

class Board {
constructor(size, puzzle=null) {
  this.solvedPuzzle = this.makePuzzle(size, puzzle);
}

makePuzzle(size, matrix) {
  const puzzle = [];
  for (let r=0; r<size; r++) {
    const row = [];
    for (let c=0; c<size; c++) {
      if (!matrix) row[c] = '';
      else row[c] = (matrix[r][c] === '.') ? '' : matrix[r][c];
    }
    puzzle.push(row)
  }
  return puzzle;
}

isFull() {
  const puzzle = this.solvedPuzzle;
  for (let r=0; r<puzzle.length; r++) {
    for (let c=0; c<puzzle.length; c++) {
      if (puzzle[r][c] === '' || +puzzle[r][c] > puzzle.length) return false;
    }
  }
  return true;
}

isValidState() {
  const puzzle = this.solvedPuzzle;
  for (let r=0; r<puzzle.length; r++) {
    for (let c=0; c<puzzle.length; c++) {
      if (puzzle[r][c] === '') continue;
      if (!checkRow(puzzle[r], puzzle[r][c], c)) return false;
      if (!checkColumn(puzzle, puzzle[r][c], r, c)) return false;
      if (!checkSquare(puzzle, puzzle[r][c], r, c)) return false;
    }
  }
  return true;    
}

getChildren() {
  if (this.isFull() && this.isValidState()) return null;
  const size = this.solvedPuzzle.length;
  let childrenRow = -1;
  let childrenColumn = -1;
  let childrenSize = size + 1;
  for (let r=0; r<size; r++) {
    for (let c=0; c<size; c++) {
      if (this.solvedPuzzle[r][c] === '') {
        let childrenCount = 0;
        for (let value=1; value<=size; value++) {
          if (checkRow(this.solvedPuzzle[r], value, c) && 
              checkColumn(this.solvedPuzzle, value, r, c) &&
              checkSquare(this.solvedPuzzle, value, r, c)) {
            childrenCount++;
          }
        }
        if (childrenCount < childrenSize) {
          childrenSize = childrenCount;
          childrenRow = r;
          childrenColumn = c;
        }
      }
    }
  }
  if (childrenSize > 0) {
    const boards = [];
    for (let i=0; i<childrenSize; i++) {
      boards.push(new Board(size));
    }
    let currIndex = 0;
    for (let value=1; value<=size; value++) {
      if (checkRow(this.solvedPuzzle[childrenRow], value, childrenColumn) &&
          checkColumn(this.solvedPuzzle, value, childrenRow, childrenColumn) &&
          checkSquare(this.solvedPuzzle, value, childrenRow, childrenColumn)) {
        const childBoard = cloneBoard(this.solvedPuzzle);
        childBoard.solvedPuzzle[childrenRow][childrenColumn] = '' + value;
        boards[currIndex++] = childBoard;
      }
    }
    return boards;
  }
  return null;
}
}

// - - - - - - - - - - - - - - - - -
function checkRow(puzzle, value, c) {
for (let i=0; i<puzzle.length; i++) {
  if (i != c && puzzle[i] == value) return false;
}
return true;
}

function checkColumn(puzzle, value, r, c) {
for (let i=0; i<puzzle.length; i++) {
  if (i != r && puzzle[i][c] == value) return false;
}
return true;
}

function checkSquare(puzzle, value, r, c) {
const r_from = Math.floor(r/3) * 3;
const c_from = Math.floor(c/3) * 3;
for (let i=r_from; i<r_from+3; i++) {
  for (let j=c_from; j<c_from+3; j++) {
    if ((i != r || j != c) && puzzle[i][j] == value) return false;
  }
}
return true;
}

function cloneBoard(puzzle) {
const clone = [];
for (let r=0; r<puzzle.length; r++) {
  const row = [];
  for (let c=0; c<puzzle.length; c++) {
    row[c] = puzzle[r][c];
  }
  clone.push(row);
}
return new Board(clone.length, clone);
}

function getAnswerRec(board) {
if (board.isFull() && board.isValidState()) {
  return board;
}
const children = board.getChildren();
if (children) {
  for (let i=0; i<children.length; i++) {
    const child = getAnswerRec(children[i]);
    if (child) return child;
  }
}
return null;
}

const sudoku = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

solveSudoku(sudoku);