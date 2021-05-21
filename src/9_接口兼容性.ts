namespace a{
    // 接口兼容性（重新赋值不报错，类型自动转化）     在ts里和类型无关系，之和属性有关系
interface Animal {
    name: string,
    age: number
}
interface Calculate {
    <T>(a: T,b: T): T   //如果接口约束函数可以用“：”  冒号
}

interface Person {
    name: string,
    age: number,
    speak: () => void   //如果描述的是对象里的属性是函数就不能用冒号就得用“=>”  箭头函数
}

function getName(animal: Animal): string {
    return animal.name
}

let q: Animal = {   
    name: 'zhufeng0',
    age: 10,
}

console.log(getName(q));   //  =>zhufeng0


let p: Person = {   
    name: 'zhufeng1',
    age: 10,
    speak() {}
}

console.log(getName(p));   
// 把p传过来给了getName也行  在ts里和类型无关系，只和属性有关系，因为p里也有name字段，所以p也可（我要的你有就可以，反之我要的你没有不可以）     =>zhufeng1


// 基本类型的兼容性
let num: string | number = 1;
let str: string = 'hello';
num = str;   //赋值

let num2: {
    toString(): string
}
let str2: string = 'jiagou';

num2 = str2;   //因为字符串有toString()属性，所以str2可以赋值给num2

}


namespace b {
// 类的兼容性
//   跟类型无关，只看属性
    class Animal {
        name: string
        // swing: number
    }

    class Bird extends Animal {
        // swing: number
    }
    let a: Animal;
    a = new Bird();   //父类的变量能指向子类的实例

    let b: Bird;
    b = new Animal();   //子类的变量不能指向父类的实例   因为父类没有swing属性

    b = {name: 'zhufeng'}  //不管这个对象的具体类型，只有有这个属性就可

}

namespace c {
    // 函数兼容性
       //1.比较参数
    type sumFunction = (a: number, b: number) => number;
    let sum: sumFunction;
    function f1(a: number, b: number): number{
        return a;
    }
    sum = f1;
    function f2(a: number): number{
        return a;
    }
    sum = f2;
    function f3(a: number, b: number,c: number): number{
        return a;
    }
    // sum = f3;   //报错

    // 综上，可以少参数，不可多参数

      //2.比较返回值

    type GetPerson = () =>{name: string, age: number};
    let getPerson: GetPerson;
    function g1(){
        return {name: 'string', age:10};
    }
    getPerson = g1;
    function g2(){
        return {name: 'string'}
    }
    // getPerson = g2;  //少了可不行


    function g3(){
        return {name: 'string', age:10, home:'beijing'};
    }
    getPerson = g3;  //多了可以

    // 综上，不可少参数，可以多参数


    // 3.函数参数的协变（之前是双向协变，现在是单向的，只能少不能多）  类的定义的兼容性
    type logFunc = (a: number | string) => void;
    let log: logFunc;
    function log1(a: number | string | boolean){
        console.log(a);
    }
    log = log1   //可以多参数，不可以少参数

    // 1和3 的区别： 3是变量的类型   1是变量的数量



    // 4.泛型的兼容性   泛型在判断兼容性的时候先判断具体的类型，然后再进行兼容性判断（关键看属性的兼容性）
    interface Empty<T> {

    }
    let x!: Empty<string>;
    let y!: Empty<number>;
    x = y;  //可以赋值，因为将number传给<T>后变成的是一个{}空对象，将string传给<T>后变成返回的也是一个{}空对象，所以兼容

   
    //  但是
    interface Empty1<T> {
       data: T
    }
    let x1!: Empty1<string>; //{data:string}
    let y2!: Empty1<number>; //{data:number}
    //x1 = y1;  //Error  不可以赋值，因为将number传给<T>后变成的是一个{data:number}，将string传给<T>后变成的是一个{data:string}，返回的不一样，所以不兼容不能赋值


    // 
    interface Empty1String<T> {
        data: string
     }
     interface Empty1Number<T> {
        data: number
     }

    //  4.枚举的兼容性
        //  枚举类型与数字类型兼容，并且数字类型与枚举类型兼容
        // 不同枚举类型之间是不兼容的
    enum Colors {
        Red,Yellow
    }
    let c:Colors;
    c = Colors.Red; //=0
    c = 1;

    let d: number;
    d = Colors.Yellow;  //1



   

}

namespace c{


}