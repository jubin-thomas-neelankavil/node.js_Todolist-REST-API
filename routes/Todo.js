const express = require('express');

const router = express.Router()

const { createTodo,updatedTodo ,deleteTodo,getonetodo,getAllTodo} = require('../controllers/TodoControllers');

router.route('/').post(createTodo);
router.route('/:id').put(updatedTodo);
router.route('/:id').delete(deleteTodo);
router.route('/:id').get(getonetodo);
router.route("/").get(getAllTodo)

module.exports = router