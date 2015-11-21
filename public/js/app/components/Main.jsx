'use strict';

import React from 'react';
import _ from 'underscore';

import Table from './Table.jsx';
import Control from './Control.jsx';
import Score from './Score.jsx';

import Game from '../Game.js';


var Main = React.createClass({
    getInitialState: function() {
        let game = new Game();
        let players = {
            '1': {
                name: 'close', // x
                points: 0
            },
            '2': {
                name: 'radio_button_unchecked', // o
                points: 0
            }
        };

        this.winTimeout = null;
        this.turn = 0;

        return {
            table: game.table,
            players: players,
            currentPlayer: '1'
        };
    },

    selectCell: function(x, y) {
        let players;
        let winner;
        let table = this.state.table;

        if (!table[x][y].player.name && !this.winTimeout) {
            this.turn++;

            this.setState(function (state) {
                players = state.players;

                table[x][y].player = state.players[state.currentPlayer];
                winner = this._getWinner();

                if (winner) {
                    players[state.currentPlayer].points++;
                    this.winTimeout = window.setTimeout(this.resetTable, 3000);
                }

                if (this.turn == 9) {
                    this.winTimeout = window.setTimeout(this.resetTable, 3000);
                }

                return {
                    table: table,
                    players: players,
                    currentPlayer: this._getNextPlayer()
                }
            }.bind(this));
        }
    },

    resetGame: function() {
        this.setState(this.getInitialState());
    },

    resetTable: function() {
        let initialState = this.getInitialState();

        this.setState({
            table: initialState.table
        });
    },

    _searchWinner: function(array) {
        let winner;
        let currentPlayer = this.state.players[this.state.currentPlayer];

        var results = _.filter(array, cell => {
            return cell.player.name === currentPlayer.name;
        });

        if (results.length === 3) {
            winner = currentPlayer;
        }

        return winner;
    },

    _getWinner: function() {
        let dr = [];
        let dl = [];

        for (var i = 0; i < this.state.table.length; i++) {
            let h = [];
            let v = [];

            for (var j = 0; j < this.state.table[i].length; j++) {
                h.push(this.state.table[i][j]);
                v.push(this.state.table[j][i]);
            };

            let wh = this._searchWinner(h);
            let wv = this._searchWinner(v);

            if (wh || wv) {
                return wh || wv;
            }

            dr.push(this.state.table[i][i]);
            dl.push(this.state.table[i][2-i]);
        };

        let wdr = this._searchWinner(dr);
        let wdl = this._searchWinner(dl);

        return wdr || wdl;
    },

    _getNextPlayer: function() {
        let currentPlayer = this.state.players[this.state.currentPlayer];

        if (currentPlayer.name == this.state.players['1'].name) {
            return '2';
        }

        return '1';
    },

    render: function () {
        return (
            <div>
                <Table
                    data={this.state.table}
                    onSelectCell={this.selectCell}
                />
                <Score
                    currentPlayer={this.state.players[this.state.currentPlayer]}
                    players={this.state.players}
                />
                <Control onReset={this.resetGame} />
            </div>
        );
    }
});

module.exports = Main;
