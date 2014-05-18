/**
 * @module ui/pick-songs.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Playlist = require("/model/playlist.js").Playlist;
var Song = require("/model/song.js").Song;

/**
 * @class PickSongs
 * @extends Component
 */
exports.PickSongs = Component.specialize(/** @lends PickSongs# */ {
    constructor: {
        value: function PickSongs() {
            this.super();
            
            // Init
            this.playlists = [];
            
            var lcPlaylist1 = new Playlist();
            lcPlaylist1.name = "Justin Bieber greatest hits";
            this.playlists.push(lcPlaylist1);
            
            var lcPlaylist2 = new Playlist();
            lcPlaylist2.name = "The Beatles";
            this.playlists.push(lcPlaylist2);
            
        }
    },
    playlists: {
        value: null
    },
    songs: {
        value: null
    }
});
