var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Worker2 = /** @class */ (function () {
    function Worker2(name) {
        this.name = name;
    }
    Worker2.prototype.doWorking = function () {
        console.log("일하러 가자1");
    };
    Worker2.prototype.goOut = function () {
        console.log("일하러 가자2");
    };
    Worker2.prototype.goForWork = function () {
        console.log("일하러 가자3");
    };
    return Worker2;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developer.prototype.doWorking = function () {
        console.log("개발 중");
    };
    return Developer;
}(Worker2));
var Corder = /** @class */ (function (_super) {
    __extends(Corder, _super);
    function Corder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Corder.prototype.doWorking = function () {
        console.log("코딩 중");
    };
    return Corder;
}(Worker2));
function doTest(w) {
    w.goForWork();
    w.goOut();
    w.doWorking();
}
var test_1 = new Developer();
doTest(test_1);
var test_2 = new Corder();
doTest(test_2);
//# sourceMappingURL=Developer.js.map