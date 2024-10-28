# tic-tac-toe - UCLA CS35L 
- Utilized: React, Javascript 

1. Homebrew install (terminal): 
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Node.js install : 
```
brew install node
```

3. install check :
```
node -v 
npm -v
```

4. Create the React App : 
```
npx create-react-app tic-tac-toe
``` 

5. React install : 
`npm install`

6. React start : 
`npm start `

7. Create the .txt :
`touch tic-tac-toe.txt`

8. Writing to the .txt Files : 
`nano tic-tac-toe.txt`

9. Verifying the Files : 
`cat tic-tac-toe.txt`

--- Start Build ---

The Square component renders a <button>, and the Board renders nine squares. 
The App component renders the game board and will contain placeholder values to be modified later.

Tic-Tac-Toe Structure Summary:
- App component: Renders the game board and includes placeholder values for later modification.
State Management: useState is used to manage the game history, current player (X or O), and the step number (for time travel).
Winner Calculation: The calculateWinner function checks the board for any winning combinations.
Game Logic: When a square is clicked, it updates the board, switches turns, and updates the game history.
Time Travel Feature: The jumpTo function allows players to go back to previous moves.

- Board component: Renders nine squares.
squares Prop: This is an array representing the current state of the game board, where each element is either 'X', 'O', or null.
onClick Prop: This function is triggered when a square is clicked. The specific index of the square (0-8) is passed to the function to update the board state.
renderSquare(i): This helper function renders a single square at index i. It passes the square's value and the onClick function to the Square component.


- Square component: Renders a <button>.
onClick Prop: This is the function passed from the Board component. It gets triggered when the square is clicked. This function typically updates the state of the game by marking the square with either an 'X' or 'O'.
value Prop: This represents the current value of the square. It can be 'X', 'O', or null (if the square is empty). This value is displayed inside the <button>.


--- React Start ---
- Command: npm start
- Result: The app ran successfully on http://localhost:3000.