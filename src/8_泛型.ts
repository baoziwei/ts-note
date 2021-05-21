// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一中特性
//                作用域只限于函数内部使用
// 函数泛型  类数组泛型  类泛型 

namespace a{
    // 普通函数
    function creatArray111(length: number, val: any):Array<any>{   
        let result: Array<any> = [];
        for(let i = 0; i < length; i++){
            result[i] = 1;
        }
        return result;
    }
    var aa3 = creatArray111(3,3);
    console.log(aa3);   //any无法控制   具体类型不灵活,所以
//  ==========================================改用泛型

    

    function creatArray<T>(length: number, val: T):Array<T>{   //val什么类型,返回什么类型的数组  T占位符,相当于个模板(参数)
        let result: Array<T> = [];
        for(let i = 0; i < length; i++){
            result[i] = val;
        }
        return result;
    }

     function create<T>(length: number, val: T): Array<T>{
       
     }

     }
    setTimeout(()=>{
        let result1 = creatArray<number>(3, 3);   //开辟另一个新的堆内存空间,无所谓异步
        console.log(result1);
    })

    let result2 = creatArray<string>(3, "zhufeng");  //开辟另一个新的堆内存空间，和上面result1没有任何关系,相当于参数
    console.log(result2);

    // 类数组泛型
    function sum(...args2: any[]){    //: any[]：因为类型不固定，
        let args:IArguments = arguments;   //类型：类数组IArguments  ts语言本身自带的,实力上也是个接口
        for(let i = 0;i<args.length;i++){
            console.log(args[i]);
        }
    }
    sum(1,2,"3")

    
    //以下三个类型都是固定的   
  /*   // document is not defined  改tsconfig.json文件中的"lib":   //!：非空断言，告诉他一定不为null
    let root: HTMLElement | null = document.getElementById('root');   //类型：HTMLElement | null
    let children: HTMLCollection = root!.children;
    let childrenNodes: NodeListOf<ChildNode> = root!.childNodes; */



    // 类泛型
    class MyArray<T>{
       private list: T[] = [];
       add(val: T){
          this.list.push(val)
       }
       getMax(): T {
           let result: T = this.list[0];
           for(let i = 0; i < this.list.length; i++){
                if(this.list[i] > result) {
                    result =  this.list[i]
                }
           }
           return result;
       }
    }
    let arr = new MyArray<number>();
    arr.add(1);
    arr.add(2);
    arr.add(3);
    let result3: number = arr.getMax();
    console.log(result3);
    

    // 接口泛型
    interface Calculate {
        <T>(a: T,b: T): T   //<T>相当于定义变量   a: T相当于调用变量
    }
    let add: Calculate = function <T>(a: T,b: T): T{
        return a
    }
    let result4 = add<number>(5,5)  
    console.log(result4);

    interface Caluclate{
        <T>(a: T,b:T): T
    }
    let addz: Caluclate = function (a,b){
        return a
    }
    let result8 = add<number>(5,5)  
    console.log(999,result8);


    // 多个类型参数  如何在不知能加中间变量的情况下，交换两个变量的值
    function swap<A, B>(tuple: [A, B]): [B, A]{
        return [tuple[1], tuple[0]]
    }
    let aa = swap<string, number>(["zhufeng",10])
    console.log(aa);

    function swapz<A, B>(aa:[A,B]): [B,A]{
       return [aa[1],aa[0]]
    }
    let result5 = swapz<string,number>(['zhufeng',40])
    console.log(result5);
    





    // 默认泛型
    function creatArray2<T = string>(aa: number): T {
        let t: T | null = null;
        return t
    }
    let result6 = creatArray2<number>(3);
    // let result6 = creatArray2(3);    没传泛型的话走默认的string类型

    console.log(result6);



    // 泛型的约束
    // 在函数使用泛型的时候，由于预先并不知道具体的类型，所以不能访问相应类型的具体方法
    // 小技巧：意思就是想要调用泛型上的方法的话，就写一个接口，让泛型继承这个接口，就可以调用接口上的方法了
    interface LengthWith {
        length: number
    }
    function logger<T extends LengthWith>(val: T){

        console.log(val.length);
    }
    logger('zhufeng')


    // 也可以放接口上
    interface Cart<T>{
       list: T[]
    }
    let cart: Cart<string> = {
        list:['1','2','3']
    }
    

    
    // 泛型类型别名
    type Cart2<T> = {list: T[]} | T[];
    let c1: Cart2<string> = { list: ['1']};
    let c2: Cart2<string> = ['1'];

    // interface  定义一个实实在在的接口，他是一个真正的类型
    // type 一班用来定义别名，并不是一个真正的类型(小名 )











    
}