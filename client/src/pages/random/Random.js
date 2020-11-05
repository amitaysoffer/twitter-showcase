import React, { useState, useEffect } from 'react';
import axios from 'axios'
import DisplayTweets from '../search/DisplayTweets'
// import './Random.css';


function Random() {
  const [tweets, setTweets] = useState([])


  function handleRandomClick(e) {
    e.preventDefault()
    const randomTweet = e.target.parentElement.id
    
    axios({
      method: 'get',
      url: `api/random/?string=${randomTweet}`,
    })
      .then(res => {
        console.log(res.data);
        console.log(res.data[0])
        setTweets(res.data)
      })
      .catch(err => {
        alert('There is no user under that name')
        console.log('error client side', err)
      })
  }

  return (
    <div id="random-container">
      <div className="random-card premier-league" id="plcomms">
        <h1>Premier League</h1>
        <button onClick={handleRandomClick} >Tweet!</button>
      </div>
      <div className="random-card nba" id="nba">
        <h1>NBA</h1>
        <button onClick={handleRandomClick} >Tweet!</button>
      </div>
      <div className="random-card theoffice" id="theofficetv">
        <h1>The Office</h1>
        <button onClick={handleRandomClick} >Tweet!</button>
      </div>
      <div className="random-card steve-carell" id="SJobs_Stories">
        <h1>Steve Jobs</h1>
        <button onClick={handleRandomClick} >Tweet!</button>
      </div>
      <div className="random-card spurs" id="spursofficial">
        <h1>Spurs</h1>
        <button onClick={handleRandomClick} >Tweet!</button>
      </div>
      <div id="tweets">
        {tweets.map(tweet =>
          <DisplayTweets tweet={tweet} key={tweet.id} />)}
      </div>
    </div>
  )
}

export default Random