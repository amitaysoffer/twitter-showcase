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

  useEffect(() => {
    console.log(data)
  }, [data])

  function handleSearchClick(e) {
    e.preventDefault()

    if (e.target.id === 'username') {
      axios({
        method: 'get',
        url: `api/username/?string=${inputValue}`,
      })
        .then(res => {
          // debugger
          console.log(res.data);
          setData(res.data)
        })
        .catch(err => {
          // debugger
          alert('There is no user under that name')
          console.log('error client side', err)
        })
    } else {
      axios({
        method: 'get',
        url: `api/search/?string=${inputValue}`,
      })
        .then(res => {
          console.log(res.data);
          debugger
          setData(res.data.statuses)
        }).catch(err => {
          debugger
          console.log(err)
        })
    }
  }

  return (
    <div id="search-container">
      <SearchForm handleSearchClick={handleSearchClick} getInputValue={getInputValue} />
      <div id="tweets">
        {data.map(item =>
          <DisplayTweets item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default Search