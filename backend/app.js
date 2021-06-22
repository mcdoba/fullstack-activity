const express = require('express');
const bodyParser = require('body-parser');
const Product = require('./models/product');
const stuffRoutes = require('./routes/stuff');


const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://mcdoba44:Quentindu44@cluster0.ididd.mongodb.net/fullstack?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(bodyParser.json());
  
app.use('/api/stuff', stuffRoutes);
  
  module.exports = app;