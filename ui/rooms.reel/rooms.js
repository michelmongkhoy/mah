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
        }
    },
    rooms: {
        value: ["#Room1",
});
