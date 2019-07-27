class Rectangle {
    length: number;
    breath: number;
    area(l: number, b: number): number {
        this.length = l;
        this.breath = b;
        return this.length * this.breath;
    }
}

let r = new Rectangle();

console.log('The area of rectangle: ' + r.area(3, 4));


