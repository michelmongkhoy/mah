/**
 * @module services/playlist-service
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class PlaylistService
 * @extends Montage
 */
exports.PlaylistService = Montage.specialize(/** @lends PlaylistService# */ {
    constructor: {
        value: function PlaylistService() {
            this.super();
        }
    }
});
