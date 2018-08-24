
const express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([
    {
      name: 'Javi',
      age: 35
    },
    {
      name: 'Pepe',
      age: 33
    },
    {
      name: 'juan',
      age: 22
    }
]);
});

if(!module.parent){ app.listen(3000); }




module.exports.app = app;
