'use strict';

import React from 'react';

import Table from './Table.jsx';

import Game from '../Game.js';

let players = {
    '1': 'x',
    '2': 'o'
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
            </div>
        );
    }
});

module.exports = Main;
