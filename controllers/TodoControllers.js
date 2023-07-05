const mongoose = require("mongoose");

const Todo = require("../models/todomodels");

//create task

exports.createTodo = async (req, res) => {
  const { task, active } = req.body;

  const todo = await Todo.create({ task, active });

  res.status(200).json({
    success: true,
    data: todo,
    message: "Task created successfully",
  });
};



//update todo 
exports.updatedTodo = async (req, res) => {

  try {
    const todos = await Todo.findOne({ _id: req.params.id });
    if (todos) {
      todos.task = req.body.task;
      todos.active = req.body.active;

      const updatedTask = await todos.save();
      res.status(200).json({
        success: true,
        data: updatedTask,
        message: "updated successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        data: null,
        message: "task not found",
      });
    }
  } catch (error) {
    console.log(error);
  }
};


//delete todo


exports.deleteTodo = async (req, res) => {

    try {
        const todo = await Todo.findOne({ _id: req.params.id })
        console.log(todo,"todo")
        if (todo) {
            await todo.deleteOne();
            res.status(200).json({
                success: true,
              message: "task deleted"
            })
        } else {
            res.status(500).json({
                success: false,
                data: null,
                message:"not found"
            })
        }
    } catch (error) {
        console.log(error)
    }
}


exports.getonetodo = async (req,res) => {


  try {
    const oneTodo = await Todo.findById({ _id: req.params.id })

    if (oneTodo) {
      res.status(200).json({
        success: true,
        data: oneTodo,
        message: "this is your todo"
      })
    } else {
      res.status(500).json({
        success: false,
        data: null,
        message: " your todo not found"
      })
}


  } catch (error) {
    console.log(error)
  }
}

exports.getAllTodo = async (req,res) => {

try {
  const allTodo = await Todo.find()

  if (allTodo) {
    res.status(200).json({
      success: true,
      data: allTodo,
      message: "this is your all todo"
    })
  } else {
    res.status(500).json({
      success: false,
      data: null,
      message: "todo not found"
    }
    )
  }
} catch (error) {
  console.log(error)
}
}
