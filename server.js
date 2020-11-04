const express = require('express');
const axios = require('axios');

// import tweets dummy data
// const data = require('./twitterData');
// const { response } = require('express');
const app = express();
const port = 5000;

let bearer;
let getToken = () => {
  if (!bearer) {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: "sbZZacfAEvxKVykuX4UhiqM06",
        password: "MSbwMMURuNpV3awcQzoGykYKDyksnNLooCNrWldDfYDgepdNLE",
      },
      // npm install dotenv
    };
    bearer = axios
      .post(
        "https://api.twitter.com/oauth2/token",
        "grant_type=client_credentials",
        config
      )
      .then((response) => {
        console.log(response.data.access_token);
        return response.data.access_token;
      })
      .catch((error) => console.log(`Something went wrong: ${error}`));
  }
  return bearer;
};

app.get('/api/search', async (req, res) => {
  const token = await getToken()
  const queryString = req.query.variable;
  axios({
    method: 'get',
    url: `https://api.twitter.com/1.1/search/tweets.json?q=${queryString}&count=5&result_type=popular&tweet_mode=extended)`,
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  })
    .then(function (response) {
      res.json(response.data);
    })
});


app.listen(port, () => `Server running on port ${port}`);