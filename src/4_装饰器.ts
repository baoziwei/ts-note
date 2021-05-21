// ###  装饰器（东西挺多）

// 5.8  装饰器（实际上就是一个函数）
// 写法分为  普通装饰器（不传参数）  和   装饰器工厂（传参数）

// 5.8.1类装饰器：用来声明，用来监视、修改或替换类定义

// 装饰器执行顺序：属性和方法执行（谁先写谁执行） 》 方法（先参数再方法，而且  他们一定会在一起） 》 类（如果是同类型的，先执行后写的（也可以理解为谁距离class Person近就先执行谁））

// 类装饰器
namespace s{
    interface Person{    //强化
        xx: string;
        yy: string;
    }
    function enhancer(target: any){
        // target.xx = "Person"   这样写 p.xx  是undefined，因为target是实例，所以得在原型省上加属性
        target.prototype.xx = "大写的XX";
        target.prototype.yy = "大写的YY"
    }

    @enhancer   //随便起的名字
    class Person {
        constructor(){

        }
    }
    let p = new Person();
    console.log(p.xx);    //实例的属性
    console.log(p.yy); 
    // console.log(Person.xx);   //类的属性  
}


// 把类整个替换 (相当于子类继承父类，达到增强父类的效果)
namespace b{
    /* function enhancer(name: string){ */
    function enhancer(){
        return function enhancer(target: any){    //返回一个装饰器函数，装饰class函数
           /*  return function (target: any){
                return class extends Person{
                   constructor(age:number,name:string){
                       super(age,name);
                    //    this.name = name;
                   }
                   getAge(){
                       console.log(this.age);
                   }
                } */
            return class extends target  {
                public name: string = "sss";
                public age: number = 10;
            }
        }
    }
    @enhancer()       //这可以传参，
    class Person {
        // public name: string = "person";
        public age:number = 10;
        public name:string = 'zhufeng';
        constructor(){ }
    }
    let p = new Person();
    console.log('000',p.name);   //sss
    console.log(p.age);    //10
    // p.age     //会报错，因为Person里没有
       //这里的p指向的是enhancer里的class类，和class Person这个类已经没关系了
}


// 属性装饰器  装饰普通属性，普通方法，类的属性，类的方法
namespace c {
    // target如果装饰的是普通属性的话，target指向类的原型
    // target如果装饰的是类的属性static,target指向类的定义
    function upperCasr(target: any, propertypeName: string) {    //修饰属性有两个参数
        let value = target[propertypeName];
        const getter = () => value;
        const setter = (newVal: string) => {
            value = newVal.toUpperCase();
        }
        delete target[propertypeName]
        Object.defineProperty(target, propertypeName, {
            // 属性描述器
            get:getter,
            set:setter,
            enumerable: true,   //是否可枚举
            configurable: true  //是否可配置
        })
    }
    function propertyEnumerable(flag: boolean){   //属性
        return function (target: any, methodName: string){   //如果修饰属性的话传两个参数
            // propertyDescriptor.enumerable = flag;
        }

    }
    function methodEnumerable(flag: boolean){   //方法
        return function(target: any, methodName: string, propertyDescriptor: PropertyDescriptor){
            propertyDescriptor.enumerable = flag;
        }
    }
    function setAge(age: number){   //方法
        return function(target: any, methodName: string, propertyDescriptor: PropertyDescriptor){
            target.age = age
        }
    }
    function toNumber(target: any, methodName: string, propertyDescriptor: PropertyDescriptor){   //装饰个方法
        let oldMethod = propertyDescriptor.value;   //这是指向一个老的方法sum函数
        propertyDescriptor.value = function (...args:any[]){
            args = args.map(item => parseFloat(item))
            return oldMethod.apply(this,args)
        }
    }
    class Person {
        static age: number;
        @upperCasr
        @propertyEnumerable(false)
        name: string = 'zhufeng'

        @methodEnumerable(true)   //可枚举
        getName(){     //如果修饰的是普通方法的话，他的修饰器的target指向类的原型
            console.log("getName");
            
        }
        
        @setAge(100)
        static getAge(){   //如果修饰的是static静态属性的话，他的修饰器的target指向类

        }
        
        @toNumber
        sum(...args: any[]){
            return args.reduce((accu, item) => accu + item,0)

        }
    }

    let p = new Person();
    p.name = 'jiagou';
    console.log(p.name);
    for(let attr in p){
        console.log('attr=' + attr);
    }
    console.log(Person.age);
    console.log(p.sum(1,'2','3'));
    
}

// 参数装饰器   装饰方法参数的   （很少用）
namespace d {
    interface Person{
        age: number
    } 
    // Person.protype(指向类的原型) login 1
    function addAge(target: any,methodName:string,paramsIndex: number){   //参数的装饰器
        // console.log(target,methodName,paramsIndex);
        target.age = 12;
    }
    class Person{
        login(username: string, @addAge pwd: string){
            console.log(this.age,username,pwd);
        }
    }
    
    let p = new Person();   //实例化
    p.login("str","123")
}