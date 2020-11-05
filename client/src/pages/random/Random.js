import React, { useState, useEffect } from 'react';
import './Random.css'
import axios from 'axios'
import DisplayTweets from '../search/DisplayTweets'

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
        <img src="https://images.unsplash.com/photo-1518605125802-006dcc629439?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="football" />
        <h1>Premier League</h1>
        <button onClick={handleRandomClick} >Tweet!</button>
      </div>
      <div className="random-card nba" id="nba">
        <img src="https://images.unsplash.com/photo-1570840584974-9078b1d976c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
        <h1>NBA</h1>
        <button onClick={handleRandomClick} >Tweet!</button>
      </div>
      <div className="random-card theoffice" id="theofficetv">
        <img src="https://images.unsplash.com/photo-1552318415-cc99d956c134?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="the office" />
        <h1>The Office</h1>
        <button onClick={handleRandomClick} >Tweet!</button>
      </div>
      <div className="random-card steve-carell" id="usainbolt">
        <img src="https://images.unsplash.com/photo-1604454970258-811e3f92cd23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="usainbolt" />
        <h1>Usain Bolt</h1>
        <button onClick={handleRandomClick} >Tweet!</button>
      </div>
      <div className="random-card spurs" id="NFL" >
        <img src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="nfl"/>
        <h1>NFL</h1>
        <button onClick={handleRandomClick}>Tweet!</button>
      </div>
      <div id="tweets">
        {tweets.map(tweet =>
          <DisplayTweets tweet={tweet} key={tweet.id} />)}
      </div>
    </div>
  )
}

export default Random