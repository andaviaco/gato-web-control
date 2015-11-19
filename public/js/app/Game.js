import _ from 'underscore';

var Game = function () {
    var table = [
        [
            {
                key: 0,
                player: ''
            },
            {
                key: 1,
                player: ''
            },
            {
                key: 2,
                player: ''
            }
        ],
        [
            {
                key: 3,
                player: ''
            },
            {
                key: 4,
                player: ''
            },
            {
                key: 5,
                player: ''
            }
        ],
        [
            {
                key: 6,
                player: ''
            },
            {
                key: 7,
                player: ''
            },
            {
                key: 8,
                player: ''
            }
        ]
    ];


    this.table = table;
};

module.exports = Game;
