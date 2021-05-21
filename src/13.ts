namespace a{
    interface Fish{
        name1: string
    }
    interface Fish2{
        name1: string,
        age: number
    }
    interface Water{
        name2: string
    }
    interface Bird{
        name3: string
    }
    interface Sky{
        name4: string
    }
    type Condition<T> = T extends Fish ? Water : Sky;
    let condition: Condition<Fish2> = {  //判断继承：看属性有无
        name2: 'water'
    }

    // 条件类型的分发
    type Condition2<T> = T extends Fish ? Water : Sky;   //通过T传过来的东西看里面有没有Fish里的属性，如果有就是true，没有就是false
    let c1: Condition2<Fish | Bird> = {name2:'zhufeng'}
    let c2: Condition2<Fish | Bird> = {name4:'zhufeng'}
    let c3: Water | Sky = {name2:'zhufeng'}
    let c4: Water | Sky  = {name4:'zhufeng'}
}


namespace c{
    // 关键字
    type E = Exclude<string | number, string>; //从string | number, string 中把string排除掉，从前者排除后者
    let e: E = 10;

    type E2 = Extract<string | number | null, string>  //从<string | number | null提取 string
    let e2: E2 = 'hello';

    type E3 = NonNullable<string | number | null | undefined>;  //把不为空的干掉
    let e3: E3 = 'hello';
    let e4: E3 = 10;

    // redux会用到Returntype  通过这个判断返回值类型
    function getUserInfo(){
        return {name:'zhufeng', age:10}
    }
    type UserInfo = ReturnType<typeof getUserInfo>
    let user: UserInfo =  {
        name:'zhufeng',
        age:10
    }

    // instanceType  获取构造函数的实例类型
    class Person5{
        name: string;
        constructor(name: string){
            this.name = name;
        }
    }
    type P = InstanceType<typeof Person5>;
    let p: P = new Person5('zhufeng')

    // 导入导出
    // 命名空间：1.封装类似的代码   2.防止命名冲突
}