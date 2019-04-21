function sudoku(grid) {
  if (checkRow(grid)) {
      if (checkColumn(grid)) {
          return (checkSquare(grid))
      }
  }
  return false
}

function checkRow(grid){
    for (let r=0; r<grid.length; r++) {
        for (let c=0; c<grid.length; c++) {
            for (let j=0; j<grid.length; j++) {
                if (grid[r][c] !== '.')
                    if (grid[r][c] === grid[r][j] && c !== j) return false
            }
        }
    }
    return true
}

function checkRow1(grid){
    for (let r=0; r<grid.length; r++) {
        for (let c=0; c<grid.length; c++) {
            for (let j=c+1; j<grid.length; j++) {
                if (grid[r][c] !== '.')
                    if (grid[r][c] === grid[r][j]) return false
            }
        }
    }
    return true
}

function checkColumn(grid){
    for (let c=0; c<grid.length; c++) {
        for (let r=0; r<grid.length; r++) {
            for (let j=0; j<grid.length; j++) {
                if (grid[r][c] !== '.')
                    if (grid[r][c] === grid[j][c] && r !== j) return false
            }
        }
    }
    return true
}

function checkColumn1(grid){
    for (let c=0; c<grid.length; c++) {
        for (let r=0; r<grid.length; r++) {
            for (let j=r+1; j<grid.length; j++) {
                if (grid[r][c] !== '.')
                    if (grid[r][c] === grid[j][c]) return false
            }
        }
    }
    return true
}
  
function checkSquare(grid){
    for (let r=0; r<grid.length; r++) {
        for (let c=0; c<grid.length; c++) {
            if (grid[r][c] === '.') continue
            const [R, C] = [Math.floor(r/3), Math.floor(c/3)] 
            for (let x=3*R; x<(3*R+3); x++) {
                for (let y=3*C; y<(3*C+3); y++) {
                    if ( r === x && c === y) continue
                    if (grid[r][c] === grid[x][y]) return false
                }
            }
        }
    }
    return true
}
