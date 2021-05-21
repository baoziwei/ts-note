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
var a;
(function (a_1) {
    function getName(animal) {
        return animal.name;
    }
    var q = {
        name: 'zhufeng0',
        age: 10,
    };
    console.log(getName(q)); //  =>zhufeng0
    var p = {
        name: 'zhufeng1',
        age: 10,
        speak: function () { }
    };
    console.log(getName(p));
    // 把p传过来给了getName也行  在ts里和类型无关系，只和属性有关系，因为p里也有name字段，所以p也可（我要的你有就可以，反之我要的你没有不可以）     =>zhufeng1
    // 基本类型的兼容性
    var num = 1;
    var str = 'hello';
    num = str; //赋值
    var num2;
    var str2 = 'jiagou';
    num2 = str2; //因为字符串有toString()属性，所以str2可以赋值给num2
})(a || (a = {}));
var b;
(function (b_1) {
    // 类的兼容性
    //   跟类型无关，只看属性
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Bird = /** @class */ (function (_super) {
        __extends(Bird, _super);
        function Bird() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bird;
    }(Animal));
    var a;
    a = new Bird(); //父类的变量能指向子类的实例
    var b;
    b = new Animal(); //子类的变量不能指向父类的实例   因为父类没有swing属性
    b = { name: 'zhufeng' }; //不管这个对象的具体类型，只有有这个属性就可
})(b || (b = {}));
var c;
(function (c_1) {
    var sum;
    function f1(a, b) {
        return a;
    }
    sum = f1;
    function f2(a) {
        return a;
    }
    sum = f2;
    function f3(a, b, c) {
        return a;
    }
    var getPerson;
    function g1() {
        return { name: 'string', age: 10 };
    }
    getPerson = g1;
    function g2() {
        return { name: 'string' };
    }
    // getPerson = g2;  //少了可不行
    function g3() {
        return { name: 'string', age: 10, home: 'beijing' };
    }
    getPerson = g3; //多了可以
    var log;
    function log1(a) {
        console.log(a);
    }
    log = log1; //可以多参数，不可以少参数
    var x;
    var y;
    x = y; //可以赋值，因为将number传给<T>后变成的是一个{}空对象，将string传给<T>后变成返回的也是一个{}空对象，所以兼容
    var x1; //{data:string}
    var y2; //{data:number}
    //  4.枚举的兼容性
    //  枚举类型与数字类型兼容，并且数字类型与枚举类型兼容
    // 不同枚举类型之间是不兼容的
    var Colors;
    (function (Colors) {
        Colors[Colors["Red"] = 0] = "Red";
        Colors[Colors["Yellow"] = 1] = "Yellow";
    })(Colors || (Colors = {}));
    var c;
    c = Colors.Red; //=0
    c = 1;
    var d;
    d = Colors.Yellow; //1
})(c || (c = {}));
