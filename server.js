// import express
const express = require('express');
// initialize express
const app = express();
// port to listen to
const port = 5000;
// import tweets dummy data
const data = require('./twitterData');


app.get('/api/', (req, res) => {
  res.json(data);
});



app.listen(port, () => `Server running on port ${port}`);