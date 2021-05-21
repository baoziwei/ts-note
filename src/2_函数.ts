// 函数定氮仪
function hello(name: string){
    console.log(name);
    
}
// type用来定义一个类型或者  类型别名
/* type GetUserNameType = (firstName:string, lastName: string) => string   //这不是箭头函数,是个对象  =>：分隔符*/
type GetUserNameType = (firstName:string, lastName: string) => {
    name: string
}

// 函数表达式
/* let getUserName: GetUserNameType  = function(firstName:string, lastName: string) :string {
    return firstName + lastName
} */
let getUserName: GetUserNameType  = function(firstName:string, lastName: string) : {
    name:string
}{
    return { name: firstName + lastName}
}

// 返回空
type GetUserNameType1 = (firstName:string, lastName: string) => void
let getUserName1: GetUserNameType1  = function(firstName:string, lastName: string) : void{

}


// 可选函数（传的实参或者形参个数可以不一样） "?"
function print(name:string, age:number, home?:string){
  
}
print("zhufeng",10)

// 默认参数
function ajax(url:string, method: string = 'get'){
   console.log(url,method);
}
ajax('/url')

// 剩余参数
function sum(...numbers: Array<number>){
  return numbers.reduce((total, item) => total + item, 0);
}

// 函数重载 
//   overload(重载)，限定函数调用的格式
let obj: any = {};

// 函数声明，用来限定attr的传参
function attr(val: string):void;
function attr(val: number):void;
/* function attr(val: string | number) :void;  这种写法和上面两行一样的效果，但是上面更精确*/
// console.log();  //报错。函数实现缺失或未立即出现在声明之后，上下不能分开

// 第一种情况
function attr(val: any):void{
  if(typeof val == 'string'){
      obj.name = val
  } else if (typeof val == 'number'){
    obj.age = val
  }
}
attr('zhufeng')
attr(10)
/* attr(true)   //报错，因为限定了string和number */

// 第二种情况
function sum2(a: string, b:number): void;
function sum2(a: number, b:number): void;
function sum2(a:any, b:any): void{

}
// sum2("1","2")
sum2("2",3)
/* sum2("2","5")   //报错 */