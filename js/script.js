'use strict';

window.addEventListener('DOMContentLoaded', () => {
  //_____________________________________________________

  let btn = document.querySelector('button.btn_white');

  // btn.addEventListener('click', () => {
  //   let delay = setTimeout(modalWindow, 2000);
  // });
  
  // btn.addEventListener('click', () => {
  //   let delay = setInterval(modalWindow, 2000);
  // });

let delay = setTimeout(function name() {
  console.log('hello');
  delay = setTimeout(name, 500);
}, 500);


  function modalWindow() {
    console.log('hello !!!');
  }

  //_____________________________________________________
});