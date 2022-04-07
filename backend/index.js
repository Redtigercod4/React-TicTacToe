class TicTacToe {
    constructor(board) {
        // Setting up the Players with set Markers
        this.game = {
            player: 'X',
            ai: 'O'
        }

        // Game Board setup as an array and will be given to the frontend via a GET Request
        this.board = board;
    }

    // Returns the Markers for the Player and AI
    getGameMarkers() {
        return this.game;
    }

    // Returns the state of the game Board
    getGameBoard() {
        return this.board;
    }

    // Checks if the board has any spaces
    checkForSpaces() {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(this.board[i][j] === "") {
                    return true;
                } return  false;
            }
        }
    }

    // Checking if there is any winning moves
    checkForWinner()  {
        for (let i = 0; i <  3; i++) {
            if (this.board[i][0] == this.board[i][1] && this.board[i][1] == this.board[i][2]) {
                if (this.board[i][0] == this.game.player) {
                    return 1;
                } else if (this.board[i][0] ==this.game.ai) {
                    return 2;
                }
            }
        }

        for (let j = 0; j < 3; j++) {
            if (this.board[0][j] == this.board[1][j] && this.board[1][j] == this.board[2][j]) {
                if (this.board[0][j] ==  this.game.player) {
                    return 1;
                } else if (this.board[0][j] == this.game.ai) {
                    return 2;
                }
            }
        }

        if (this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][0]) {
            if (this.board[0][2]  ==this.game.player) {
                return 1;
            } else if (this.board[0][2] == this.game.ai){
                return 2
            }
        } return 0;
    } 
}

module.exports = { TicTacToe };