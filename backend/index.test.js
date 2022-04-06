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
})