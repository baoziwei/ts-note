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
console.log("\u4F60\u662F" + Gender.BOY);
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

//2222222222


// dev的提交