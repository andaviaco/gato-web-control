'use strict';

import React from 'react';

var Cell = React.createClass({
    handleClick: function () {
        this.props.onClick();
    },

    render: function () {
        return (
            <td onClick={this.handleClick}>
                seleccion {this.props.value}
            </td>
        );
    }
});

module.exports = Cell;
