"use strict";
// ###  装饰器（东西挺多）
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 5.8  装饰器（实际上就是一个函数）
// 写法分为  普通装饰器（不传参数）  和   装饰器工厂（传参数）
// 5.8.1类装饰器：用来声明，用来监视、修改或替换类定义
// 装饰器执行顺序：属性和方法执行（谁先写谁执行） 》 方法（先参数再方法，而且  他们一定会在一起） 》 类（如果是同类型的，先执行后写的（也可以理解为谁距离class Person近就先执行谁））
// 类装饰器
var s;
(function (s) {
    function enhancer(target) {
        // target.xx = "Person"   这样写 p.xx  是undefined，因为target是实例，所以得在原型省上加属性
        target.prototype.xx = "大写的XX";
        target.prototype.yy = "大写的YY";
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person = __decorate([
            enhancer //随便起的名字
        ], Person);
        return Person;
    }());
    var p = new Person();
    console.log(p.xx); //实例的属性
    console.log(p.yy);
    // console.log(Person.xx);   //类的属性  
})(s || (s = {}));
// 把类整个替换 (相当于子类继承父类，达到增强父类的效果)
var b;
(function (b) {
    /* function enhancer(name: string){ */
    function enhancer() {
        return function enhancer(target) {
            /*  return function (target: any){
                 return class extends Person{
                    constructor(age:number,name:string){
                        super(age,name);
                     //    this.name = name;
                    }
                    getAge(){
                        console.log(this.age);
                    }
                 } */
            return /** @class */ (function (_super) {
                __extends(class_1, _super);
                function class_1() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.name = "sss";
                    _this.age = 10;
                    return _this;
                }
                return class_1;
            }(target));
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
            // public name: string = "person";
            this.age = 10;
            this.name = 'zhufeng';
        }
        Person = __decorate([
            enhancer() //这可以传参，
        ], Person);
        return Person;
    }());
    var p = new Person();
    console.log(p.name);
    // console.log(p.age); 
    // p.age     //会报错，因为Person里没有
    //这里的p指向的是enhancer里的class类，和class Person这个类已经没关系了
})(b || (b = {}));
// 属性装饰器  装饰普通属性，普通方法，类的属性，类的方法
var c;
(function (c) {
    // target如果装饰的是普通属性的话，target指向类的原型
    // target如果装饰的是类的属性static,target指向类的定义
    function upperCasr(target, propertypeName) {
        var value = target[propertypeName];
        var getter = function () { return value; };
        var setter = function (newVal) {
            value = newVal.toUpperCase();
        };
        delete target[propertypeName];
        Object.defineProperty(target, propertypeName, {
            // 属性描述器
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true //是否可配置
        });
    }
    function propertyEnumerable(flag) {
        return function (target, methodName) {
            // propertyDescriptor.enumerable = flag;
        };
    }
    function methodEnumerable(flag) {
        return function (target, methodName, propertyDescriptor) {
            propertyDescriptor.enumerable = flag;
        };
    }
    function setAge(age) {
        return function (target, methodName, propertyDescriptor) {
            target.age = age;
        };
    }
    function toNumber(target, methodName, propertyDescriptor) {
        var oldMethod = propertyDescriptor.value; //这是指向一个老的方法sum函数
        propertyDescriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (item) { return parseFloat(item); });
            return oldMethod.apply(this, args);
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'zhufeng';
        }
        Person.prototype.getName = function () {
            console.log("getName");
        };
        Person.getAge = function () {
        };
        Person.prototype.sum = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return args.reduce(function (accu, item) { return accu + item; }, 0);
        };
        __decorate([
            upperCasr,
            propertyEnumerable(false)
        ], Person.prototype, "name", void 0);
        __decorate([
            methodEnumerable(true) //可枚举
        ], Person.prototype, "getName", null);
        __decorate([
            toNumber
        ], Person.prototype, "sum", null);
        __decorate([
            setAge(100)
        ], Person, "getAge", null);
        return Person;
    }());
    var p = new Person();
    p.name = 'jiagou';
    console.log(p.name);
    for (var attr_1 in p) {
        console.log('attr=' + attr_1);
    }
    console.log(Person.age);
    console.log(p.sum(1, '2', '3'));
})(c || (c = {}));
// 参数装饰器   装饰方法参数的   （很少用）
var d;
(function (d) {
    // Person.protype(指向类的原型) login 1
    function addAge(target, methodName, paramsIndex) {
        // console.log(target,methodName,paramsIndex);
        target.age = 12;
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.login = function (username, pwd) {
            console.log(this.age, username, pwd);
        };
        __decorate([
            __param(1, addAge)
        ], Person.prototype, "login", null);
        return Person;
    }());
    var p = new Person(); //实例化
    p.login("str", "123");
})(d || (d = {}));
