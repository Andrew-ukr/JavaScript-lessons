'use strict';

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.sayHello = function () {
    // console.log(`Привіт ${this.name}, тобі дійсно лише ${this.id} роки ???`);
  };
}

let ivan = new User('Ivan', 28);
let andrii = new User('Andrii', 32);
// console.log(ivan);
// console.log(andrii);
andrii.sayHello();

let obj = {
  a: 10,
  b: 15,
  sum: function () {
    let name = () => {
      let a = () => {
        // console.log(this);
      };
      a();
    };
    name();
  }
};
obj.sum();
// console.log(obj);


class Rectangle {
  constructor(width, hight) {
    this.width = width;
    this.hight = hight;
  }

  calcSquea() {
    return (this.width * this.hight);
  }
}

// let a = new Rectangle(10, 10);
// let b = new Rectangle(100, 10);
// console.log(a.calcSquea());
// console.log(b.calcSquea());

class NewRectangle extends Rectangle {
  constructor(width, hight, text, id) {
    super(width, hight);
    this.text = text;
    this.id = id;
  }

  showProp() {
    return (`${this.text}, ${this.id}`);
  }
}


let c = new NewRectangle(10, 10, 'fff', 77777);
console.log(c.calcSquea(), c.showProp());
console.log(c.showProp());