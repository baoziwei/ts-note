namespace a{
    abstract class Animal {
        name: string;
        abstract getName():string
    }   
    class Cat extends Animal {
        getName():string {
            return this.name
        }
    }
    // let Animal = new Animal();   报错   父类不能实例化
    let cat = new Cat();   //子类可实例化
    cat.name = "mao";
    console.log(cat.getName());


    // 1.用来描述对象的，指的是对象有哪些属性，属性什么类型
    interface Point {
        x:number
        y:number
    }
    let point: Point = {x:0, y:0}

    // 2.还可以用来描述行为的抽象
    interface Speakable {
        speak(): void
    }
    interface Eatable {
        eat(): void
    }
    // 一个类可以实现多个接口，但只能继承一个父类
    class Person implements Speakable, Eatable {
        speak(){}
        eat(){}
    }
}


namespace b {
    // 重写   子类重新实现并覆盖父类中的方法
    class Animal{
        constructor() {

        }
        speak(){
            // throw new Error("此方法不能调用")
            console.log('动物叫');
        }
    }

    class Cat extends Animal{
        speak() {
            console.log('///我们一起喵喵喵');
            super.speak()   //动物叫
            console.log(567);
            
        }
    }
    let p = new Cat();
    p.speak();   //=>我们一起喵喵喵

    class Dog extends Animal{
        speak() {
            console.log('我们一起汪汪汪');
            super.speak()   //调用父类方法
        }
    }
    let dog = new Dog();
    dog.speak();   //=>我们一起汪汪汪   =>相当于子类重写了父类的speak方法  如果子类想调父类方法的话就用super.speak()(实际上只是把父类方法隐藏了，并不是干掉了)
    // super: 指向父类的原型   super.speak()是个整体  super.speak()  转译后= > Animal.prototype.speak()
}