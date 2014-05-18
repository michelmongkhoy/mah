/**
 * @module ui/start.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Start
 * @extends Component
 */
exports.Start = Component.specialize(/** @lends Start# */ {
    constructor: {
        value: function Start() {
            this.super();
        }
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
