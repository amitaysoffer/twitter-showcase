import React from 'react'
var FontAwesome = require('react-fontawesome')

export default function DisplayTweets(props) {
  const { profileImage, user, username, date, text, link, comments, retwitted, likes } = props.tweet
  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={profileImage} alt="profileImage" />
      </div>
      <div className="content-wrapper">
        <div className="first-row">
          <div className="user">
            <span>{user}</span>
            <FontAwesome className="far fa-check-double" name="check" />
          </div>
          <div className="username">
            <span>{username}</span>
            <FontAwesome className="fas fa-paw" name="paw" />
          </div>
          <div className="date">
            <span>{date}</span>
          </div>
        </div>
        <div className="text">
          <span>{text}</span>
        </div>
        <div className="link">
          <div>{link}</div>
        </div>
        <div className="last-row">
          <div className="comments">
            <FontAwesome className="far fa-comment" name="comment" />
            <a href="/#">{comments}</a>
          </div>
          <div className="retweets">
            <FontAwesome className="fas fa-retweet" name="retweet" />
            <a href="/#">{retwitted}</a>
          </div>
          <div className="likes">
            <FontAwesome className="far fa-heart" name="heart" />
            <a href="/#">{likes}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
