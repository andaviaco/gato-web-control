'use strict';

import React from 'react';

import Cell from './Cell.jsx';

var Table = React.createClass({
    selectCell: function (x, y) {
        this.props.onSelectCell(x, y);
    },

    _renderColumn: function (x) {
        return function (column, y) {
            return (
                <Cell
                    key={column.key}
                    value={column.player}
                    onClick={this.selectCell.bind(this, x, y)}
                />
            );
        }.bind(this);
    },

    _renderRow: function (row, x) {
        return (
            <tr key={x}>
                {row.map(this._renderColumn(x))}
            </tr>
        );
    },

    render: function () {
        return (
            <table>
                <tbody>
                    {this.props.data.map(this._renderRow)}
                </tbody>
            </table>
        );
    }
});

module.exports = Table;
