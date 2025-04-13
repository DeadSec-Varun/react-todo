// import 'module-alias/register'; // Import module-alias/register for path aliasing
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { todo } from './src/routes/todo.js';
import { password } from './src/routes/password.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/todos',todo); // Use the todo router for /todos endpoint
app.use('/passwords',password); // Use the password router for /passwords endpoint

mongoose.connect('mongodb://127.0.0.1:27017/deadsec')
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error));


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});