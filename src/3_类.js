"use strict";
// 如何定义类
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
// namespace:命名空间，放这里类名可以重复
var a;
(function (a) {
    var Person = /** @class */ (function () {
        function Person() {
            this.name = "zhufeng";
            this.age = 10;
        }
        return Person;
    }());
    var p1 = new Person();
    /*     console.log(p1.name);
        console.log(p1.age); */
})(a || (a = {}));
// 读取器   getter  setter
var b;
(function (b) {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.myname = "zhufeng";
            this.myname = name;
        }
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this.myname;
            },
            set: function (newVal) {
                this.myname = newVal.toUpperCase();
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var p = new Person('zhufeng');
    // console.log(p.name);
    p.name = 'jiagou';
    // console.log(p.name); 
})(b || (b = {}));
var c;
(function (c) {
    var Person = /** @class */ (function () {
        // myname: string = "zhufeng";   public相当于这句，挂载到实例上就是公共的
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var p = new Person("zhufeng");
    // p.name = "44"  //无法分配到 "name" ，因为它是只读属性。
    console.log(99, p.name);
})(c || (c = {}));
// 继承
/*
* 子类继承父类
*  访问修饰符  public protected  private
*         public     公共的   自己  自己的子类  和其他类都能访问
*         protected  受保护的 自己和自己的子类可以访问
*         private    私有的  只能自己访问，自己的子类不能访问
*/
var d;
(function (d) {
    var Person = /** @class */ (function () {
        function Person(name, age, sex) {
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.amount = 10;
        }
        Person.prototype.getName = function () {
            return this.name;
        };
        Person.prototype.setName = function (newName) {
            this.name = newName;
        };
        return Person;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, stuNo, sex) {
            var _this = _super.call(this, name, age, sex) || this;
            _this.stuNo = stuNo;
            return _this;
        }
        Student.getType = function () {
            console.log("测试static");
            return Student.type;
        };
        Student.prototype.getStudentNo = function () {
            return this.stuNo + this.sex;
        };
        Student.prototype.setStudentNo = function (newStuNo) {
            this.stuNo = newStuNo;
        };
        Student.type = "student"; //说明是类的属性，不是实例(原型上)的属性，调用方式：【类名.属性名】
        return Student;
    }(Person));
    var s = new Student("zhufeng", 10, 1, "男");
    console.log(s.name); //s可以访问到name属性，因为是public,
    /*  console.log(s.sex);    //s访问不到 */
    console.log(Student.type);
    Student.getType();
})(d || (d = {}));
// static 静态属性  静态方法   见81行   详情截图见md文件
