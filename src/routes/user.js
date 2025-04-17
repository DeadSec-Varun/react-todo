import express, { request } from 'express';
import bcrypt from 'bcrypt'; // Import bcrypt for password hashing
import User from '../../models/UserSchema.js'; // Import the User model
import jwt from 'jsonwebtoken'; // Import jsonwebtoken for token generation
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user_id);
    res.json({'username':user.username});
  } catch (error) {
    res.status(500).json({ error: error.message }); // Include error message for debugging
  }
});

router.post('/signup', async (req, res) => {  
  try {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    // Hash the password before saving it to the database
    newUser.password = await bcrypt.hash(newUser.password, 10);
    const user = await newUser.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
    console.log("Token: "+token);
  
    res.status(201).json({
      message: 'Signup successfully',
      user: {
        id: user._id,
        username: user.username,
      },
      token
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error creating user', 
      error: error.message // Include error message for debugging
  });
  }
});

router.post('/login', async (req, res) => {  
  try {
    
    const user = await User.findOne({ username: req.body.username });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      // If user not found or password does not match, return 401 Unauthorized
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    // Generate a token for the user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
    console.log("Token: "+token);
    
    // Set the token in the response header
    res.status(200).json({
      message: 'Login successfully',
      user: {
        id: user._id,
        username: user.username,
      },
      token
  });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error logging in', 
      error: error.message // Include error message for debugging
  });
  }
});

export const user = router;
