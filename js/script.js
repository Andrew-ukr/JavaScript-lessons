'use strict';

window.addEventListener('DOMContentLoaded', () => {
  //_____________________________________________________

  let a = 1;
  let b;

  let prom = new Promise((resolve, reject) => {
    let prom1 = setTimeout(() => {
      b = 2;
      console.log('545544');
    }, 2000);
    resolve(prom1);
  });
  prom.then()

  console.log(a + b);

  //_____________________________________________________
});