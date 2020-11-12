'use strict';


let menuBtn1 = document.querySelectorAll('[class="item-link"]');

menuBtn1.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle('active');
  });
});

let btn = document.querySelector('.btn-list');

btn.addEventListener('click', (e) => {
  if (e.target && e.target.tagName === 'BUTTON') {
    e.target.classList.toggle('active');
    document.body.classList.toggle('as');
  } 
});

let newBtn = document.createElement('button');
newBtn.classList.add('new');
btn.append(newBtn);

