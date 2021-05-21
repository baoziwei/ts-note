"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类型保护  就是更精确的看是哪种类型
var a;
(function (a_1) {
    // 1.typeof保护
    function double(input) {
        if (typeof input == 'string') {
            input.toLowerCase();
        }
        else if (typeof input == 'number') {
            input.toFixed(2);
        }
        else {
            input;
        }
    }
    // 2.instanceof保护
    var Animal = /** @class */ (function () {
        function Animal() {
            this.name = 'zhufeng';
        }
        return Animal;
    }());
    var Bird = /** @class */ (function (_super) {
        __extends(Bird, _super);
        function Bird() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.swing = 2;
            return _this;
        }
        return Bird;
    }(Animal));
    function getName(a) {
        if (a instanceof Bird) { //a是Bird的实例
            a.swing;
        }
        else {
            a.name;
        }
    }
    //   3.null保护
    function func(s) {
        //    if(s == null){ s = ''}
        //   s = s || ''
        // function en(){
        //     s = s || ''
        // }
        // en();
        return s.charAt(0); //非空断言
    }
    function getButton(button) {
        if (button.calss === 'warning') {
            button.text1;
        }
        else {
            button.text2;
        }
    }
    function getNumber(x) {
        if ('swing' in x) {
            x.swing;
        }
        else {
            x.leg;
        }
    }
})(a || (a = {}));
// 自定义的类型保护
var b;
(function (b) {
    function isBird(x) {
        return x.legs === 2; //返回了一个布尔值
    }
    function getAnimal(x) {
        if (isBird(x)) { //判断isBird(x)是否为true
            x.name1; //x就是鸟
            console.log('ppp', x.name1);
        }
        else {
            x.name2;
            console.log(x.name2);
        }
    }
    var x = { name1: 'Bird', legs: 2 };
    getAnimal(x);
})(b || (b = {}));
