console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ',command);
console.log('Yargs: ', argv);

var noteExist = (note) => {
  if(note){
    console.log('Note created!!!');
    console.log('----');
    console.log('Title: ', note.title);
    console.log('Body: ', note.body);
  }else{
    console.log( 'Note title taken :(');
  }
};


if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  noteExist(note);
}else if(command === 'list'){
  notes.getAll();
}else if(command === 'read'){
  notes.getNote(argv.title);
}else if(command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);

  var messageRemove = noteRemoved ? 'Note remooved': 'Note not found';
  console.log(messageRemove);

}else{
  console.log('Comand not recognized');
}
