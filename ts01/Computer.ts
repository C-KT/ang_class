enum Computer{Desktop, Laptop, Netbook};

let cp:Computer = Computer.Laptop;

console.log(cp);

let cp2:any;
cp2 = "asfsdf";
cp2 = 1212;
cp2 = true;

class EE{
    name:string = "nam";
}
let ee:EE = new EE();
let str1 : string = "str";
let str2 : string = "str";
let str3 : String = new String("str");
let str41 : String = new String("str");
String.prototype.equals = function(str){
    if(typeof str == "object"){
        return str.toString() == this.toString();
    }
}
console.log("str1==str2 :" +(str1==str2));
console.log("str1==str3 :" +(str1==str3));
console.log("str3==str41 :" +(str3==str41));
console.log("str1===str2 :" +(str1===str2));
console.log("str1===str3 :" +(str1===str3));
console.log("str3===str41 :" +(str3===str41));
console.log("str3 equals str41 :" +(str3.equals(str41));