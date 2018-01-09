//console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
var notes = require('./notes.js');

const argv = yargs
	.command('add','Add a new note', {
		title: {
			describe: 'Title of note',
			demand: true,
			alias: 't'
		},
		body: {
			describe : 'Body of note',
			demand: true,
			alias: 'b'
		}
	})
	.command('remove','Remove an exisiting note', {
		title: {
			describe: 'Title of note',
			demand: true,
			alias: 't'
		}
	})
	.command('read','Read an exisiting note', {
		title: {
			describe: 'Title of note',
			demand: true,
			alias: 't'
		}
	})
	.command('list','List all notes')
	.help()
	.argv;

var command = argv._[0];

if (command == "add") {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note created');
		notes.logNote(note);
	} else {
		console.log('Note title taken');
	}
} else if (command == "list") {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((note) => notes.logNote(note));
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