const { TicTacToe } = require('./index');

describe('TicTacToe logic', () => {
    it('Checks if AI is O and Player is X', () => {
        // Calls the TicTacToe Class
        const game = new TicTacToe();

        // Calls the getGameMarkers method and checks that the AI equals O
        expect(game.getGameMarkers().ai).toBe('O');

        // Calls the getGameMarkers method and checks that the Player equals X
        expect(game.getGameMarkers().player).toBe('X');
    })

    it('New Game should have empty board', () => {

        // Creates an empty board to simulate a new game
        let board = [["", "", ""], ["", "", ""], ["", "", ""]]

        // Calls the TicTacToe Class and passes the board variable to the constructor
        const game = new TicTacToe(board);

        // Calls the getGameBoard method and checks that the board is empty
        expect(game.getGameBoard()).toEqual([["", "", ""], ["", "", ""], ["", "", ""]]);
    })

    it('Checks Board for spaces with board being empty', () => {

        // Creates an empty board to simulate a new game
        let board = [["", "", ""], ["", "", ""], ["", "", ""]]

        // Calls the TicTacToe Class and passes the board variable to the constructor
        const game = new TicTacToe(board);

        // Calls the checkForSpaces method and checks that the board has spaces
        expect(game.checkForSpaces()).toBe(true);
    })

    it('Checks Board for spaces with board being full', () => {

        // Creates a full board to simulate the end of a game
        let board = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]]

        // Calls the TicTacToe Class and passes the board variable to the constructor
        const game = new TicTacToe(board);

        // Calls the checkForSpaces method and checks that the board has no spaces
        expect(game.checkForSpaces()).toBe(false)
    })

    it('Checks the rows and columns of the board if there is a winning move with no chance of one', () => {

        // Creates a board with no winning moves
        let board = [["X", "O", ""], ["X", "", ""], ["", "", "X"]]

        // Calls the TicTacToe Class and passes the board variable to the constructor
        const game = new TicTacToe(board);

        // Calls the checkForWinner method and checks that there is no winning move
        expect(game.checkForWinner()).toEqual(0)
    })

    it('Checks the rows and columns of the board if there is a winning move with a chance of one horizontally', () => {

        // Creates a board with a winning move
        let board = [["O", "O", "_"], ["X", "O", "X"], ["_", "X", "X"]]

        // Calls the TicTacToe Class and passes the board variable to the constructor
        const game = new TicTacToe(board);

        // Calls the checkForWinner method and checks that there is a winning move horizontally on the top row
        expect(game.checkForWinner()).toEqual(1)
    })

    it('Checks the rows and columns of the board if there is a winning move with a chance of one vertically', () => {

        // Creates a board with a winning move
        let board = [["X", "O", "X"], ["X", "O", "O"], ["O", "_", "X"]]

        // Calls the TicTacToe Class and passes the board variable to the constructor
        const game = new TicTacToe(board);

        // Calls the checkForWinner method and checks that there is a winning move vertically on the midde column
        expect(game.checkForWinner()).toEqual(1)
    })

    it('Checks the rows and columns of the board if there is a winning move with a chance of one diagonally', () => {

        // Creates a board with a winning move
        let board = [["O", "O", "X"], ["X", "O", "O"], ["X", "X", "_"]]

        // Calls the TicTacToe Class and passes the board variable to the constructor
        const game = new TicTacToe(board);

        // Calls the checkForWinner method and checks that there is a winning move diagonally
        expect(game.checkForWinner()).toEqual(1)
    })
})