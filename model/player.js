/**
 * @module model/player
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class Player
 * @extends Montage
 */
exports.Player = Montage.specialize(/** @lends Player# */ {
    constructor: {
        value: function Player() {
            this.super();
        }
    }
});
