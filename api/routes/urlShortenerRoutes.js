'use strict';

module.exports = function(app) {
  var urlShortener = require('../controllers/urlShortenerController.js');

  // todoList Routes
  app.route('/urls')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/urls/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};
