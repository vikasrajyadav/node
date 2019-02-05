var square = x => x * x;
console.log(square(4));

var user = {
  name: "Andrew",
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`Hi. i'm ${this.name}`);
  }
};

user.sayHi(1, 2, 3);
