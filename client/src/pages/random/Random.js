import React, { useState, useEffect } from 'react';
import './Random.css'
import axios from 'axios'
import DisplayRandomTweet from './DisplayRandomTweet'
import DisplayShowcases from './DisplayShowcases'

function Random() {
  const [showcases, setShowcases] = useState([])
  const [randomTweet, setRandomTweet] = useState([])
  const showcaseList = ['PLComms', 'nba', 'theofficetv', 'traversymedia', 'freeCodeCamp'];

  // Showcase Tweets
  useEffect(() => {
    showcaseList.forEach(showcase => {
      axios({
        method: 'get',
        url: `api/random/?string=${showcase}&count=1`,
      })
        .then(res => {
          setShowcases(showcases => showcases.concat(res.data));
        })
        .catch(err => {
          alert('There is no user under that name')
          console.log('error client side', err)
        })
    })
  }, [])

  // Random Tweet
  function handleRandomClick(e) {
    e.preventDefault()

    const randomTweet = e.currentTarget.id
    axios({
      method: 'get',
      url: `api/random/?string=${randomTweet}&count=20`,
    })
      .then(res => {
        setRandomTweet(res.data)
      })
      .catch(err => {
        alert('There is no user under that name')
        console.log('error client side', err)
      })
  }

  const randomNum = Math.floor(Math.random() * 20);
  console.log(randomTweet)
  console.log(randomTweet[randomNum])

  return (
    <div id="random-container">
      <div id="showcase-list">
        {showcases.map(showcase =>
          <DisplayShowcases
            showcase={showcase}
            key={showcase.id}
            handleRandomClick={handleRandomClick}
          />)}
      </div>
      { randomTweet[randomNum] ?
        <DisplayRandomTweet
          tweet={randomTweet[randomNum]}
          key={randomTweet[randomNum]}
        />
        : null
      }
    </div>
  )
}

export default Random