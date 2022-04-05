const { TicTacToe } = require('../index');

describe('TicTacToe logic', () => {
    it('If player is X, AI is O', () => {
        const game = new TicTacToe();
        game.Player = 'X';

        expect(game.ai).toBe('O');
    })
})