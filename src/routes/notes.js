const { Router } = require('express');
const router = Router();

const {
	createNote,
	getNotes,
	getNote,
	updateNote,
	deleteNote,
} = require('../controllers/notes.controller');

// Operations notes

router
	.route('/')
	.post(createNote)
	.get(getNotes);
router
	.route('/:id')
	.get(getNote)
	.put(updateNote)
	.delete(deleteNote);

module.exports = router;
