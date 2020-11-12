'use strict';

let calculator = {
  input: [],
  read() {
    for (let i = 0; i < 2; i++) {
      calculator.input[i] = +prompt( `значення № ${i + 1}` ,'');
    }
  },
  sum() {
    let total = 0;
    for (let a = 0; a < calculator.input.length; a++) {
      total += calculator.input[a];
    }
    return total;
  },
  mul() {
    let total = 1;
    for (let b = 0; b < calculator.input.length; b++) {
      total *= calculator.input[b];
    }
    return total;
  },
};

console.log(calculator.input);


calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
