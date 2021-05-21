"use strict";
// 函数定氮仪
function hello(name) {
    console.log(name);
}
// 函数表达式
/* let getUserName: GetUserNameType  = function(firstName:string, lastName: string) :string {
    return firstName + lastName
} */
var getUserName = function (firstName, lastName) {
    return { name: firstName + lastName };
};
var getUserName1 = function (firstName, lastName) {
};
// 可选函数（传的实参或者形参个数可以不一样） "?"
function print(name, age, home) {
}
print("zhufeng", 10);
// 默认参数
function ajax(url, method) {
    if (method === void 0) { method = 'get'; }
    console.log(url, method);
}
ajax('/url');
// 剩余参数
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, item) { return total + item; }, 0);
}
// 函数重载 
//   overload(重载)，限定函数调用的格式
var obj = {};
/* function attr(val: string | number) :void;  这种写法和上面两行一样的效果，但是上面更精确*/
// console.log();  //报错。函数实现缺失或未立即出现在声明之后，上下不能分开
// 第一种情况
function attr(val) {
    if (typeof val == 'string') {
        obj.name = val;
    }else if (typeof val == 'number') {
        obj.age = val;
    }
}
attr('zhufeng');
attr(10);
function sum2(a, b) {
}
// sum2("1","2")
sum2("2", 3);
/* sum2("2","5")   //报错 */
