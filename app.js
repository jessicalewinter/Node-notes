const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note ',
  demand: true,
  alias: 't',
};

const bodyOptions = {
  describe: 'Body of a note',
  demand: true,
  alias: 'b',
};

const argv = yargs
.command('add', 'Add a new note',{
  title: titleOptions,
  body: bodyOptions,
})
.command('list', 'List all notes')
.command('read', 'Read a note',{
  title: titleOptions,
})
.command('remove', 'Remove a note', {
  title: titleOptions,
})
.help()
.argv;
var command = argv._[0];


if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log('Note created!!!');
    notes.logNote(note);
  }else {
    console.log('Note title taken :(');
  }

}else if(command === 'list'){
  var listNotes = notes.getAll();
  console.log(`Printing ${listNotes.length} notes`);
  listNotes.forEach((note) => notes.logNote(note));

}else if(command === 'read'){
  var readNote = notes.getNote(argv.title);
  if(readNote){
    console.log('Reading note:');
    notes.logNote(readNote);
  }else {
    console.log('Note not found :(');
  }


}else if(command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var messageRemove = noteRemoved ? 'Note removed': 'Note not found';
  console.log(messageRemove);

}else{
  console.log('Comand not recognized');
}
