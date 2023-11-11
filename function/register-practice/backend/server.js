const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors'); // Require CORS module
const User = require('./models/User'); // You will need to create this model

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors()); // Use CORS middleware to enable CORS

// Signup route
app.post('/users/signup', async (req, res) => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user instance and save it to the database
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    
    const newUser = await user.save();
    res.status(201).json({ message: 'User created!', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
