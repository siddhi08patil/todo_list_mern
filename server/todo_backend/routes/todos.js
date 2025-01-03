const express = require('express')
const Todo = require('../models/Todo')
const router = express.Router()

// GET all todos
router.get('/', async (req, res) => {
    try {
        const data = await Todo.find();
        res.status(200).json(data); // Send the data once
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new todo
router.post('/', async (req, res) => {
    try {
        const { title } = req.body;
        const newTodo = new Todo({ title });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo); // Send the created todo with status 201
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//delete
router.delete("/:id", async (req, res) => {
    try {
      const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
  
      if (!deletedTodo) {
        return res.status(404).json({ message: "Todo not found" });
      }
  
      res.status(200).json({ message: "Deleted successfully", todo: deletedTodo });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
//update
router.put('/:id',async(req,res)=>{
    try{
        const {title}=req.body
        const updatedTode = await Todo.findByIdAndUpdate(
            req.params.id,
            {title},
            { new: true, runValidators: true }
        )
        res.status(200).json({ message: "updated successfully", todo: updatedTode });
    }catch (err) {
        res.status(500).json({ message: err.message });
      }
})

module.exports = router