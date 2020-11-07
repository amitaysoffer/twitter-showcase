import React, { useState } from 'react';
import SearchForm from './SearchForm'
import DisplayTweets from './DisplayTweets'
import './Search.css';
import axios from 'axios';

function Search() {
  const [inputValue, setInputValue] = useState()
  const [tweets, setTweets] = useState([])

  function getInputValue(e) {
    setInputValue(e.target.value)
  }

  function handleSearchClick(e) {
    e.preventDefault()

    if (e.target.id === 'username') {
      axios({
        method: 'get',
        url: `api/username/?string=${inputValue}`,
      })
        .then(res => {
          setTweets(res.data)
        })
        .catch(err => {
          alert('There is no user under that name')
          console.log('error client side', err)
        })
    } else {
      axios({
        method: 'get',
        url: `api/search/?string=${inputValue}`,
      })
        .then(res => {
          setTweets(res.data.statuses)
        }).catch(err => {
          alert('There is no content as such')
          console.log('error client side', err)
        })
    }
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