'use strict';


let menuBtn1 = document.querySelectorAll('[class="item-link"]');


// menuBtn1.forEach(element => {
//   element.addEventListener('click', () => {
//     element.classList.toggle('active');
//   });
// });

let btn = document.querySelectorAll('.btn-list');

btn.addEventListener('click', (e) => {
  if (e.target && e.target.tagName == 'BUTTON') {
    console.log('aaaaaaa');
  } 
});


