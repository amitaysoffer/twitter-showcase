import React from 'react'
var FontAwesome = require('react-fontawesome')

export default function DisplayTweets(props) {
  const { profileImage, user, username, date, text, link, comments, retwitted, likes } = props.tweet
  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={profileImage} alt="image" />
      </div>
      <div className="content-wrapper">

        <div className="first-row">
          <span className="user">
            {user}
          </span>
          <FontAwesome className="far fa-check-double" name="check" />
          <span className="username">
            {username}
          </span>
          <FontAwesome className="fas fa-paw" name="paw" />
          <span className="date">
            {date}
          </span>
        </div>

        <p>{text}</p>
        <div>{link}</div>
        <p>{comments} {retwitted} {likes}</p>
      </div>

    </div>

  )
}
