// 任意属性

namespace a {
    interface PlainObject {
        x:number,
        y:number
        [propName: string]: number;
    }
    let obg: PlainObject = {
        x: 1,
        y: 2,
        z: 3
    }

    // 接口de继承
    interface Speakable {
        speak(): void;
    }
    interface SpeakChinese extends Speakable {
        speakChinese() :void
    }
    class Person implements SpeakChinese {
        speak() {}
        speakChinese() {}
    }

    // 接口的只读
    interface Circle{
        readonly PI: number;
        radius: number
    }
    let circle:Circle={
        PI: 3.14,
        radius: 10
    }
    // circle.PI = 3.14   //报错

    // 接口还可以用来约束函数
    interface Discount{
        (price:number): number
    }
    let cost: Discount = function (price: number): number {
        return price * .8 
    }

    // 可索引接口
    // 用来对数组和对象进行约束
    interface UaerInterface {
        [index: number]: string
    }
    let arr: UaerInterface = ['1','2','3']
    console.log(arr);
    let obj2: UaerInterface = {
        1:'1',
        2:'2'
    }
    console.log(99,obj2);

    // type  interface
}

namespace b{
    // 类接口  可以用接口来装饰类；
    //  学ts核心  接口+泛型 

    interface Speakable {
        name?: string,
        speak(words: string) :void
    }
    class Dog implements Speakable{
        name:string;
        speak() {
            console.log('hahah');
        }
    }

    let dogg = new Dog();
    dogg.speak()

    // 用接口来约束类   约束构造类型,使用new来约束
    class Animal {
        constructor(public name: string){
            console.log(name);
        }
    }
    interface WithNameClass {
        new(name: string): Animal
    }
    function createAnimal(clazz: WithNameClass, name: string){
        return new clazz(name)   //new了clazz,传参name
    }

    let a = createAnimal(Animal, 'zhufeng')
    console.log(a);




    
    interface SquareConfig {
        color?: string;
        width?: number;
      }
    function createSquare(config: SquareConfig): {color: string; area: number} {
        let newSquare = {color: "white", area: 100};
        if (config.color) {
          newSquare.color = config.color;
        }
        if (config.width) {
          newSquare.area = config.width * config.width;
        }
        console.log(config.width * config.width);
        
        return newSquare;
      }
      
      let mySquare = createSquare({color: "black"});
      console.log(mySquare);
      
    
}