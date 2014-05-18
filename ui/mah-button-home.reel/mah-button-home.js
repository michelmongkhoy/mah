/**
 * @module ui/mah-button-home.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var AbstractButton = require("montage/ui/base/abstract-button").AbstractButton;

/**
 * @class MahButtonHome
 * @extends Component
 */
exports.MahButtonHome = AbstractButton.specialize(/** @lends MahButtonHome# */ {

    constructor : {
        value: function Button() {
            this.super();
        }
    }
});
