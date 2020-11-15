'use strict';

window.addEventListener('DOMContentLoaded', () => {
  //_____________________________________________________

  // tabs
  let tabContent = document.querySelectorAll('.tabcontent');
  let tabheaderItems = document.querySelector('.tabheader__items');
  let tabheaderItem = document.querySelectorAll('.tabheader__item');

  function hide() {
    tabContent.forEach(element => {
      // element.style.display = 'none';
      element.classList.remove('show');
      element.classList.add('hide');
    });

    tabheaderItem.forEach(element => {
      element.classList.remove('tabheader__item_active');
    });
  }

  function show(i = 0) {
    // tabContent[i].style.display = 'block';
    tabContent[i].classList.remove('hide');
    tabContent[i].classList.add('show', 'animation');
    tabheaderItem[i].classList.add('tabheader__item_active');
  }

  function getTabheaderItem() {
    tabheaderItems.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains('tabheader__item')) {
        tabheaderItem.forEach((element, i) => {
          if (element === e.target) {
            hide();
            show(i);
          }
        });
      }
    });
  }

  hide();
  show();
  getTabheaderItem();
  // tabs

  // timer

  let dedline = '2020-12-31';

  let timerBlock = document.querySelector('.timer');
  let days = timerBlock.querySelector('#days');
  let hours = timerBlock.querySelector('#hours');
  let minutes = timerBlock.querySelector('#minutes');
  let seconds = timerBlock.querySelector('#seconds');

  function getTimeLeft(dedline) {
    let leftTimeMS = Date.parse(dedline) - Date.parse(new Date());

    let daysNum = Math.floor(leftTimeMS / (1000 * 60 * 60 * 24));
    let hoursNum = Math.floor((leftTimeMS / (1000 * 60 * 60)) % 24);
    let minutesNum = Math.floor((leftTimeMS / (1000 * 60)) % 60);
    let secondsNum = Math.floor((leftTimeMS / 1000) % 60);

    days.innerHTML = wrapper(daysNum);
    hours.innerHTML = wrapper(hoursNum);
    minutes.innerHTML = wrapper(minutesNum);
    seconds.innerHTML = wrapper(secondsNum);

    if (leftTimeMS < 0) {
      clearInterval(refresh);
    }

    function wrapper(num) {
      if (num < 10) {
        return (`0${num}`);
      }
      return (num);
    }
  }

  function setInt() {
    setInterval(() => {
      let refresh = getTimeLeft(dedline);
    }, 1000);
  }
  getTimeLeft(dedline);
  setInt();

  // timer

  // modal

  let modalBtn = document.querySelectorAll('[data-modal]');
  let modalWindow = document.querySelector('.modal');


  function addShowClass() {
    modalWindow.classList.toggle('show');
    document.body.style.overflow = "hidden";
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', addShowClass);
  });

  modalWindow.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('modal__close') || e.target.classList.contains('modal')) {
      addShowClass();
    document.body.style.overflow = "";

    } 
  });

  // modal











  //_____________________________________________________
});