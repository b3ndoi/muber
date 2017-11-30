const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

app.use(bodyParser.json());
routes(app);
// app.post('/api', (req, res)=>{});
// app.put('/api', (req, res)=>{});
// app.delete('/api', (req, res)=>{});

module.exports = app;
