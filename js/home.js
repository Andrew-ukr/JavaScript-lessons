/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */





// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/








/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  getMovies: function () {
    for (let i = 0; i < 2; i++) {
      let q1;
      let q2;

      do {
        q1 = prompt('Один из последних просмотренных фильмов?', '');
      } while (q1 === '' || q1 === null || q1.length > 50);

      do {
        q2 = prompt('На сколько оцените его?', '');
      } while (q2 === '' || q2 === null || q2.length > 50);

      personalMovieDB.movies[q1] = q2;
    }
  },
  showViewerStatus: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      alert("Вы классический зритель");
    } else {
      alert("Произошла ошибка");
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat === false) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat === false) {
      return (personalMovieDB.privat = true);
    } else {
      return (personalMovieDB.privat = false);
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      let answerGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');

      while (answerGenres === '' || answerGenres === null) {
        alert('Введите коректние дание');
        answerGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
      }

      personalMovieDB.genres[i] = answerGenres;
    }

    personalMovieDB.genres.forEach((value, i) => {
      console.log(`Любимый жанр # ${i + 1} - это ${value}`);
    });
  }
};