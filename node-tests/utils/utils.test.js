const expect = require("expect");
const utils = require("./utils");

//test case 1

it("should add two number", () => {
  var res = utils.add(33, 11);

  //mjackson expect testing

  // https://github.com/mjackson/expect check this to more testing option

  expect(res).toBe(44);

  //   if (res !== 44) {
  //     throw new Error(`Expected 44, but got ${res}`);
  //   }
});

//test case 2

it("should square the given number", () => {
  var res = utils.square(3);

  //   expect(res).toBe(9).toBeA('number');
  expect(res).toBe(9);

  //   if (res !== 9) {
  //     throw new Error(`Expected 9, but got ${res}.`);
  //   }
});

//should verify first and last names are set
//assert it in includes firstname and last name with proper values
it("Should first name and last name set", () => {
  var user = { location: "Philadelphia", age: 25 };
  var res = utils.setName(user, "Andrew Mead");

  // expect(user).toEqual(res);

//   expect(res).toInclude({
//     firstName: "Andrew",
//     lastName: "Mead"
//   });
});

// it('should expect some values',()=>{
// // expect(12).toNotBe(12);
// // expect({name: 'andrew'}).toNotEqual({name:'Andrew'});
// // expect([2,3,4]).toExclude(1);
// expect({
//     name:'Andrew',
//     age: 25,
//     location: 'Philadelphia',
// }).toInclude({
// age: 25,
// })
// });
