'use strict';

window.addEventListener('DOMContentLoaded', () => {
  //_____________________________________________________

  // function name() {
  //   let result = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       let a = 1;
  //       console.log(a, 'a');
  //       resolve(a);
  //     }, 1000);
  //   }).then((a) => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         let b = a;
  //         console.log(b, 'b');
  //         resolve(b);
  //       }, 1000);
  //     });
  //   }).then((d) => {
  //     console.log(d, 'e');
  //     return d + 1;
  //   }).then((y) => {
  //     return (new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         let f = y;
  //         console.log(f, 'f');
  //         resolve(f);
  //       }, 2000);
  //     }));
  //   }).then((x) => {
  //     setTimeout(() => {
  //       let e = x + 1;
  //       console.log(e, 'g');
  //     }, 1000);
  //   }).catch(() => {
  //     console.log('fail');
  //   }).finally(() => {
  //     console.log(result);
  //   });
  // }
  // name();

  function name(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`це перша функція ${num}`);
        resolve(2);
      }, 0);
    });
  }

  function name2(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`це перша функція ${num}`);
        resolve(3);
      }, 2000);
    });
  }

  function name3(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`це перша функція ${num}`);
        resolve(4);
      }, 2000);
    });
  }

  // let stsrtPromise = name(1)
  // .then((a) => name2(a))
  // .then((b) => name3(b))
  // .catch(() => console.log('error'))
  // .finally(() => console.log('final'));


  async function test() {
    try {
      let first = await name(1);
      let second = await name2(first);
      let third = await name3(second);
    } 
    catch(a){
      console.log('err');
    }
  }

  test();


  //_____________________________________________________
});