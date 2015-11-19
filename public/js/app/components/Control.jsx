'use strict';

import React from 'react';
import {FlatButton} from 'material-ui';

var Control = React.createClass({
    handleReset: function () {
        this.props.onReset();
    },

    render: function () {
        return (
            <div>
                <FlatButton
                    label="Reset Game"
                    secondary={true}
                    onClick={this.handleReset}
                />
            </div>
        );
    }
});

module.exports = Control;
