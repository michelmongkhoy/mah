/**
 * @module ui/play.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Play
 * @extends Component
 */
exports.Play = Component.specialize(/** @lends Play# */ {
    constructor: {
        value: function Play() {
            this.super();
            
            this.players = [];

            var lcRoom1 = new Room();
            lcRoom1.identifier = "room1";
            lcRoom1.name = "# Room 1";
            this.roomList.push(lcRoom1);

            var lcRoom2 = new Room();
            lcRoom2.identifier = "room2";
            lcRoom2.name = "# Room 2";
            this.roomList.push(lcRoom2);
        }
    },
    players: {
        value: null
    }
});
