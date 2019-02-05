console.log("Starting Note");

const fs = require("fs");

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title, // actual syntax title: 'title', but if the name is same then we don't have to assign the value
    body
  };

  try {
    var noteString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(noteString);
  } catch (e) {}

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log("Getting all notes");
};

var getNote = title => {
  console.log("title");
};

var removeNote = title => {
  console.log("removing note", title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
