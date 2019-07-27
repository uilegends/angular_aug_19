class myClass {
    myName: string;
    printMyName(n: string) {
        this.myName = n;
        console.log(`Hi, My Self ${n}`);
    }
}

let callObj = new myClass();
callObj.printMyName('David');







