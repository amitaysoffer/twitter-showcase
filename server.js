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


app.get('/api/username', async (req, res) => {
  const token = await getToken()
  const queryString = req.query.string;
  axios({
    method: 'get',
    url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${queryString}&tweet_mode=extended&count=5&result_type=popular`,
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  })
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (err) {
      console.log('Something went wrong', err)
      res.sendStatus(err.response.status)
    })
});

app.get('/api/search', async (req, res) => {
  const token = await getToken()
  const queryString = req.query.string;
  axios({
    method: 'get',
    url: `https://api.twitter.com/1.1/search/tweets.json?q=${queryString}&tweet_mode=extended&count=5&result_type=popular`,
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  })
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (err) {
      console.log('Something went wrong', err)
      res.sendStatus(err.response.status)
    })
});

// Random tweet
app.get('/api/random', async (req, res) => {
  const token = await getToken()
  const queryString = req.query.string;
  axios({
    method: 'get',
    url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${queryString}&tweet_mode=extended&count=1&result_type=mixed`,
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  })
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (err) {
      console.log('Something went wrong', err)
      res.sendStatus(err.response.status)
    })
});

app.listen(port, () => `Server running on port ${port}`);