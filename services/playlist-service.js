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
    },
    loadPlaylist: {
        value: function() {
            var deferred = Promise.defer();

            deferred.resolve(parser.parse(responseText));
            deferred.reject(error);
            


            return deferred.promise;
        }
    }
});
