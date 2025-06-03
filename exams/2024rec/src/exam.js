const cors = require('cors');
const express = require('express');

const app = express();
const port = 3001;

const game = (function () {
  // Private variables
  let gameWinner = null;
  let currentTurnToken = "X";
  const tokenOwner = {
    "X": null,
    "O": null
  };
  const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  // Public methods
  /**
   * @returns the game winner.
   */
  const getGameWinner = () => {
    return gameWinner;
  };


  /**
   * Method that finishes a turn 
   */
  const endTurn = () => {

    // End turn step 1: Checking if the newly clicked cell has created a three-in-a-row line of equal tokens.
    // If positive, 'gameWinner' is set to the player id of the player who won the game.

    for (let i = 0; i < 3; i++) {
      // Check rows
      if (board[i][0] !== null && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        gameWinner = tokenOwner[board[i][0]];
        return;
      }
      // Check columns
      if (board[0][i] !== null && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        gameWinner = tokenOwner[board[0][i]];
        return;
      }
    }
    // Check diagonals
    if (board[0][0] !== null && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      gameWinner = tokenOwner[board[0][0]];
    } else if (board[0][2] !== null && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      gameWinner = tokenOwner[board[0][2]];
    }

    // End turn step 2: Given a new cell has been clicked, we must swap 'currentTurnToken'.
    // If it was crosses "X", we set it to circles "O". If it was circles "O", we set it to crosses "X".
    currentTurnToken = currentTurnToken == "X" ? "O" : "X";
  };

  /**
   * Returns the token in a cell or null if there is no token.
   * @param  row 
   * @param  column 
   * @returns the token in a cell
   */
  const getCellToken = (row, column) => board[row][column]


  //private method
  /**
   * Given a playerId returns true of false if it's the player turns or not.
   * @param {playerId} 
   * @returns (true/false)
   */
  const isMyTurn = (playerId) => {
    const otherToken = currentTurnToken == "X" ? "O" : "X";
    const tmp = (tokenOwner[currentTurnToken] == playerId) || (tokenOwner[currentTurnToken] == null && tokenOwner[otherToken] != playerId)
    console.log(`IsMyTurn? (${tmp}) ${playerId} currentTurnToken: ${currentTurnToken} otherToken: ${otherToken}`);
    return (tokenOwner[currentTurnToken] == playerId) || (tokenOwner[currentTurnToken] == null && tokenOwner[otherToken] != playerId);
  };

  //TODO: implement the method 'refreshTokenOwner' to check if it is your turn.
  /**
   * Method that returns a promise. It checks if it is you turn (use method isMyTurn(playerId)), 
   * if so, updates the token owner: tokenOwner[currentTurnToken] = playerId and  resolves to nothing
   * else rejects the promise to nothing.
   * @param {*} playerId 
   * @returns a promise that resolves to nothing if it is your turn or rejects if it is not your turn.
   */
  const refreshTokenOwner = (playerId) => { }

  //TODO: implement the method 'refreshCell' to check if a cell is empty
  /**
   * Method that ckecks if a cell is empty.
   * @param {row}  
   * @param {column}  
   * @returns a promise. If the cell is empty (!board[row][column]) places the current player token
   * in the cell:  board[row][column] = currentTurnToken and resolves to the token in the cell (currentTurnToken)
   * If the cell is not empty rejects to the token in the cell (board[row][column])
   */
  const refreshCell = (row, column) =>  {}



  //TODO: reveal the functions: getCellToken, getGameWinner, refreshTokenOwner, refreshCell, endTurn
  //return ...

})();

app.use(cors());
app.use(express.json());

app.get('new_game', (req, res) => {
  resetGame()
  res.end()
})


app.get('/cell_click', (req, res) => {
  if (typeof game == "undefined") {
    setTimeout(()=>{    
      res.status(200).json({
      "gameWinner": undefined,
      "token": "X"
    }).end();}, 1000)
  } else {
    // TODO:
    //
    //parseInt(req.query.playerId)
    //parseInt(req.query.row)
    //parseInt(req.query.column)
    //response to the request: res.status(status).json(here goes your json)
    //where your json can be: { gameWinner: thegame_winner/null} or 
    //{ gameWinner: thegame_winner/null, token: X/O } 
    //status = 200 it is your turn and the selected cell is empty
    //status = 400 cell is not empty
    //status = 401 it is not your turn
    //if there is already a winner send the json {gameWinner: thegame_winner}:
    //res.status(200).json({gameWinner: the_gameWinner})
    //else use refreshTokenOwner to check it is your play turn. 
    //If it is not your turn send the status code 401 to the client. Use getCellToken to get 
    //the token in the cell or null:
    //res.status(401).json({gameWinner: the_gameWinner/null, token: X/O/null })
    //If it is your turn, check if the selected cell is empty (refreshCell). 
    //If the cell is empty the status code will be 200, if not 400. 
    //Either if the cell is empty or not, get the token the refreshCell promise has resolved/rejected to.
    //In case the cell is empty you need to end your turn by calling the function "endTurn()".
    //Reply to the client with the json: 
    //{gameWinner: the_gameWinner/null, token: theCurrentToken } and the status (200, 400, or 401)
    //res.status(status).json({gameWinner: the_gameWinner, token: theCurrentToken })
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
