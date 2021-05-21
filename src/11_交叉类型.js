"use strict";
// 交叉类型  就是；两个接口类型的属性的并集
var a;
(function (a) {
    var p = {
        name: 'Dog',
        eat: function () { },
        fly: function () { }
    };
})(a || (a = {}));
var b;
(function (b) {
    // typeof  可以获取变量的类型
    /*     type Person = {
            name: string;
            age: number
        } */
    /*   let p: Person = {
          name: 'zhufeng',
          age: 10
      } */
    var p = {
        name: 'zhufeng',
        age: 10
    }; //1.先定义值
    var p2 = {
        name: 'zhufeng',
        age: 20
    };
    var myname = 'fe';
    var mylevel = 10;
    function getValueByKay(val, key) {
        return val[key];
    }
    var person3 = {
        name: 'zhufeng',
        age: 10,
        gender: 'mail',
    };
    var name = getValueByKay(person3, 'name');
    console.log(name);
    var p4 = {
        name: 'zhufeng',
        age: 10,
    };
    console.log(p4);
    var p5 = {
        name: 'zhufeng',
        age: 10,
        gender: 'mail',
    };
    var p6 = {
        name: 'zhufeng',
        age: 10,
        gender: 'mail',
    };
    // 上面哪一行相当于下面这个
    /* interface PickPerson {
        name:'zhufeng'
    } */
    var x = {
        name: 'name'
    };
    /*  //原理：
    type Pick<T, K extends keyof T> = {
        [key in K]: T[key]
    } */
    // TS  要区分类型和值  类型：interface class enum  值：let function var const
    // interface Person4 = Person4   //interface不能当做值来用
})(b || (b = {}));
var c;
(function (c) {
    // typeof  和  type  的区别
    var x = {
        name: 'name'
    };
    var a = typeof x;
})(c || (c = {}));
