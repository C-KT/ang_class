class UserDTO{
    private name : string;
    private age : number;
    public address : string;
    setName(name:string):void{
        this.name = name;
    }
    getName():string{
        return this.name;
    }
}

let hong:UserDTO = new UserDTO();
//hong.name    = "abc"
hong.address = "서울시 성동구 행당2동"
hong.setName("최규태");
console.log(hong.getName());