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

  let dedline = '2021-11-17';

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
  let closeBTN = document.querySelector('.modal__close');
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
    if ((e.target && e.target === closeBTN) || (e.target && e.target === modalWindow)) {
      addClassShow();
      document.body.style.overflow = "";
      document.body.style.marginRight = ``;
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
      addClassShow();
      document.body.style.overflow = "";
      document.body.style.marginRight = ``;
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

  // add menu card

  class MenuCard {
    constructor(src, alt, title, textContent, price, cardPlace, ...additionalClasses) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.textContent = textContent;
      this.price = Math.floor(price / 1.17);
      this.cardPlace = document.querySelector(cardPlace);
      this.additionalClasses = additionalClasses;

    }

    createCard() {
      let cardDiv = document.createElement('div');
      cardDiv.classList.add('menu__item');
      this.additionalClasses.forEach(element => {
        cardDiv.classList.add(element);
      });
      cardDiv.innerHTML = `
        <img src=${this.src} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.textContent}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>`;
      this.cardPlace.append(cardDiv);
    }
  }

  new MenuCard(
    "img/slider/food-12.jpg",
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur exercitationem consectetur tenetur! Ea sit provident necessitatibus aliquam cumque consequatur corporis excepturi dolorem iste! Numquam, non dolor. Quis, laudantium eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur exercitationem consectetur tenetur! Ea sit provident necessitatibus aliquam cumque consequatur corporis excepturi dolorem iste! Numquam, non dolor. Quis, laudantium eaque!",
    "555",
    ".menu__field .container",
    "big",
    'small'
  ).createCard();

  new MenuCard(
    "img/slider/olive-oil.jpg",
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur exercitationem consectetur tenetur! Ea sit provident necessitatibus aliquam cumque consequatur corporis excepturi dolorem iste! Numquam, non dolor. Quis, laudantium eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur exercitationem consectetur tenetur! Ea sit provident necessitatibus aliquam cumque consequatur corporis excepturi dolorem iste! Numquam, non dolor. Quis, laudantium eaque!",
    "44882",
    "[data-container]"
  ).createCard();

  new MenuCard(
    "img/tabs/hamburger.jpg",
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur exercitationem consectetur tenetur! Ea sit provident necessitatibus aliquam cumque consequatur corporis excepturi dolorem iste! Numquam, non dolor. Quis, laudantium eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur exercitationem consectetur tenetur! Ea sit provident necessitatibus aliquam cumque consequatur corporis excepturi dolorem iste! Numquam, non dolor. Quis, laudantium eaque!",
    "45",
    "[data-container]",
    'small'

  ).createCard();
  // add menu card

  // form

  let form = document.querySelectorAll('form');
  form.forEach(item => {
    formAction(item);
  });

  function formAction(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      const object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });

      fetch('./server.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(object)
        }).then((data) => data.text)
        .then((data) => {
          console.log(data);
          createMassageBlock(form, massage.successfully);
        }).catch(() => {
          createMassageBlock(form, massage.fail);
        }).finally(() => {
          form.reset();
        });
    });
  }
  let massage = {
    sending: ``,
    successfully: 'Ваш запит прийнято. Найближчим часом з вами звяжуться наші менеджери :)',
    fail: 'Невдача. Спробуйте пізніше :('
  };

  function createMassageBlock(form, status) {
    let massageBlock = document.createElement('div');
    massageBlock.style.cssText = `
    text-align: center;
    margin-top: 30px;
    padding: 20px 10px;
    font-size: 24px;
    height: 100%;
    background-color: rgba(0, 128, 0, 0.25);
    `;
    form.append(massageBlock);
    massageBlock.textContent = status;
    setTimeout(() => {
      massageBlock.remove();
    }, 5000);
  }


  fetch('http://localhost:3000/menu')
    .then(data => data.json())
    .then(res => console.log(res));

  // form


  //slider
  let sliderItem = document.querySelectorAll('.offer__slide');
  let curentSlider = 1;
  let totalSliderQuantyty = document.querySelector('#total');
  let curentSliderQuantyty = document.querySelector('#current');
  let sliderBtn = document.querySelector('.offer__slider-counter');

  function showSliderItem(i = 1) {
    sliderItem.forEach((item) => {
      item.style.display = 'none';
    });
    sliderItem[i - 1].style.display = 'block';
  }

  function insertTotalSliderQuantyty(b) {
    if (b < 10) {
      totalSliderQuantyty.textContent = `0${b}`;
    } else {
      totalSliderQuantyty.textContent = `${b}`;
    }
  }

  function insertCurentSliderQuantyty(b = 1) {
    if (b < 10) {
      curentSliderQuantyty.textContent = `0${b}`;
    } else {
      curentSliderQuantyty.textContent = `${b}`;
    }
  }

  sliderBtn.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('offer__slider-prev')) {
      if (curentSlider === 1) {
        curentSlider = sliderItem.length;
      } else {
        --curentSlider;
      }
    }
    if (e.target && e.target.classList.contains('offer__slider-next')) {
      if (curentSlider === sliderItem.length) {
        curentSlider = 1;
      } else {
        ++curentSlider;
      }
    }
    showSliderItem(curentSlider);
    insertCurentSliderQuantyty(curentSlider);
  });

  showSliderItem();
  insertCurentSliderQuantyty();
  insertTotalSliderQuantyty(sliderItem.length);

  //slider


  // Calc
  let sex = 'female';
  let high;
  let weight;
  let age;
  let actionRatio = 1.375;
  let result;
  let genderItem = document.querySelectorAll('#gender .calculating__choose-item');
  let actitvityItem = document.querySelectorAll('.calculating__choose_big .calculating__choose-item');
  let antroItem = document.querySelectorAll('.calculating__choose_medium .calculating__choose-item');
  let resulrArea = document.querySelector('.calculating__result span');

  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
    removeActiveClass(genderItem, 'calculating__choose-item_active');
    genderItem.forEach(element => {
      if (element.getAttribute('data-atr') === sex) {
        element.classList.add('calculating__choose-item_active');
      }
    });
  }
  if (localStorage.getItem('activity')) {
    actionRatio = localStorage.getItem('activity');
    removeActiveClass(actitvityItem, 'calculating__choose-item_active');
    actitvityItem.forEach(element => {
      if (element.getAttribute('data-atr') === actionRatio) {
        element.classList.add('calculating__choose-item_active');
      }
    });
  }

  if (localStorage.getItem('height')) {
    high = localStorage.getItem('height');
    antroItem.forEach(element => {
      if (element.getAttribute('id') === 'height') {
        element.value = localStorage.getItem('height');
      }
    });
  }

  if (localStorage.getItem('weight')) {
    weight = localStorage.getItem('weight');
    antroItem.forEach(element => {
      if (element.getAttribute('id') === 'weight') {
        element.value = localStorage.getItem('weight');
      }
    });
  }

  if (localStorage.getItem('age')) {
    age = localStorage.getItem('age');
    antroItem.forEach(element => {
      if (element.getAttribute('id') === 'age') {
        element.value = localStorage.getItem('age');
      }
    });
  }

  console.log(high, weight, age);

  function getData(area, addclass) {
    area.forEach(element => {
      element.addEventListener('click', () => {
        switch (element.getAttribute('id')) {
          case 'female':
            sex = 'female';
            removeActiveClass(area, addclass);
            element.classList.add(addclass);
            localStorage.setItem('sex', sex);
            console.log(sex);
            break;

          case 'male':
            sex = 'male';
            removeActiveClass(area, addclass);
            element.classList.add(addclass);
            localStorage.setItem('sex', sex);
            console.log(sex);
            break;

          case 'low':
            actionRatio = 1.2;
            removeActiveClass(area, addclass);
            element.classList.add(addclass);
            localStorage.setItem('activity', actionRatio);
            console.log(actionRatio);
            break;

          case 'small':
            actionRatio = 1.375;
            removeActiveClass(area, addclass);
            element.classList.add(addclass);
            localStorage.setItem('activity', actionRatio);
            console.log(actionRatio);
            break;

          case 'medium':
            actionRatio = 1.55;
            removeActiveClass(area, addclass);
            element.classList.add(addclass);
            localStorage.setItem('activity', actionRatio);
            console.log(actionRatio);
            break;

          case 'high':
            actionRatio = 1.725;
            removeActiveClass(area, addclass);
            element.classList.add(addclass);
            localStorage.setItem('activity', actionRatio);
            console.log(actionRatio);
            break;
        }
        getResult();
        console.log(sex, high, weight, age, actionRatio, result);
      });

      element.addEventListener('change', () => {
        if (element.value.match(/\D/g)) {
          element.style.border = '3px solid red';
        } else {
          element.style.border = 'none';
        }

        switch (element.getAttribute('id')) {
          case 'height':
            high = +element.value;
            console.log(high);
            localStorage.setItem('height', high);
            break;

          case 'weight':
            weight = +element.value;
            console.log(weight);
            localStorage.setItem('weight', weight);
            break;

          case 'age':
            age = +element.value;
            console.log(age);
            localStorage.setItem('age', age);
            break;
        }
        getResult();
      });
    });
  }

  function removeActiveClass(area, addclass) {
    area.forEach(element => {
      element.classList.remove(addclass);
    });
  }

  function getResult() {
    if (!sex || !high || !weight || !age || !actionRatio) {
      result = `---`;
      resulrArea.textContent = `${(result)}`;
    } else {
      if (sex === 'female') {
        result = (447.6 + (9.2 * weight) + (3.1 * high) - (4.3 * age)) * actionRatio;
      } else if (sex === 'male') {
        result = (88.36 + (13.4 * weight) + (4.8 * high) - (5.7 * age)) * actionRatio;
      }
      resulrArea.textContent = `${Math.floor(result)}`;
    }
  }

  getData(genderItem, 'calculating__choose-item_active');
  getData(actitvityItem, 'calculating__choose-item_active');
  getData(antroItem);
  getResult();


  // Calc

  //_____________________________________________________
});