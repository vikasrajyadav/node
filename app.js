const fs = require("fs");
const _ = require("lodash");

const notes = require("./note.js");
const yargs = require("yargs");

var titleOption = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};

var bodyOption = {
  describe: "body of note",
  demand: true,
  alias: "b"
};

const argv = yargs
  .command("add", "Add a new note", {
    title: titleOption,
    body: bodyOption
  })
  .command("list", "List all notes")
  .command("read", "read a note", {
    title: titleOption
  })
  .command("remove", "remove a note", {
    title: titleOption
  })
  .help().argv;

var command = argv._[0];

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
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(note => {
    console.log(note.title);
    console.log("__");
    console.log(note.body);
  });
} else if (command == "read") {
  notes.getNote(argv.title);
} else if (command == "remove") {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note was Removed" : "Note not found";
  console.log(message);
} else {
  console.log("Command not recognized");
}
