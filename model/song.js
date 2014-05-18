/**
 * @module model/song
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class Song
 * @extends Montage
 */
exports.Song = Montage.specialize(/** @lends Song# */ {
    constructor: {
        value: function Song() {
            this.super();
        }
    },
    identifier: {
        value: null
    },
    cover: {
        value: null
    }
});
