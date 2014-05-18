/**
 * @module ui/rooms.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Room = require("model").Room;
/**
 * @class Rooms
 * @extends Component
 */
exports.Rooms = Component.specialize(/** @lends Rooms# */ {
    constructor: {
        value: function Rooms() {
            this.super();
            
            roomList = [];
            
            var lcRoom1 = new Room();
            lcRoom1.identifier = "room1";
            lcRoom1.name = "# Room 1";
            roomList.push(lcRoom1);
            
            var lcRoom2 = new Room();
            lcRoom2.identifier = "room2";
            lcRoom2.name = "# Room 2";
            roomList.push(lcRoom2);
            
        }
    },
    roomList: {
        value: null
    }
});
