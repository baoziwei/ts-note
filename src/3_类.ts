// 如何定义类

// namespace:命名空间，放这里类名可以重复
namespace a{
    class Person {
        name: string = "zhufeng";
        age: number;
        constructor(){
            this.age = 10;
        }
    }
    let p1 = new Person();
/*     console.log(p1.name);
    console.log(p1.age); */
}




// 读取器   getter  setter
namespace b{
    class Person {
        myname: string = "zhufeng";
        constructor(name: string){
            this.myname = name;
        }
        get name(){
            return this.myname;
        }
        set name(newVal: string){
            this.myname = newVal.toUpperCase();
        }
    }

    let p = new Person('zhufeng');
    // console.log(p.name);
    p.name = 'jiagou'
    // console.log(p.name); 
}

namespace c {
    class Person{
        // myname: string = "zhufeng";   public相当于这句，挂载到实例上就是公共的
        constructor(public readonly name: string){   //readonly只读属性

        }
    }
    let p = new Person("zhufeng")
    // p.name = "44"  //无法分配到 "name" ，因为它是只读属性。
    console.log(99,p.name);
}

// 继承
/* 
* 子类继承父类
*  访问修饰符  public protected  private
*         public     公共的   自己  自己的子类  和其他类都能访问
*         protected  受保护的 自己和自己的子类可以访问
*         private    私有的  只能自己访问，自己的子类不能访问
*/
namespace d {
    class Person {
        public name: string;
        protected sex: string;
        protected age: number;
        private amount: number;
        constructor(name: string, age: number,sex: string){
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.amount = 10;
        }
        getName(){
            return this.name;
        }
        setName(newName: string){
            this.name = newName;
        }
    }
    class Student extends Person{
        static type  = "student"    //说明是类的属性，不是实例(原型上)的属性，调用方式：【类名.属性名】  
        stuNo: number;
        constructor(name: string, age: number,stuNo: number,sex: string){
            super(name,age,sex);
            this.stuNo = stuNo;
        }
        static getType(){
            console.log("测试static");
            return Student.type
        }
        getStudentNo(){
            return this.stuNo + this.sex ;
          
        }
        setStudentNo(newStuNo: number){
            this.stuNo = newStuNo;
        }
        
        
    }

    let s = new Student("zhufeng", 10, 1,"男00")
    console.log(s.name);    //s可以访问到name属性，因为是public,
    console.log(s.sex);    //s访问不到，报错 
   console.log(Student.type);
   Student.getType();
   
}

// static 静态属性  静态方法   见81行   详情截图见md文件 
// 需要修饰符static  类名来访问属性   无法被实例继承


