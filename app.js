console.log("Hello World");
const fs = require('fs');
const _ = require('lodash');

const notes = require('./note.js');
const yargs = require('yargs');

const argv = yargs.argv;
var command = argv._[0];


console.log('Command:',command);
console.log('yargs',argv);

if(command === 'add'){
    notes.addNote(argv.title,argv.body);
console.log('Adding new note');
}
else if(command === 'list'){
    notes.getAll();
}
else if(command == 'read'){
notes.getNote(argv.title);
}
else if (command == 'remove'){
notes.removeNote(argv.title);
}
else {
    console.log('Command not recognized');
}