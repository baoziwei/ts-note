// 交叉类型  就是；两个接口类型的属性的并集

namespace a{
    interface Bird{
        name: string
        fly():void
    }
    
    interface Person{
        name: string
        eat():void
    }
    type BirdMan = Bird & Person;
    let p: BirdMan = {
        name: 'Dog',
        eat(){},
        fly(){}
    }
}


namespace b{
    // typeof  可以获取变量的类型
/*     type Person = {
        name: string;
        age: number
    } */
  /*   let p: Person = {
        name: 'zhufeng',
        age: 10
    } */
    let p = {
        name: 'zhufeng',
        age: 10
    }   //1.先定义值
    type Person = typeof p;  //2.通过typeof拿到值的类型，再修饰变量
    let p2: Person = {
        name:'zhufeng',
        age:20
    }



    // 索引访问操作符，我们可以通过[]来获取一个类型的子类型
    interface Person2 {
        name: string;
        age: number;
        job: {
            name: string
        },
        interests: {name: string; level: number}[]
        // interests: Array<{name: string; level: number}>
    }
    let myname: Person2['job']['name'] = 'fe';
    let mylevel: Person2['interests'][0]['level'] = 10



    // keyof   索引类型查询操作符
    interface Person3{
        name: string
        age: number,
        gender: 'mail' | 'female',
        //[propName: string]: any  //可以接受任意属性，但是不能这样写
    }
    // type Person3Key = 'name' | 'age' | 'gender'
    type Person3Key = keyof Person3   //返回一个接口所有key的一个集合
    function getValueByKay(val: Person3, key: Person3Key){
        return val[key]
    }
    let person3: Person3 = {
        name: 'zhufeng',
        age: 10,
        gender: 'mail' ,
        //[propName: string]: any  //可以接受任意属性，但是不能这样写
    }
    let name = getValueByKay(person3,'name')
    console.log(name);


    // 映射类型   在定义时用in操作符批量定义，基于一个老的类型定义一个新的类型（由非可选变成可选）
    interface Person4{
        name: string
        age: number,
        gender: 'mail' | 'female',
    }
    type PartialPerson = {
        [key in keyof Person4] ?: Person4[key]   //key in => for in
    }
    let p4: PartialPerson = {
        name: 'zhufeng',
        age: 10,
    }
    console.log(p4);
    

   /*  原理：
     type  Partial<T> = {
        [key in keyof T]?: T[key]
    } */
    // 就是以下意思  ?是可选的，可有可无
  /*   type PartialPerson = {
        name?: string
        age?: number,
        gender?: 'mail' | 'female',
    } */



    // 反过来  由可选变为必选
    type RequirePerson = Required<Person4>;
    let p5: RequirePerson = {
        name: 'zhufeng',
        age: 10,
        gender: 'mail',
    }
    /*  //原理：
     type  Partial<T> = {
        [key in keyof T]-?: T[key]
    } */

    // 只读
    type ReadonlyPerson = Readonly<Person4>;
    let p6: ReadonlyPerson = {
        name: 'zhufeng',
        age: 10,
        gender: 'mail',
    }
    // p6.name = 'jiagou'  //无法分配到 "name" ，因为它是只读属性。

    /*  //原理：
     type  Readonly1<T> = {
        readonly [key in keyof T]-?: T[key]
    } */

    // Pick  捡几个子类型
    type PickPerson = Pick<Person4,'name'>  //提取Person4接口中的name类型
    // 上面哪一行相当于下面这个
    /* interface PickPerson {
        name:'zhufeng'
    } */
    let x: PickPerson = {
        name:'name'
    }
    /*  //原理：
    type Pick<T, K extends keyof T> = {
        [key in K]: T[key]
    } */

    // TS  要区分类型和值  类型：interface class enum  值：let function var const
    // interface Person4 = Person4   //interface不能当做值来用



    

}
namespace c{
    // typeof  和  type  的区别

    // type是类型   类似number  string
    let x = {
        name:'name'
    }
    let a = typeof x;   //赋值为  object  这是js代码
    type b = typeof x;     //这是ts专有的  编译后就没了

    console.log(a);
    console.log(b);
    
    // 元祖的长度和类型是固定的
    let xx: [string, number] = ['1',2]
    console.log(xx[1 ]);


    // 什么时候用interface  type  class
    // interface 是定义接口类型，他是真实的类型，也可能会被导出和导入   这是开创一个新的类型   
    // type只是临时用的别名，不会产出真正的类型   基于老类型定义新类型 type是基于别人进行加工
    // class就是定义类 new xxx

    
    
}