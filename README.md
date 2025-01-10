## Sudoku Solver

A web-based Sudoku Solver application developed using Next.js that allows users to input initial Sudoku values, validate the entries, and solve the Sudoku puzzle if the inputs are valid. The application uses a backtracking algorithm for solving Sudoku puzzles and includes validation logic for rows, columns, and 3x3 sub-grids.

# Features

    9x9 Sudoku Grid: 
   Users can input Sudoku values (1-9) or leave cells blank for unknown values.

   Validate Button: 
   Checks the validity of the current state of the inputs.

   Solve Button: 
   Solves the Sudoku puzzle if the entries are valid and displays the solution.

   Error Messages: 
   Displays error messages for invalid entries.

   Validation Logic: 
   Ensures rows, columns, and 3x3 sub-grids contain unique values.

   Backtracking Algorithm: 
   Efficiently solves the Sudoku puzzle.

  # Additional Features (Bonus):

    Creative UI styling.

     Hints for users.

# Installation and Setup

Clone the repository:

git clone https://github.com/your-username/sudoku-solver.git
cd sudoku-solver

Install dependencies:

npm install

Start the development server:

npm run dev

Open the application in your browser:

http://localhost:3000

# How to Use

Input initial Sudoku values into the 9x9 grid. Leave cells blank for unknown values.

Click Validate to check the validity of the input. Ensure rows, columns, and 3x3 sub-grids contain unique values.

If the entries are valid, click Solve to solve the Sudoku puzzle. The solved puzzle will be displayed on the grid.

If the entries are invalid, an error message will appear, and the user can correct their input.

Use the additional Hints feature (if enabled) for solving assistance.

# Approach

Validation Logic

Ensures that rows, columns, and 3x3 sub-grids contain unique values.

Displays an error message if invalid entries are detected.

Solving Algorithm

Implements a backtracking algorithm to solve the puzzle. The algorithm tries placing numbers from 1-9 in empty cells while checking validity constraints. If no valid number can be placed, it backtracks to a previous cell.

# Additional Notes

The application is designed to be responsive and user-friendly.

Styling is implemented with a modern and minimalistic design approach.

Hints feature allows users to get suggestions for solving the puzzle step-by-step.

# Steps for Running the Project

Ensure Node.js and npm are installed on your system.

Clone the repository and install dependencies.

Run the development server and open the application in your browser.

Follow the usage instructions to interact with the Sudoku Solver.

Future Enhancements

Add a feature to generate random Sudoku puzzles.

Allow users to upload Sudoku puzzles as images and use OCR for grid input.

Implement a timer to track solving time.

Repository

Provide the link to your GitHub repository here:
GitHub Repository
     https://github.com/jyothsnakannati/Quinx-SUDOKU

Deployed usinng GitHub Pages



Thank you for using the Sudoku Solver application! Feel free to contribute or raise issues in the repository.



<img width="959" alt="image" src="https://github.com/user-attachments/assets/44dfa788-4b12-4d9b-9b07-dca73243a735" />

# When validate was clicked 

<img width="955" alt="image" src="https://github.com/user-attachments/assets/61f835f2-c8e3-4ff5-b5dd-7e1facbb2a2f" />

<img width="959" alt="image" src="https://github.com/user-attachments/assets/ed8df0bc-3766-4c38-8ab2-e4663a4af784" />

# when hint button was clicked 

<img width="958" alt="image" src="https://github.com/user-attachments/assets/789443f8-2ed5-40a7-8075-a6c4afe7e864" />

# when solve button was clicked

<img width="959" alt="image" src="https://github.com/user-attachments/assets/3024571d-b3d7-45cb-864f-cf8bd07b78d0" />




