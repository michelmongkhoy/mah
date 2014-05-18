/**
 * @module ui/rooms.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Room = require("/model/room.js").Room;
/**
 * @class Rooms
 * @extends Component
 */
exports.Rooms = Component.specialize(/** @lends Rooms# */ {
    constructor: {
        value: function Rooms() {
            this.super();
            
            this.roomList = [];
            
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
    roomList: {
        value: null
    },
    substitutionValue: {
        value: null;
    },
    handleCreateButtonAction: {
        value: function(event){
            this.substitutionValue = "rooms-create";
            console.log("handleCreateButtonAction");
        }
    },
    handleJoinButtonAction: {
        value: function(event) {
            this.substitutionValue = "rooms-join";
            console.log("handleJoinButtonAction");
        }
    }
});
