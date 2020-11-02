const express = require('express');
const axios = require('axios');
const qs = require('qs');

// import tweets dummy data
// const data = require('./twitterData');
const app = express();
const port = 5000;

// GET request- Take the token and put it in the subsequent requests to twitter. Need to put it in the Header as an authorisation as bearer of token and then twitter is going to work. Use the parameters the user had put in the input and search for those tweets. 



// POST request to token
async function getToken() {

  return await axios.request({
    url: "https://api.twitter.com/oauth2/token",
    method: "post",
    auth: {
      username: "sbZZacfAEvxKVykuX4UhiqM06",
      password: "MSbwMMURuNpV3awcQzoGykYKDyksnNLooCNrWldDfYDgepdNLE"
    },
    data: qs.stringify({
      grant_type: "client_credentials",
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    },
  })
    .then(function (response) {
      // console.log(response.data);
      // console.log(response.data.access_token);
      return response.data
    });
}


const Token = getToken()
console.log(Token)



app.listen(port, () => `Server running on port ${port}`);