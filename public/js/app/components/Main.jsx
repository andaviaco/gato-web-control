'use strict';

import React from 'react';

import Table from './Table.jsx';
import Control from './Control.jsx';

import Game from '../Game.js';

let players = {
    '1': 'close', // x
    '2': 'radio_button_unchecked' // o
};

var Main = React.createClass({
    getInitialState: function() {
        let game = new Game();

        return {
            table: game.table,
            currentPlayer: players['1']
        };
    },

    selectCell: function(x, y) {
        let table = this.state.table;

        if (!table[x][y].player) {
            table[x][y].player = this.state.currentPlayer;

            this.setState({
                table: table,
                currentPlayer: this._getNextPlayer()
            });
        }
    },

    resetGame: function() {
        this.setState(this.getInitialState());
    },

    _getNextPlayer: function() {
        if (this.state.currentPlayer == players['1']) {
            return players['2'];
        }

        return players['1'];
    },

    render: function () {
        return (
            <div>
                <Table
                    data={this.state.table}
                    onSelectCell={this.selectCell}
                />
                <Control onReset={this.resetGame} />
            </div>
        );
    }
});

module.exports = Main;
