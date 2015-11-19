'use strict';

import React from 'react';
import {FontIcon} from 'material-ui';

var Cell = React.createClass({
    handleClick: function () {
        this.props.onClick();
    },

    render: function () {
        let style = {
            verticalAlign: 'bottom',
            fontSize: '64px'
        };

        return (
            <td className="game-cell" onClick={this.handleClick}>
                <FontIcon className="material-icons" style={style}>{this.props.value}</FontIcon>
            </td>
        );
    }
});

module.exports = Cell;
