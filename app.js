console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;

var notes = require('./notes.js');

var command = argv._[0];
console.log('Yargs', argv);

console.log('Command: '+command);


if (command == "add") {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note created');
		notes.logNote(note);
	} else {
		console.log('Note title taken');
	}
} else if (command == "list") {
	notes.getAll();
} else if (command == "remove") {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note not found for removal';
	console.log(message);
} else if (command == "read") {
	var note = notes.getNote(argv.title);
	if (note) {
		notes.logNote(note);
	} else {
		console.log('Note not found');
	}
} else {
	console.log('Command not recognized');
}