const utils = require('./utils');

it('should add two number',()=> {
var res = utils.add(33,11);

if(res !== 44){
    throw new Error(`Expected 44, but got ${res}`)
}

});

it('should square the given number',()=>{
var res = utils.square(3);

if(res !==9){
    throw new Error(`Expected 9, but got ${res}.`);
}

});