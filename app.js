const express = require('express');
const routes = require('./routes/routes');
const app = express();

routes(app);
// app.post('/api', (req, res)=>{});
// app.put('/api', (req, res)=>{});
// app.delete('/api', (req, res)=>{});

module.exports = app;
