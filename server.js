// import express
const express = require('express');
// initialize express
const app = express();
// port to listen to
const port = 5000;


app.get('/api/ahmd', (req, res) => {
  // const customers = [
  //   {id: 1, firstName: 'John', lastName: 'Doe'},
  //   {id: 2, firstName: 'Brad', lastName: 'Traversy'},
  //   {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  // ];

  const data = [
    {
      id: 1,
      profileImage: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_bigger.jpg',
      user: 'Donald J. Trump',
      username: '@realDonaldTrump',
      date: '18 Nov 2018',
      text: 'The Fake News Media is riding COVID, COVID, COVID, all the way to the Election. Losers!',
      link: false,
      comments: 18.9,
      retwitted: 29.1,
      likes: 117.7
    },
    {
      id: 2,
      profileImage: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_bigger.jpg',
      user: 'Donald J. Trump',
      username: '@realDonaldTrump',
      date: '12h',
      text: 'Thank you Michigan—leaving the White House shortly, see you soon!',
      link: false,
      comments: 4.9,
      retwitted: 53.1,
      likes: 159.2
    },
    {
      id: 3,
      profileImage: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_bigger.jpg',
      user: 'Donald J. Trump',
      username: '@realDonaldTrump',
      date: '24 Oct 2020',
      text: 'is playing Obama’s no crowd, fake speech for Biden, a man he could barely endorse because he couldn’t believe he won. Also, I PREPAID many Millions of Dollars in Taxes.',
      link: false,
      comments: 4.9,
      retwitted: 32.1,
      likes: 241.2
    }
  ]

  // import tweetsData from './client/src/tweetsData'
  // const data = require('./client/src/tweetsData')

  // console.log(tweetsData);

  res.json(data);
});



app.listen(port, () => `Server running on port ${port}`);