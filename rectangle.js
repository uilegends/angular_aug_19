"use strict";
exports.__esModule = true;
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.area = function (l, b) {
        this.length = l;
        this.breath = b;
        return this.length * this.breath;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
