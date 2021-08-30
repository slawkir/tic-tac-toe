class TicTacToe {
    constructor() {
        this.field = [[null, null, null],[null, null, null],[null, null, null]];
        this.currentSymbol = 'x';
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.currentSymbol;
            this.currentSymbol = (this.currentSymbol === 'x')?'o':'x';
            console.log(this.field);
        }
    }

    isFinished() {
        return (this.getWinner() || this.isDraw())?true:false
    }

    getWinner() {
        if (((this.field[0][0] === this.field[0][1]) && (this.field[0][1] === this.field[0][2]) && ('x' === this.field[0][2])) ||
        ((this.field[1][0] === this.field[1][1]) && (this.field[1][1] === this.field[1][2]) && ('x' === this.field[1][2])) ||
        ((this.field[2][0] === this.field[2][1]) && (this.field[2][1] === this.field[2][2]) && ('x' === this.field[2][2])) ||
        ((this.field[0][0] === this.field[1][0]) && (this.field[1][0] === this.field[2][0]) && ('x' === this.field[2][0])) ||
        ((this.field[0][1] === this.field[1][1]) && (this.field[1][1] === this.field[2][1]) && ('x' === this.field[2][1])) ||
        ((this.field[0][2] === this.field[1][2]) && (this.field[1][2] === this.field[2][2]) && ('x' === this.field[2][2])) ||
        ((this.field[0][0] === this.field[1][1]) && (this.field[1][1] === this.field[2][2]) && ('x' === this.field[2][2])) ||
        ((this.field[0][2] === this.field[1][1]) && (this.field[1][1] === this.field[2][0]) && ('x' === this.field[2][0]))) {
            this.winner = 'x';
            return 'x'
        } else if (((this.field[0][0] === this.field[0][1]) && (this.field[0][1] === this.field[0][2]) && ('o' === this.field[0][2])) ||
        ((this.field[1][0] === this.field[1][1]) && (this.field[1][1] === this.field[1][2]) && ('o' === this.field[1][2])) ||
        ((this.field[2][0] === this.field[2][1]) && (this.field[2][1] === this.field[2][2]) && ('o' === this.field[2][2])) ||
        ((this.field[0][0] === this.field[1][0]) && (this.field[1][0] === this.field[2][0]) && ('o' === this.field[2][0])) ||
        ((this.field[0][1] === this.field[1][1]) && (this.field[1][1] === this.field[2][1]) && ('o' === this.field[2][1])) ||
        ((this.field[0][2] === this.field[1][2]) && (this.field[1][2] === this.field[2][2]) && ('o' === this.field[2][2])) ||
        ((this.field[0][0] === this.field[1][1]) && (this.field[1][1] === this.field[2][2]) && ('o' === this.field[2][2])) ||
        ((this.field[0][2] === this.field[1][1]) && (this.field[1][1] === this.field[2][0]) && ('o' === this.field[2][0]))) {
            this.winner = 'o';
            return 'o';
        } else {
            return null
        }
    }

    noMoreTurns() {
        if (!((this.field[0].indexOf(null) !== -1 ) ||
        (this.field[1].indexOf(null) !== -1 ) ||
        (this.field[2].indexOf(null) !== -1 ))) {
            return true
        } else {
            return false }
    }

    isDraw() {
        this.getWinner()
        if (this.winner === 'x' || this.winner === 'o') {
            return false;
        }
        if (this.noMoreTurns()) {
            this.winner = 'draw';
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;

