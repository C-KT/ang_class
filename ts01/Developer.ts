interface Work{
    goForWork():void;
    doWorking():void;
    goOut():void;
}

class Worker2 implements Work{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    doWorking():void{
        console.log("일하러 가자1");
    }
    goOut():void{
        console.log("일하러 가자2");
    }
    goForWork():void{
        console.log("일하러 가자3");
    }
}
class Developer extends Worker2{
    doWorking():void{
        console.log("개발 중");
    }
}
class Corder extends Worker2{
    doWorking():void{
        console.log("코딩 중");
    }
}
function doTest(w:Work){
    w.goForWork();
    w.goOut();
    w.doWorking();    
}

let test_1:Work = new Developer();
doTest(test_1);
let test_2:Work = new Corder();
doTest(test_2);