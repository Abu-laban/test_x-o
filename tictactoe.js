// Create a board
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// Define the players
const player1 = 'X';
const player2 = 'O';

// Define the current player
let currentPlayer = player1;

// Define the game loop
while (true) {

  // Display the board
  for (let row of board) {
    console.log(row.join(' '));
  }

  // Get the player's move
  let move = prompt('Enter your move (1-9): ');
  move = parseInt(move) - 1;

  // Check if the move is valid
  if (move < 0 || move >= 9 || board[move / 3][move % 3] !== ' ') {
    console.log('Invalid move.');
    continue;
  }

  // Make the move
  board[move / 3][move % 3] = currentPlayer;

  // Check if the game is over
  let winner = checkWinner(board);
  if (winner) {
    console.log(winner, 'won!');
    break;
  }

  // Switch players
  currentPlayer = currentPlayer === player1 ? player2 : player1;
}

// Define a function to check the winner
function checkWinner(board) {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] === board[i][2] !== ' ') {
      return board[i][0];
    }
    if (board[0][i] === board[1][i] === board[2][i] !== ' ') {
      return board[0][i];
    }
  }
  if (board[0][0] === board[1][1] === board[2][2] !== ' ') {
    return board[0][0];
  }
  if (board[0][2] === board[1][1] === board[2][0] !== ' ') {
    return board[0][2];
  }
  return null;
}
