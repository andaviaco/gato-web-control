'use strict';

import React from 'react';
import {FontIcon} from 'material-ui';

var Control = React.createClass({
    render: function () {
        return (
            <div>
                <p>Turn: <FontIcon className="material-icons">{this.props.currentPlayer.name}</FontIcon></p>

                <h4>Score</h4>
                <p>Jugador 1: {this.props.players['1'].points}</p>
                <p>Jugador 2: {this.props.players['2'].points}</p>
            </div>
        );
    }
});

module.exports = Control;
