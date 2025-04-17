// import 'module-alias/register'; // Import module-alias/register for path aliasing
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { todo } from './src/routes/todo.js';
import { user } from './src/routes/user.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config(); // Load environment variables from .env file

app.use(cors());
app.use(express.json());
app.use('/todos',todo); // Use the todo router for /todos endpoint
app.use('/user',user); // Use the password router for /passwords endpoint

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error));


app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});