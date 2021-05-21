"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var age = 10;
var name = "zhufeng";
var married = true;
var hobbies = ["1", "2"]; //声明字符串数组  第一种
var interests = ["4", "5"]; //声明字符串数组 第二种
// 元组：  类似数组，但是他是一个长度和类型都固定的数组
// 1  长度固定  2 类型可以不一样
var point = [100, 200];
var person = ["zhufeng", 200];
//枚举
var Gender;
(function (Gender) {
    Gender[Gender["BOY"] = 0] = "BOY";
    Gender[Gender["GIRL"] = 1] = "GIRL";
})(Gender || (Gender = {}));
console.log("" + Gender.BOY);
/*
    var Gender;
    (function (Gender) {
        Gender[Gender["BOY"] = 0] = "BOY";
        Gender[Gender["GIRL"] = 1] = "GIRL";
    })(Gender || (Gender = {}));
    console.log("\u4F60\u662F" + Gender.BOY);
*/
var Gender2 = {
    0: "BOY",
    1: "GIRL",
    "BOY": 0,
    "GIRL": 1
};
var WEEK;
(function (WEEK) {
    WEEK[WEEK["mondy"] = 1] = "mondy";
    WEEK[WEEK["tuesday"] = 2] = "tuesday";
})(WEEK || (WEEK = {}));
console.log(WEEK.mondy);
// 任意类型  anyscript 
//  第三库没有类型定义  类型转换的时候  数据结构太复杂太灵活的时候用
// ts  为 dom提供了一整套类型声明
var root = document.getElementById('root');
root.style.color = 'red'; //  !：强行断言，断言不为空
// null undefined
// null空  undefined   未定义
// 他们都是其他类型的子类型  可以把它们赋值给其他类型的变量
var myname = null; //配置文件改 "strictNullChecks": false,   允许赋值为null和undefined
var x;
x = 1;
x = undefined;
x = null;
// void  空的  没有，
function greeting(name) {
    console.log("hello " + name);
    //    return 1  报错
    return null; //或者返回undefined  因为null undefined是void的子类型
}
greeting("zhufeng");
// never  永远不
// 是其他类型的子类型，代表永远不会出现的值
// 返回“从不”的函数不能具有可访问的终结点。
// 一个从来不会有返回值的函数（如：如果函数内含有 while(true) {}）；
// 一个总是会抛出错误的函数（如：function foo() { throw new Error('Not Implemented') }，foo 的返回类型是 never）；
// 情况一：如果启动一个后台任务，那么他就是一个死循环，事件环函数  计划任务（如每隔一个半小时执行一次）
// 情况二： 
// 1.在函数内部永远抛出错误，导致函数永远无法正常结束
function createError(message) {
    console.log(1);
    throw new Error("error");
    console.log(2);
}
// 2.永远不会出现的值，永远触达不到结束点
function sum() {
    while (true) {
        console.log('hello');
    }
    console.log('end point');
}
/* 与 void 的差异
一旦有人告诉你，never 表示一个从来不会优雅的返回的函数时，
你可能马上就会想到与此类似的 void，然而实际上，
void 表示没有任何类型，never 表示永远不存在的值的类型。
当一个函数没有返回值时，它返回了一个 void 类型，
但是，当一个函数根本就没有返回值时（或者总是抛出错误），
它返回了一个 never，void 指可以被赋值的类型（在 strictNullChecking 为 false 时），
其他任何类型不能赋值给 never，除了 never 本身以外。 */
// 3.12 包装对象  java装箱和拆箱
// 自动在基本类型和对象类型进行自动切换
// 1.基本类型上没有方法
// 2.在内部迅速完成一个装箱的操作，把基本类型迅速包装成对象类型，然后用对象来调用方法
var name4 = 'zhufeng';
// name4.toLocaleLowerCase();
var name44 = new String(name4);
name4.toLocaleLowerCase();
/* let isOk1:boolean = true;
let isOk2:boolean = Boolean("123");  //任何类型值传给函数，会返回一个基本类型的true或false
let isOk3:boolean = new Boolean(1);  //报错，因为new就成对象了，不能把对象赋值给基本类型 */
// 3.13联合类型  Union Types  表示取值可以为多种类型中的某一个
// 未赋值时只能访问两个类型共有的属性和方法
var name5;
name5 = 'zhufeng';
name5.toLocaleLowerCase(); //只能调用字符串方法
name5 = 5;
name5.toFixed(2); //只能调用数字上的方法
// 3.14类型断言
// 讲一个联合类型的变量，指定为一个更加具体的类型
var name6;
name6.toLocaleLowerCase(); //把他断言当成一个字符串，就能调用字符串的方法了
var a = 'Boy';
/* Gender4 = 'girl';
Gender4 = 'ren';  */
// 
