const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose');
const toDoRoute = require('./routes/toDo');

mongoose.connect('mongodb+srv://jdevot:bpAi4faQxyhqT7b1@cluster0.wzty9.mongodb.net/todolist?retryWrites=true&w=majority',
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
app.use('/api/todo', toDoRoute);

module.exports = app;