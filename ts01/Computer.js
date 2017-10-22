var Computer;
(function (Computer) {
    Computer[Computer["Desktop"] = 0] = "Desktop";
    Computer[Computer["Laptop"] = 1] = "Laptop";
    Computer[Computer["Netbook"] = 2] = "Netbook";
})(Computer || (Computer = {}));
;
var cp = Computer.Laptop;
console.log(cp);
var cp2;
cp2 = "asfsdf";
cp2 = 1212;
cp2 = true;
var EE = /** @class */ (function () {
    function EE() {
        this.name = "nam";
    }
    return EE;
}());
var ee = new EE();
var str1 = "str";
var str2 = "str";
var str3 = new String("str");
var str41 = new String("str");
String.prototype.equals = function (str) {
    if (typeof str == "object") {
        return str.toString() == this.toString();
    }
};
console.log("str1==str2 :" + (str1 == str2));
console.log("str1==str3 :" + (str1 == str3));
console.log("str3==str41 :" + (str3 == str41));
console.log("str1===str2 :" + (str1 === str2));
console.log("str1===str3 :" + (str1 === str3));
console.log("str3===str41 :" + (str3 === str41));
console.log("str3 equals str41 :" + (str3.equals(str41)));
//# sourceMappingURL=Computer.js.map