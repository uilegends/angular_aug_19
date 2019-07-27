var myClass = (function () {
    function myClass() {
    }
    myClass.prototype.printMyName = function (n) {
        this.myName = n;
        console.log("Hi, My Self " + n);
    };
    return myClass;
})();
var callObj = new myClass();
callObj.printMyName('David');
