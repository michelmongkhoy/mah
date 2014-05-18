/**
 * @module model/room
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class Room
 * @extends Montage
 */
exports.Room = Montage.specialize(/** @lends Room# */ {
    constructor: {
        value: function Room() {
            this.super();
        }
    },
    identifier: {
        value: null
    },
    name: {
        value: null
    }
});
