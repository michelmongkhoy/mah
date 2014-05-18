/**
 * @module ui/play.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Player = require("/model/player.js").Player;

/**
 * @class Play
 * @extends Component
 */
exports.Play = Component.specialize(/** @lends Play# */ {
    constructor: {
        value: function Play() {
            this.super();
            
            this.players = [];

            var lcPlayer1 = new Room();
            lcPlayer1.identifier = "player1";
            lcPlayer1.name = "# PLayer 1";
            this.players.push(lcPlayer1);

            var lcPlayer2 = new Room();
            lcPlayer2.identifier = "room2";
            lcPlayer2.name = "# Player 2";
            this.players.push(lcPlayer2);
        }
    },
    players: {
        value: null
    }
});
