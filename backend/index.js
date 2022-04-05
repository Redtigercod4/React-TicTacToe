class TicTacToe {
    constructor() {
        this.game= {
            player: 'X',
            ai: 'O'
        }
    }
    
    getGameMarkers() {
        return this.game;
    }
}

module.exports = { TicTacToe };