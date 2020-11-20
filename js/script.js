'use strict';

window.addEventListener('DOMContentLoaded', () => {
  //_____________________________________________________


  let arr  = ['ivAn', 'vasyA', 'vAlera' ,'vlAdislav', 'vovA'];
  let newArr = arr.filter((arr) => arr.length === 5);
  console.log(newArr);


let mapArr = arr.map((item) => item.toLocaleLowerCase());
console.log(mapArr);

let someArr = arr.some((item) =>(item === 'ivan'));
console.log(someArr);

let every = arr.every((item) =>(typeof(item) === 'number'));
console.log(every);


let arr1 =  [1,2,3,4,6,7,8,9];
let arr2 =  ['маша', 'галя', 'katy']; 
let reduceArr = arr1.reduce((sum, cur) => sum + cur, 0); // 0 стартове значення 
let reduceArr2 = arr2.reduce((sum, cur) => sum + cur, 0);
let reduceArr3 = arr2.reduce((sum, cur) => `${sum} / - / ${cur}`, 0);
console.log(reduceArr);
console.log(reduceArr2);
console.log(reduceArr3);


const array = {
  name: 'Andrii',
  age: 32,
  tel: 38067,
};


  //_____________________________________________________
});