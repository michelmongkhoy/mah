/**
 * @module model/playlist
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class Playlist
 * @extends Montage
 */
exports.Playlist = Montage.specialize(/** @lends Playlist# */ {
    constructor: {
        value: function Playlist() {
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
