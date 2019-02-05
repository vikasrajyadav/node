console.log("Starting Note");

const fs = require("fs");

var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync("notes-data.json");
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

var saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title, // actual syntax title: 'title', but if the name is same then we don't have to assign the value
    body
  };

  var duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log("Getting all notes");
};

var getNote = title => {
  console.log("title");
};

var removeNote = title => {
  notes = fetchNotes();
  filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
