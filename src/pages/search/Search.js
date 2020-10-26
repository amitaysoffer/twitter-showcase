import React, { useState, useEffect } from 'react';
import tweetsData from '../../twitterData'
import SearchForm from './SearchForm'
import DisplayTweets from './DisplayTweets'

function Search() {
  const [data] = useState(tweetsData)

  // console.log(data.map(dat => console.log(dat)))
  return (
    // const tweetsData = 
    <div id="search-container">
      <SearchForm />
      {data.map(tweet =>
        <DisplayTweets tweet={tweet} key={tweet.id} />)}


    </div>
  )
}

export default Search