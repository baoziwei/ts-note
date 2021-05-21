// 类型保护  就是更精确的看是哪种类型
namespace a{
    // 1.typeof保护
function double(input: string | number | boolean){
    if(typeof input == 'string'){
        input.toLowerCase();
    }else if(typeof input == 'number'){
        input.toFixed(2);
    }else{
       input
    }
 }
    // 2.instanceof保护
    class Animal{
        public name: string = 'zhufeng'
    }
    class Bird extends Animal{
        public swing: number = 2
    }
    function getName(a: Animal){
        if(a instanceof Bird){   //a是Bird的实例
            a.swing;
        }else{
            a.name
        }
    }
 
 //   3.null保护
 function func(s: string | null){
 //    if(s == null){ s = ''}
    //    s = s || ''
 
     // function en(){
     //     s = s || ''
     // }
     // en();
 
    return s!.charAt(0);   //非空断言
 }
 
 // 4.链判断运算符
 /* a?.b //如果a是null或undefined,那么返回undefined，否则返回a.b的值
 a == null ? undefined : a.b
 
 a?.[x]  //如果a是null或undefined,那么返回undefined，否则返回a.[x]的值
 a == null ? undefined : a[x]
 
 a?.b()  //如果a是null或undefined,那么返回undefined，否则返回a.b()的值
 a == null ? undefined : a.b()
 
 a?.()  //如果a是null或undefined,那么返回undefined，否则返回a.()的值
 a == null ? undefined : a.() */
 
 
 
 
 // 5.可辨识的联合类型(怎么区分)
     //利用联合类型中的共有字段进行类型保护的一种技巧
     //相同字段的不同取值就是可辨识
 
 // 相同属性不同取值来判断
 interface WarningButton {
     calss: 'warning',   //字面量类型，可以写死值
     text1: '修改'
 }
 interface DangerButton {
     calss: 'danger',
     text2: '错误'
 }
 type Button = WarningButton | DangerButton
 function getButton(button: Button){
     if(button.calss === 'warning'){
         button.text1
     }else{
         button.text2
     }
 }
 
 // 不同字段属性
 interface Bird{
     swing: number
 }
 
 interface Dog{
     leg: number
 }
 function getNumber(x: Bird | Dog){
   if('swing' in x){
     x.swing;
   }else{
     x.leg
   }
 }
 
}

// 自定义的类型保护
namespace b{
    interface Bird{
        name1: 'Bird'
        legs: number
    }
    
    interface Dog{
        name2: 'Dog'
        legs: number
    }
    function isBird(x: Bird | Dog): x is Bird{
        return x.legs === 2;   //返回了一个布尔值


    }
    function getAnimal(x: Bird | Dog){
        if(isBird(x)){   //判断isBird(x)是否为true
            x.name1; //x就是鸟
            console.log('ppp',x.name1);
            
        }else{
            x.name2;
            console.log(x.name2);
            
        }
      
    }

    let x: Bird = {name1:'Bird',legs:2}
    getAnimal(x)
}
