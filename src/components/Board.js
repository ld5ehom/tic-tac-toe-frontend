import React from 'react';
import Square from './Square'; // Import the Square component
import "./Board.css"; // Import the CSS for styling the Board

// The Board component receives props: squares (state of the board) and onClick (click handler)
const Board = ({ squares, onClick }) => {

    // Helper function to render a Square component, passing its value and click handler
    const renderSquare = (i) => {
        return (
            <Square 
                value={squares[i]} // The value of the square (either 'X', 'O', or null)
                onClick={() => onClick(i)} // When clicked, trigger the onClick function with the index (i)
            />
        );
    };

    // The JSX for rendering the board with 9 squares in a 3x3 grid layout
    return (
        <div className='board-wrapper'>
            {/* First row of the board (3 squares) */}
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            {/* Second row of the board (3 squares) */}
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            {/* Third row of the board (3 squares) */}
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

export default Board;
