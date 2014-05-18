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
            
            lcPlaylist1.songs = [];
            
            var lcSong11 = new Song();
            lcSong11.name = "Baby";
            lcPlaylist1.songs.push(lcSong11);
            
            var lcSong12 = new Song();
            lcSong12.name = "Boyfriend";
            lcPlaylist1.songs.push(lcSong12);
                        
            this.playlists.push(lcPlaylist1);
            
            var lcPlaylist2 = new Playlist();
            lcPlaylist2.name = "The Beatles";
            
            lcPlaylist2.songs = [];

            var lcSong21 = new Song();
            lcSong21.name = "Let It Be";
            lcPlaylist2.songs.push(lcSong21);

            var lcSong22 = new Song();
            lcSong22.name = "Yesterday";
            lcPlaylist2.songs.push(lcSong22); 
            
            this.playlists.push(lcPlaylist2);
            
        }
    },
    playlists: {
        value: null
    },
    songs: {
        value: null
    },
    handlePlaylistButtonAction: {
        value: function(event) {
            var selectedIndex = event.detail.playlistIndex;
            console.log(selectedIndex);
            this.songs = this.playlists[selectedIndex].songs;
        }
    },
    handleSongButtonAction: {
        value: function(event) {
        }
    }
});
