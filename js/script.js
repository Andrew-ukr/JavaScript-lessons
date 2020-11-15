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

  let dedline = '2020-11-17';

  let timerBlock = document.querySelector('.timer');
  let days = timerBlock.querySelector('#days');
  let hours = timerBlock.querySelector('#hours');
  let minutes = timerBlock.querySelector('#minutes');
  let seconds = timerBlock.querySelector('#seconds');
  let leftTimeMS;

  function getTimeLeft(dedline) {
    leftTimeMS = (Date.parse(dedline) - 7200000) - Date.parse(new Date()); // 7200000 це 2 години .

    let daysNum = Math.floor(leftTimeMS / (1000 * 60 * 60 * 24));
    let hoursNum = Math.floor((leftTimeMS / (1000 * 60 * 60)) % 24);
    let minutesNum = Math.floor((leftTimeMS / (1000 * 60)) % 60);
    let secondsNum = Math.floor((leftTimeMS / 1000) % 60);

    days.innerHTML = wrapper(daysNum);
    hours.innerHTML = wrapper(hoursNum);
    minutes.innerHTML = wrapper(minutesNum);
    seconds.innerHTML = wrapper(secondsNum);

    function wrapper(num) {
      if (num < 10) {
        return (`0${num}`);
      }
      return (num);
    }
  }

  let stop = setInterval(() => {
    if (leftTimeMS > 0) {
      getTimeLeft(dedline);
    } else {
      clearInterval(stop);
    }
  }, 1000);

  getTimeLeft(dedline);

  // timer

  // modal

  let modalBtn = document.querySelectorAll('[data-modal]');
  let modalWindow = document.querySelector('.modal');
  let modalInterval = setTimeout(addClassShow, 5000);
  let scrollWidth;

  function addClassShow() {
    modalWindow.classList.toggle('show');
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scrollWidth}px`;
    clearInterval(modalInterval);
    document.removeEventListener('scroll', scrollListener);
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', addClassShow);
  });

  modalWindow.addEventListener('click', (e) => {
    if ((e.target && e.target.classList.contains('modal__close')) || (e.target && e.target === modalWindow)) {
      addClassShow();
      document.body.style.overflow = "";
      document.body.style.marginRight = `${0}px`;

    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
      addClassShow();
      document.body.style.overflow = "";
      document.body.style.marginRight = `${0}px`;
    }
  });

  function scrollListener() {
    if ((document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight <= 100)) {
      addClassShow();
      document.removeEventListener('scroll', scrollListener);
    }
  }

  function modalMR() {
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();
  }

  document.addEventListener('scroll', scrollListener);
  scrollListener();
  modalMR();
  // modal










  //_____________________________________________________
});