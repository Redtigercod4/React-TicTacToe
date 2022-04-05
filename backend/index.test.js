const { TicTacToe } = require('./index');

describe('TicTacToe logic', () => {
    it('If player is X, AI is O', () => {
        const game = new TicTacToe('X');
        expect(game.getGameMarkers().ai).toBe('O');
    })
})