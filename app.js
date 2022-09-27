const express = require('express');
const insertItem = require('./routes/item');
const userRoutes = require('./routes/user')
const loginRouters = require('./routes/auth');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const app = express();
require('dotenv').config();

//MongoDB session store
const store = new MongoDBStore({
  uri: process.env.MONGODB_URL,
  collection: 'sessions',
})
console.log(store);

//Mongo database configuration
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log('Connected to MongoDB');
})

//Middleware
app.use(express.json());

//Session Middleware
app.use(
  session({
    secret: 'gayan',
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 10
    },
    store: store,
  })
)

//Router middleware
app.use('/api/item', insertItem);
app.use('/api/user', userRoutes);
app.use(loginRouters);

//Run Server
app.listen(process.env.PORT, () => console.log(`Port ${process.env.PORT}!`))