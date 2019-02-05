console.log('Starting Note');



var addNote = (title,body) => {
	 console.log('adding Note',title,body);
}

var getAll = () => {
	console.log('Getting all notes');
}

var getNote = (title) => {
	console.log('title');
}

var removeNote = (title) => {
	console.log('removing note',title)
}

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
};