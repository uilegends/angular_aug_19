var Rectangle = (function () {
    function Rectangle(l, b) {
        this.length = l;
        this.breath = b;
        this.res = this.length * this.breath;
    }
    return Rectangle;
})();
var result = new Rectangle(2, 4);
console.log(result.res);
