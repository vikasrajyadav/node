// var obj = {
//     name : 'andrew',

// };

// var stringObj =  JSON.stringify(obj);
// console.log(typeof(stringObj));
// console.log(stringObj);

// var personString = '{"name":"andrew","age":25}';
// var person = JSON.parse(personString);
// console.log(typeof(person));
// console.log(person);

const fs = require('fs');

var originalNote ={
    title : 'some title',
    body : 'some body',

};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var  noteString = fs.readFileSync('notes.json');
var note = JSON.parse(originalNoteString);
console.log(typeof note);
console.log(note.title);