const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;

if(process.env.NODE_ENV === 'test'){

  console.log(process.env.NODE_ENV);
  mongoose.connect('mongodb://localhost/muber');

}
app.use(bodyParser.json());

routes(app);
app.use((err, req, res, next) => {
  res.status(422).send({error: err.message});
});

// app.post('/api', (req, res)=>{});
// app.put('/api', (req, res)=>{});
// app.delete('/api', (req, res)=>{});

module.exports = app;
