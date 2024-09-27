const express = require('express');
const app = express();
app.use(express.json());
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);
// Sample route
app.get('/', (req, res) => {
    res.json({ message: 'Hello from the backend!'});
});
module.exports = app;
