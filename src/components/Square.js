import React from "react";
import "./Square.css"; // Import the CSS for styling the Square

// The Square component takes two props: onClick (click handler) and value (content of the square)
const Square = ({ onClick, value }) => {
    return (
        // A button element styled as a square, which displays the value ('X', 'O', or null)
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}

export default Square;
