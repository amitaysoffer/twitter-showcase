// import express
const express = require('express');
// import axios
const axios = require('axios');
// import tweets dummy data
// const data = require('./twitterData');
// initialize express
const app = express();
// port to listen to
const port = 5000;


app.get('/api/tweets', (req, res) => {

  axios.get('https://swapi.dev/api/people/1/')
    .then(function (response) {
      // handle success
      res.send(response.data)
      // console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
});



app.listen(port, () => `Server running on port ${port}`);