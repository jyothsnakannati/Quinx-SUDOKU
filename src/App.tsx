import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Lightbulb, RefreshCcw } from 'lucide-react';
import { solveSudoku, validateBoard } from './utils/sudokuSolver';
import SudokuCell from './components/SudokuCell';

function App() {
  const [board, setBoard] = useState<number[][]>(Array(9).fill(0).map(() => Array(9).fill(0)));
  const [initialBoard, setInitialBoard] = useState<boolean[][]>(Array(9).fill(false).map(() => Array(9).fill(false)));
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleCellChange = (row: number, col: number, value: number) => {
    const newBoard = board.map(row => [...row]);
    newBoard[row][col] = value;
    setBoard(newBoard);
    
    if (value !== 0) {
      const newInitialBoard = initialBoard.map(row => [...row]);
      newInitialBoard[row][col] = true;
      setInitialBoard(newInitialBoard);
    }
    
    setError('');
    setSuccess('');
  };

  const handleValidate = () => {
    if (validateBoard(board.map(row => [...row]))) {
      setSuccess('The current board is valid!');
      setError('');
    } else {
      setError('The current board configuration is invalid.');
      setSuccess('');
    }
  };

  const handleSolve = () => {
    const boardCopy = board.map(row => [...row]);
    if (!validateBoard(boardCopy)) {
      setError('Cannot solve: Invalid board configuration.');
      setSuccess('');
      return;
    }

    if (solveSudoku(boardCopy)) {
      setBoard(boardCopy);
      setSuccess('Puzzle solved successfully!');
      setError('');
    } else {
      setError('No solution exists for this configuration.');
      setSuccess('');
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(0).map(() => Array(9).fill(0)));
    setInitialBoard(Array(9).fill(false).map(() => Array(9).fill(false)));
    setError('');
    setSuccess('');
  };

  const handleHint = () => {
    const boardCopy = board.map(row => [...row]);
    if (!validateBoard(boardCopy)) {
      setError('Cannot provide hint: Invalid board configuration.');
      return;
    }

    // Find first empty cell
    let emptyFound = false;
    let row = 0, col = 0;
    for (let i = 0; i < 9 && !emptyFound; i++) {
      for (let j = 0; j < 9 && !emptyFound; j++) {
        if (boardCopy[i][j] === 0) {
          row = i;
          col = j;
          emptyFound = true;
        }
      }
    }

    if (!emptyFound) {
      setError('No empty cells to provide hint for.');
      return;
    }

    if (solveSudoku(boardCopy)) {
      const newBoard = board.map(row => [...row]);
      newBoard[row][col] = boardCopy[row][col];
      setBoard(newBoard);
      setSuccess('Hint provided!');
      setError('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sudoku Solver</h1>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            {success}
          </div>
        )}

        <div className="grid grid-cols-9 gap-0.5 bg-gray-300 p-0.5 mb-6">
          {board.map((row, rowIndex) => (
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`${
                  colIndex % 3 === 2 && colIndex !== 8 ? 'border-r-2 border-gray-400' : ''
                } ${
                  rowIndex % 3 === 2 && rowIndex !== 8 ? 'border-b-2 border-gray-400' : ''
                }`}
              >
                <SudokuCell
                  value={cell}
                  onChange={(value) => handleCellChange(rowIndex, colIndex, value)}
                  isInitial={initialBoard[rowIndex][colIndex]}
                  hasError={error !== ''}
                />
              </div>
            ))
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={handleValidate}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Validate
          </button>
          <button
            onClick={handleSolve}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center"
          >
            <RefreshCcw className="w-5 h-5 mr-2" />
            Solve
          </button>
          <button
            onClick={handleHint}
            className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 flex items-center"
          >
            <Lightbulb className="w-5 h-5 mr-2" />
            Hint
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;