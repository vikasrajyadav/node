console.log("Hello World");
const fs = require("fs");
const _ = require("lodash");

const notes = require("./note.js");
const yargs = require("yargs");

const argv = yargs.argv;
var command = argv._[0];

console.log("Command:", command);
console.log("yargs", argv);

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    console.log("___");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log("Note title Taken");
  }
} else if (command === "list") {
  notes.getAll();
} else if (command == "read") {
  notes.getNote(argv.title);
} else if (command == "remove") {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was Removed' : 'Note not found';
    console.log(message);
} else {
  console.log("Command not recognized");
}
