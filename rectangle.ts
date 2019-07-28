export class Rectangle {
    length: number;
    breath: number;
    area(l: number, b: number): number {
        this.length = l;
        this.breath = b;
        return this.length * this.breath;
    }
}



