"use strict";
// 任意属性
var a;
(function (a) {
    var obg = {
        x: 1,
        y: 2,
        z: 3
    };
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.speak = function () { };
        Person.prototype.speakChinese = function () { };
        return Person;
    }());
    var circle = {
        PI: 3.14,
        radius: 10
    };
    var cost = function (price) {
        return price * .8;
    };
    var arr = ['1', '2', '3'];
    console.log(arr);
    var obj2 = {
        1: '1',
        2: '2'
    };
    console.log(obj2);
    // type  interface
})(a || (a = {}));
var b;
(function (b) {
    // 类接口  可以用接口来装饰类；
    //  学ts核心  接口+泛型 
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.speak = function () { };
        return Dog;
    }());
    // 用接口来约束类
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    function createAnimal(clazz, name) {
        return new clazz(name);
    }
    var a = createAnimal(Animal, 'zhufeng');
})(b || (b = {}));
