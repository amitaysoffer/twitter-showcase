const express = require('express');
const axios = require('axios');
require('dotenv').config();
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
        username: process.env.API_KEY,
        password: process.env.API_SECRET_KEY,
      },
    };
    bearer = axios.post(
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
  axios.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${queryString}&tweet_mode=extended&count=5&result_type=popular`, {
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

  axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=${queryString}&tweet_mode=extended&count=5&result_type=popular`, {
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

  axios.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${queryString}&tweet_mode=extended&count=20&result_type=mixed`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  })
    .then(function (response) {
      const randomNum = Math.floor(Math.random() * 20);
      res.json(response.data[randomNum]);
    })
    .catch(function (err) {
      console.log('Something went wrong', err)
      res.sendStatus(err.response.status)
    })
});

// Showcase tweets
app.get('/api/showcases', async (req, res) => {
  const token = await getToken()
  const usernames = req.query.string.split(',');
  const randomTweet = [];

  for (const username of usernames) {
    const response = await axios.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${username}&tweet_mode=extended&count=1&result_type=mixed`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
    randomTweet.push(response.data[0]);
  }
  res.json(randomTweet)
});

app.listen(port, () => `Server running on port ${port}`);