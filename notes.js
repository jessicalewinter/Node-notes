console.log('Starting note.js');

const fs = require('fs');
module.exports.age = 25;

// Fetch Notes
var fetchNotes = () => {
  try{
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  }catch(e){
    return [];
  }
};

//Save notes
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

//Add note
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
      title: title,
      body: body,
    };

    var duplicateNotes = notes.filter((note) => {
      return note.title === title;
    });

    if (duplicateNotes.length === 0){
      notes.push(note);
      saveNotes(notes);
      return note;
    }

};

//Get all
var getAll = () => {
    console.log('Getting all notes');
}

//Get note
var getNote = (title) => {
  console.log('Getting note', title);
}

//Remove Note
var removeNote = (title) => {
  console.log('Removing note', title);

  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;

}

module.exports = {
  addNote: addNote,
  getAll: getAll,
  getNote: getNote,
  removeNote: removeNote,
}
