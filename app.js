const express = require('express');
const insertItem = require('./routes/item');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

//Mongo database configuration
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log('Connected to MongoDB');
})

//Middleware
app.use(express.json());

//Router middleware
app.use('/api/item', insertItem);

//Run Server
app.listen(process.env.PORT, () => console.log(`Port ${process.env.PORT}!`))