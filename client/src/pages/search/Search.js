import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm'
import DisplayTweets from './DisplayTweets'
import './Search.css';
import axios from 'axios';

function Search() {
  const [data, setData] = useState([])
  const [inputValue, setInputValue] = useState()
  const [tweets, setTweets] = useState([])

  function getInputValue(e) {
    setInputValue(e.target.value)
  }

  // useEffect(() => {
  //   fetch('/api/search')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, [])

  function handleSearchClick(e) {
    e.preventDefault()

    axios({
      method: 'get',
      url: '/api/search',
      data: {
        input: 'football'
      }
    })
      .then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err)
      })

    // fetch('/api/search')
    //   .then(res => res.json())
    //   .then(data => console.log(data))

    const tweetsSelected = e.target.id === 'username' ?
      data.filter(tweet => tweet.user.toLowerCase().includes(inputValue)) :
      data.filter(tweet => tweet.text.toLowerCase().includes(inputValue))

    // returns only 5 characters
    setTweets(tweetsSelected.slice(0, 5))
  }

  return (
    <div id="search-container">
      <SearchForm handleSearchClick={handleSearchClick} getInputValue={getInputValue} />
      <div id="tweets">
        {tweets.map(tweet =>
          <DisplayTweets tweet={tweet} key={tweet.id} />)}
      </div>
    </div>
  )
}

export default Search