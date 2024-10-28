import { useState } from "react";
import "./App.css";
import Board from "./components/Board"; // Import the Board component

function App() {
  // State to keep track of the game history
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);

  // State to determine whose turn it is (X or O)
  const [xIsNext, setXIsNext] = useState(true);

  // State to track the current step number (move in the game)
  const [stepNumber, setStepNumber] = useState(0);

  // Function to calculate if there is a winner
  const calculateWinner = (squares) => {
    const lines = [
      // All possible winning combinations
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal lines
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical lines
      [0, 4, 8], [2, 4, 6] // Diagonal lines
    ];

    // Check each line for a winner
    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Return the winner ('X' or 'O')
      }
    }

    return null; // Return null if there's no winner yet
  };

  // Get the current board state based on the current step number
  const current = history[stepNumber];

  // Check if there is a winner
  const winner = calculateWinner(current.squares);

  // Set the game status message
  let status;
  if (winner) {
    status = 'Winner: ' + winner; // Display the winner
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`; // Indicate the next player
  }

  // Handle a square being clicked
  const handleClick = (i) => {
    // Create a copy of the history up to the current step
    const newHistory = history.slice(0, stepNumber + 1);
    // Get the current board state
    const newCurrent = newHistory[newHistory.length - 1];
    // Copy the squares array to avoid direct mutation
    const newSquares = newCurrent.squares.slice();

    // If there's a winner or the square is already filled, do nothing
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    // Place 'X' or 'O' in the clicked square
    newSquares[i] = xIsNext ? 'X' : 'O';

    // Update the game history and move to the next step
    setHistory([...newHistory, { squares: newSquares }]);

    // Switch turns (from X to O or O to X)
    setXIsNext((prev) => !prev);
    
    // Update the step number to the new history length
    setStepNumber(newHistory.length);
  };

  // Generate the list of moves for the game history
  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start'; // Description of the move
    return (
      <li key={move}>
        <button className="move-button" onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  // Jump to a specific step in the history (time travel feature)
  const jumpTo = (step) => {
    setStepNumber(step); // Set the step number to the selected move
    setXIsNext((step % 2) === 0); // Ensure the correct player turn is set
  };

  return (
    <div className="game">
      <div className="game-board">
        {/* Render the Board component, passing down squares and onClick handler */}
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>

      <div className="game-info">
        {/* Display the game status (either next player or the winner) */}
        <div className='status'>{status}</div>
        
        {/* Render the list of move buttons */}
        <ol style={{ listStyle: 'none' }}>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
