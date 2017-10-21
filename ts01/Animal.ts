interface Animal{
    name:string;
    age:number;
    height:number;
    printInfo():void;
}

class Cat implements Animal{
    name : string;
    age:number;
    height:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    printInfo(){
        console.log("이름:" + this.name);
        console.log("나이:" + this.age);
    }
}

class Bird implements Animal{
    name : string;
    age:number;
    height:number;
    kind:string;
    constructor(kind:string){
        this.kind = kind;
    }
    printInfo():void{
        //super.printInfo();
        console.log("이 새의 종류는 " + this.kind);
    }
}
class Chicken extends Bird{
    constructor(kind:string){
        super(kind);
    }
    printInfo():void{
        super.printInfo();
        console.log("test");
    }
}
let c:Bird = new Chicken("닭");
c.printInfo();

function printSomething(a:Animal){
    a.printInfo();
}

let dd:Cat = new Cat("이름", 2);
dd.printInfo();
printSomething(dd);