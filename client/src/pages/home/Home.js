import React from 'react'
import Bird from '../../images/home-logo-bird.png'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div id="home-container">
      <div className="row">
        <img src={Bird} alt="bird" />
        <div>
          <h1 className="home-title">Twitter Showcase</h1>
          <Link to="/search" >
            <button className="btn">Click Here To Start</button>
          </Link>
        </div>
      </div>
      <div className="app-description">
        <p>This app allows you to retreive tweets from your favourite people without having an account on twitter.
        Don't have a person in your mind ? Go to our random section to inspire you! It presents people I personally enjoy.</p>
      </div>
    </div>
  )
}

