var userList = new Array();
for (var i = 0; i < 5; i++) {
    addUserList(userList, i);
}
function addUserList(userList, num) {
    userList.push(num);
}
console.log(userList);
var testList = new Array();
testList.push(1);
testList.push("1");
testList.push(true);
var tList = new Array();
tList.push(true);
var tt = 3;
var tt2 = 4;
console.log(typeof tt2);
tt2 = "aststsdf";
console.log(typeof tt2);
var add = function (n1, n2) {
    if (typeof n1 != "number") {
        return "숫자가 아니다1";
    }
    if (typeof n2 != "number") {
        return "숫자가 아니다2";
    }
    return n1 + n2;
};
console.log(add(1, 2));
var Exam = /** @class */ (function () {
    function Exam() {
    }
    return Exam;
}());
var examList = new Array();
var e = new Exam();
e.name = "e1";
examList.push(e);
e = new Exam();
e.name = "e2";
examList.push(e);
console.log(examList);
var Lotto = /** @class */ (function () {
    function Lotto() {
        this.numbers = new Array();
    }
    Lotto.prototype.makeNumbers = function () {
        while (this.numbers.length < 6) {
            var num = Math.floor(Math.random() * 20) + 1;
            if (this.valiNumbers(num)) {
                continue;
            }
            this.numbers.push(num);
        }
    };
    Lotto.prototype.valiNumbers = function (num) {
        return this.numbers.indexOf(num) != -1;
    };
    Lotto.prototype.getNumbers = function () {
        return this.numbers;
    };
    return Lotto;
}());
var lot = new Lotto();
lot.makeNumbers();
console.log(lot.getNumbers());
var arrs = [new Lotto(), new Lotto(), new Lotto(), new Lotto(), new Lotto()];
for (var arr in arrs) {
    console.log(arrs[arr]);
}
for (var i = 0, max = arrs.length; i < max; i++) {
    console.log(arrs[i]);
}
var mn = new Lotto();
var lot1 = new Lotto();
mn = lot1;
var test = new Set();
test.add("1");
test.add("1");
for (var i in test) {
    console.log(test[i]);
}
//# sourceMappingURL=test_01.js.map