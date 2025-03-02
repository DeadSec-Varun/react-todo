import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Todo from './TodoSchema.js'; // Import the Todo model

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/deadsec')
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error));

app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching todos' });
  }
});

app.post('/todos', async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
      completed: false,
    });
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Error creating todo' });
  }
});

app.put('/todos/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, completed: req.body.completed },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Error updating todo' });
  }
});

app.delete('/todos/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting todo' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});