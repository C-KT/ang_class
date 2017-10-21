var Robot = /** @class */ (function () {
    function Robot() {
        this.speed = 30;
    }
    Robot.prototype.run = function () {
        return "로봇이" + this.speed + "정도로 뜁니다.";
    };
    Robot.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    return Robot;
}());
var Person = /** @class */ (function () {
    function Person() {
        this.speed = 30;
    }
    Person.prototype.run = function () {
        return this.speed + "정도로 뜁니다.";
    };
    Person.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    return Person;
}());
function test(vari) {
    console.log(vari.run());
}
var p = new Person();
p.setSpeed(50);
var str4 = p.run();
console.log(str4);
var r = new Robot();
r.setSpeed(1000);
str4 = r.run();
console.log(str4);
//# sourceMappingURL=interface.js.map