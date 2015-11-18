'use strict';

import React from 'react';
import initial_config from '../../../data/initial_config.js';

var Main = React.createClass({
    _renderColumn: function (column) {
        return (
            <td key={column.key}>
                {column.key}
            </td>
        );
    },

    _renderRow: function (row, index) {
        return (
            <tr key={index}>
                {row.map(this._renderColumn)}
            </tr>
        );
    },

    render: function () {
        return (
            <div>
                <table>
                    <tbody>
                        {initial_config.table.map(this._renderRow)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Main;
