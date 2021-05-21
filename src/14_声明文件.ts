// 声明文件怎么写
/*
  *用ts重写一遍
  2.配上声明文件
*/


/* declare const $:(selector: string)=>{
    click(): void;
    width(length: number): void
} */
$('#name').click()

declare let name1:string;
declare let age: number;
declare function getName() :void;
declare class Animal {name: string}

interface Person6{
    name: string
}
type Student = Person6 | string;
declare const enum Seasons{
  Spring,
  Summer,
  Autumn,
  Winter
}
let siji: Seasons[] = [
    Seasons.Spring,
    Seasons.Summer,
    Seasons.Autumn,
    Seasons.Winter,
]
console.log(siji);

