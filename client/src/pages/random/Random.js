import React, { useState, useEffect } from 'react';
import './Random.css'
import axios from 'axios'
import DisplayRandomTweet from './DisplayRandomTweet'
import DisplayShowcases from './DisplayShowcases'

function Random() {
  const [showcases, setShowcases] = useState([])
  const [randomTweet, setRandomTweet] = useState([])
  const showcaseList = ['PLComms', 'nba', 'theofficetv', 'traversymedia', 'freeCodeCamp'];

  useEffect(() => {
    showcaseList.forEach(showcase => {
      axios({
        method: 'get',
        url: `api/random/?string=${showcase}`,
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

  function handleRandomClick(e) {
    e.preventDefault()

    const randomTweet = e.currentTarget.id
    axios({
      method: 'get',
      url: `api/random/?string=${randomTweet}`,
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

      {randomTweet.map(tweet =>
        <DisplayRandomTweet
          tweet={tweet}
          key={tweet.id}
        />
      )}

    </div>
  )
}

export default Random