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
    hasTemplate: {
        value: true
    },
    constructor: {
        value: function MahButtonHome() {
            this.super();
            this.classList.add("MahButtonHome");
        }
    }
});
