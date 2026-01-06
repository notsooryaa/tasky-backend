const Task = require('../models/task.model');

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate('project assignedTo createdBy');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get task by ID
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('project assignedTo createdBy');
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new task
const createTask = async (req, res) => {
  const task = new Task(req.body);
  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a task
const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};