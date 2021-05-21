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
(function (a) {
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cat.prototype.getName = function () {
            return this.name;
        };
        return Cat;
    }(Animal));
    // let Animal = new Animal();   报错   父类不能实例化
    var cat = new Cat(); //子类可实例化
    cat.name = "mao";
    console.log(cat.getName());
    var point = { x: 0, y: 0 };
    // 一个类可以实现多个接口，但只能继承一个父类
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.speak = function () { };
        Person.prototype.eat = function () { };
        return Person;
    }());
})(a || (a = {}));
var b;
(function (b) {
    // 重写   子类重新实现并覆盖父类中的方法
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.speak = function () {
            // throw new Error("此方法不能调用")
            console.log('动物叫');
        };
        return Animal;
    }());
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cat.prototype.speak = function () {
            console.log('我们一起喵喵喵');
            _super.prototype.speak.call(this);
        };
        return Cat;
    }(Animal));
    var p = new Cat();
    p.speak(); //=>我们一起喵喵喵
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.speak = function () {
            console.log('我们一起汪汪汪');
        };
        return Dog;
    }(Animal));
    var dog = new Dog();
    dog.speak(); //=>我们一起汪汪汪   =>相当于子类重写了父类的speak方法  如果子类想调父类方法的话就用super.speak()(实际上只是把父类方法隐藏了，并不是干掉了)
    // super: 指向父类的原型   super.speak()是个整体  super.speak()  转译后= > Animal.prototype.speak()
})(b || (b = {}));
