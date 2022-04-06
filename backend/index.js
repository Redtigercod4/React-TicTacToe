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
            for(let j = 0; i < 3; i++) {
                if(this.board[i][j] === "") {
                    return true;
                } return  false;
            }
        }
    }
}

module.exports = { TicTacToe };