var square = x => x * x;
console.log(square(10));

//New functions to arrow functions

var user = {
  name: 'Jessica',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};
user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);
