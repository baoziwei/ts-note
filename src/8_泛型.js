"use strict";
// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一中特性
//                作用域只限于函数内部使用
// 函数泛型  类数组泛型  类泛型 
var a;
(function (a_1) {
    // 普通函数
    function creatArray(length, val) {
        var result = [];
        for (var i = 0; i < length; i++) {
            result[i] = val;
        }
        return result;
    }
    var result1 = creatArray(3, 3); //开辟另一个新的堆内存空间
    console.log(result1);
    var result2 = creatArray(3, "zhufeng"); //开辟另一个新的堆内存空间，和上面result1没有任何关系
    console.log(result2);
    // 类数组泛型
    function sum() {
        var args2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args2[_i] = arguments[_i];
        }
        var args = arguments; //类型：类数组IArguments  ts语言本身自带的
        for (var i = 0; i < args.length; i++) {
            console.log(args[i]);
        }
    }
    sum(1, 2, "3");
    //以下三个类型都是固定的   
    // document is not defined  改tsconfig.json文件中的"lib":   //!：非空断言，告诉他一定不为null
    /*   let root: HTMLElement | null = document.getElementById('root');   //类型：HTMLElement | null
      let children: HTMLCollection = root!.children;
      let childrenNodes: NodeListOf<ChildNode> = root!.childNodes */
    // 类泛型
    var MyArray = /** @class */ (function () {
        function MyArray() {
            this.list = [];
        }
        MyArray.prototype.add = function (val) {
            this.list.push(val);
        };
        MyArray.prototype.getMax = function () {
            var result = this.list[0];
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i] > result) {
                    result = this.list[i];
                }
            }
            return result;
        };
        return MyArray;
    }());
    var arr = new MyArray();
    arr.add(1);
    arr.add(2);
    arr.add(3);
    var result3 = arr.getMax();
    console.log(result3);
    var add = function (a, b) {
        return a;
    };
    var result4 = add(5, 5);
    console.log(result4);
    // 多个类型参数  如何在不知能加中间变量的情况下，交换两个变量的值
    function swap(tuple) {
        return [tuple[1], tuple[0]];
    }
    var aa = swap(["zhufeng", 10]);
    console.log(aa);
    // 默认泛型
    function creatArray2(aa) {
        var t = null;
        return t;
    }
    var result6 = creatArray2(3);
    // let result6 = creatArray2(3);    没传泛型的话走默认的string类型
    console.log(result6);
    function logger(val) {
        console.log(val);
    }
    logger('zhufeng');
    var cart = {
        list: ['1', '2', '3']
    };
    var c1 = { list: ['1'] };
    var c2 = ['1'];
    // interface  定义一个实实在在的接口，他是一个真正的类型
    // type 一班用来定义别名，并不是一个真正的类型
})(a || (a = {}));
