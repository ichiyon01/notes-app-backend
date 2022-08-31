const {
  addNoteHandler, getAllNotesHandler, getNoteByHandler, editNotebyHandler, deleteNoteByHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },

  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },

  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByHandler,
  },

  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNotebyHandler,
  },

  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByHandler,
  },
];

module.exports = routes;
