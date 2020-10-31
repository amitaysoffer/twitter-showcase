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


// POST request- get a bearer of token from twitter.
    // 1. This Token will be sent back to twitter on every request I make to twitter, so twitter will know based on that Token who am I. 
    // 2. Take the URL and do a post request- https://api.twitter.com/oauth2/token
    // 3. Pass in API consumer keys- API key and API secret key 
    // 4. Takes one parameter: grant_type (type of request for authentication) 
    // 5.  Authorisation- like credentials 
    // 6. Finally we receive the bearer Token in return and this is the access token. It will allow us access to Tweeter. Save it and turn it to something we can use.

// GET request- Take the token and put it in the subsequent requests to twitter. Need to put it in the Header as an authorisation as bearer of token and then twitter is going to work. Use the parameters the user had put in the input and search for those tweets. 
  
// Forward the data to the front end


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