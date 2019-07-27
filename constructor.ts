class Rectangle {

    length: number;
    breath: number;
    res: number;

    constructor(l: number, b: number) {
        this.length = l;
        this.breath = b;
        this.res = this.length * this.breath;
    }
}

let result = new Rectangle(2, 4);
console.log(result.res);
