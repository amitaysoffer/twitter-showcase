import React, { useState, useEffect } from 'react';
import './Random.css'
import axios from 'axios'
import DisplayRandomTweet from './DisplayRandomTweet'
import DisplayShowcases from './DisplayShowcases'

function Random() {
  const [showcases, setShowcases] = useState([])
  const [randomTweet, setRandomTweet] = useState(null)
  const showcaseList = ['PLComms', 'nba', 'theofficetv', 'traversymedia', 'freeCodeCamp'];

  // Showcase Tweets
  useEffect(() => {
    axios({
      method: 'get',
      url: `api/showcases/?string=${showcaseList.toString()}`,
    })
      .then(res => {
        setShowcases(res.data)
      })
      .catch(err => {
        alert('There is no user under that name')
        console.log('error client side', err)
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
      {randomTweet ? <DisplayRandomTweet randomTweet={randomTweet} /> : null}
    </div>
  )
}

export default Random