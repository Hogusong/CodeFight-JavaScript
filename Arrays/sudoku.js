function sudoku2(grid) {
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

function checkSquare(grid) {
  for (let x=0; x<3; x++) {
      const r = Math.floor(x/3)
      const c = x%3
      for (let i=3*r; i<3*(r+1); i++) {
          for (let j=3*c; j<3*(c+1); j++) {
              const v = grid[i][j]
              if (v !== '.') {
                  for (let y=3*r; y<3*(r+1); y++) {
                      for (let z=3*c; z<3*(c+1); z++) {
                         if ( v === grid[y][z] && (i !== y || j !== z))                                return false
                      }
                  }                        
              }
          }
      }
  }
  return true
}
