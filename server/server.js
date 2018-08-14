const express = require('express'), bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo'), {User} = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    new Todo(req.body).save().then((doc) => {
        res.send(doc);
    }, e => res.status(400).send(e));
});

app.listen(3000, console.log('Started on port 3000'));

module.exports = {
  app
};