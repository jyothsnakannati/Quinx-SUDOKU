// Sudoku solver utility functions
export const isValid = (board: number[][], row: number, col: number, num: number): boolean => {
  // Check row
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num) return false;
  }

  // Check column
  for (let x = 0; x < 9; x++) {
    if (board[x][col] === num) return false;
  }

  // Check 3x3 box
  const startRow = row - (row % 3);
  const startCol = col - (col % 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i + startRow][j + startCol] === num) return false;
    }
  }

  return true;
};

export const solveSudoku = (board: number[][]): boolean => {
  let row = -1;
  let col = -1;
  let isEmpty = false;

  // Find empty cell
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        row = i;
        col = j;
        isEmpty = true;
        break;
      }
    }
    if (isEmpty) break;
  }

  // No empty cell found, puzzle solved
  if (!isEmpty) return true;

  // Try digits 1-9
  for (let num = 1; num <= 9; num++) {
    if (isValid(board, row, col, num)) {
      board[row][col] = num;
      if (solveSudoku(board)) return true;
      board[row][col] = 0;
    }
  }

  return false;
};

export const validateBoard = (board: number[][]): boolean => {
  // Check each cell
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== 0) {
        const temp = board[i][j];
        board[i][j] = 0;
        if (!isValid(board, i, j, temp)) {
          board[i][j] = temp;
          return false;
        }
        board[i][j] = temp;
      }
    }
  }
  return true;
};