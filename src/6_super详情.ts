namespace a{
    // class中的super,有两种指向，在静态方法和构造函数，指向父类，在普通函数中，指向父类的prototype
    // 关于继承跟静态没有关系，子类并不能继承父类的静态方法
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
}