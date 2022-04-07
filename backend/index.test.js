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
        const game = new TicTacToe();

        // Calls the getGameBoard method and checks that the board is empty
        expect(game.getGameBoard(board)).toEqual([["", "", ""], ["", "", ""], ["", "", ""]]);
    })

    it('Checks Board for spaces with board being empty', () => {

        // Creates an empty board to simulate a new game
        let board = [["", "", ""], ["", "", ""], ["", "", ""]]

        // Calls the TicTacToe Class and passes the board variable to the constructor
        const game = new TicTacToe();

        // Calls the checkForSpaces method and checks that the board has spaces
        expect(game.checkForSpaces(board)).toBe(true);
    })

    it('Checks Board for spaces with board being full', () => {

        // Creates a full board to simulate the end of a game
        let board = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]]

        // Calls the TicTacToe Class and passes the board variable to the constructor
        const game = new TicTacToe();

        // Calls the checkForSpaces method and checks that the board has no spaces
        expect(game.checkForSpaces(board)).toBe(false)
    })

    it('Checks the rows and columns of the board if there is a winning move with no chance of one', () => {

        // Creates a board with no winning moves
        let board = [["X", "O", ""], ["X", "", ""], ["", "", "X"]]

        // Calls the TicTacToe Class and passes the board variable to the constructor
        const game = new TicTacToe();

        // Calls the checkForWinner method and checks that there is no winning move
        expect(game.checkForWinner(board)).toEqual(0)
    })

    it('Checks the rows and columns of the board if there is a winning move with a chance of one horizontally', () => {

        // Creates a board with a winning move
        let board = [['X', '_', 'O'], ['_', 'X', 'O'], ['_', '_', 'X']];

        // Calls the TicTacToe Class and passes the board variable to the constructor
        const game = new TicTacToe();

        let total = game.checkForWinner(board)

        // Calls the checkForWinner method and checks that there is a winning move horizontally on the top row
        expect(total).toEqual(10)
    })

    it('Checks the rows and columns of the board if there is a winning move with a chance of one vertically', () => {

        // Creates a board with a winning move
        let board = [["O", "_", "X"], ["_", "O", "X"], ["_", "_", "O"]]

        // Calls the TicTacToe Class and passes the board variable to the constructor
        const game = new TicTacToe(board);

        let total = game.checkForWinner(board)

        // Calls the checkForWinner method and checks that there is a winning move vertically on the midde column
        expect(total).toEqual(-10)
    })

    it('Checks the minimax algorithm with test board 1 and ensures that the best value for the board is met', () => {

        let board = [['X', '_', 'O'], ['_', 'X', 'O'], ['_', '_', 'X']];

        const game = new TicTacToe();

        const minimax = game.minimax(board, 0, false);

        expect(minimax).toEqual(10)


    })

    it('Checks the minimax algoritm with test board 2 and ensures that the best value for the board is met', () => {
        
        let board = [["O", "X", "X"], ["_", "O", "X"], ["_", "_", "O"]];

        const game = new TicTacToe();

        const minimax = game.minimax(board, 1, false)

        expect(minimax).toEqual(-10)
    })

    it('Checks the minimax algoritm with test board 3 and ensures that the best value for the board is met', () => {
        
        let board = [["O", "X", "X"], ["O", "O", "X"], ["X", "X", "O"]];

        const game = new TicTacToe();

        const minimax = game.minimax(board, 0, true)

        expect(minimax).toEqual(-10)
    })

    it('Checks the bestMove function with test board 1 and ensures that the best postition is recommended', () => {

        let board = [['X', '_', 'O'], ['_', 'X', 'O'], ['_', '_', 'X']]; 

        const game = new TicTacToe();

        expect(game.bestMovePossible(board)).toEqual([0, 1])
    })

    it('Checks the bestMove function with test board 2 and ensures that the best postition is recommended', () => {

        let board = [["X", "O", "X"], ["X", "O", "_"], ["_", "X", "_"]];

        const game = new TicTacToe();

        expect(game.bestMovePossible(board)).toEqual([1, 2])
    })

    it('Checks the bestMove function with test board 3 and ensures that the best postition is recommended', () => {

        let board = [["X", "O", "X"], ["X", "X", "O"], ["_", "X", "_"]];

        const game = new TicTacToe();

        expect(game.bestMovePossible(board)).toEqual([2, 0])
    })
})