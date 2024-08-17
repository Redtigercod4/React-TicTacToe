class TicTacToe {
  constructor() {
    // Setting up the Players with set Markers
    this.game = {
      player: "X",
      ai: "O",
    };
  }

  // Returns the Markers for the Player and AI
  getGameMarkers() {
    return this.game;
  }

  // Returns the state of the game Board
  getGameBoard(board) {
    return board;
  }

  // Checks if the board has any spaces
  checkForSpaces(board) {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[row][col] === "") {
          return true;
        }
        return false;
      }
    }
  }

  // Checking if there is any winning moves
  // If the matching entry is by the player, +10 is returned. if the matching entry is by the ai, -10 is returned.
  checkForWinner = (board) => {
    // Creates a function that when called uses a loop to check for any matching entries across rows
    for (let row = 0; row < 3; row++) {
      if (board[row][0] == board[row][1] && board[row][1] == board[row][2]) {
        if (board[row][0] == this.game.player) return +10;
        else if (board[row][0] == this.game.ai) return -10;
      }
    }
    // Creates a function that when called uses a loop to check for any matching entries across columns
    for (let col = 0; col < 3; col++) {
      if (board[0][col] == board[1][col] && board[1][col] == board[2][col]) {
        if (board[0][col] == this.game.player) return +10;
        else if (board[0][col] == this.game.ai) return -10;
      }
    }

    if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
      if (board[0][0] == this.game.player) return +10;
      else if (board[0][0] == this.game.ai) return -10;
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
      if (board[0][2] == this.game.player) return +10;
      else if (board[0][2] == this.game.ai) return -10;
    }
    return 0;
  };

  minimax = (board, depth, isMax) => {
    const game = new TicTacToe();
    let total = game.checkForWinner(board);

    if (total == 10) {
      return total;
    }

    if (total == -10) {
      return total;
    }

    if (game.checkForSpaces(board) == false) {
      return 0;
    }

    if (isMax) {
      let best = -1000;

      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          if (board[row][col] == "_") {
            board[row][col] = this.game.ai;
            best = Math.max(best, game.minimax(board, depth + 1, !isMax));
            board[row][col] = "_";
          }
        }
      }
      return best;
    } else {
      let best = 1000;

      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          if (board[row][col] == "_") {
            board[row][col] = this.game.ai;
            best = Math.min(best, game.minimax(board, depth + 1, !isMax));
            board[row][col] = "_";
          }
        }
      }
      return best;
    }
  };

  bestMovePossible = (board) => {
    let bestVal = -1000;
    let bestMove = new TicTacToe();
    bestMove.row = -1;
    bestMove.col = -1;

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[row][col] == "_") {
          board[row][col] = this.game.ai;
          let moveVal = bestMove.minimax(board, 0, false);
          board[row][col] = "_";

          if (moveVal > bestVal) {
            bestMove.row = row;
            bestMove.col = col;
            bestVal = moveVal;
          }
        }
      }
    }
    let recommendedMove = [bestMove.row, bestMove.col]
    return recommendedMove;
  };
}

module.exports = { TicTacToe };