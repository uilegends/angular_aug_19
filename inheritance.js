var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
})();
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
})(Animal);
var dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
