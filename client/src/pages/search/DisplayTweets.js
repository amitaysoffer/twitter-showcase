import React from 'react'
var FontAwesome = require('react-fontawesome')

export default function DisplayTweets(props) {
  // debugger
  const { text, user, favorite_count, retweet_count, entities } = props.item
  return (
    <div className="card">
      {/* <img src={user.profile_image_url} alt="profile-image"/> 
      <br/>
      <div>Name: {user.name}</div>
      <div>Screen_name: @{user.screen_name}</div>
      <div>* {created_at}</div>
      <br />
      <div>text: {text}</div>
      <br />
      <div>retweets: {retweeted_status.retweet_count}</div>
      <div>likes: {retweeted_status.favorite_count}</div> */}

      <div className="image-wrapper">
        <img src={user.profile_image_url} alt="profileImage" />
      </div>
      <div className="content-wrapper">
        <div className="first-row">
          <div className="user">
            <span>{user.name}</span>
            <FontAwesome className="far fa-check-double" name="check" />
          </div>
          <div className="username">
            <span>@{user.screen_name}</span>
            <FontAwesome className="fas fa-paw" name="paw" />
          </div>
          {/* <div className="date">
            <span>{created_at}</span>
          </div> */}
        </div>
        <div className="text">
          <span>{text}</span>
        </div>
        <div className="link">
          {/* <div>{entities.image[0].expanded_url}</div> */}
          {/* <img src={entities.media[0].expanded_url} alt="link"/> */}
        </div>
        <div className="last-row">
          <div className="comments">
            <FontAwesome className="far fa-comment" name="comment" />
            <a href="/#">1k</a>
          </div>
          <div className="retweets">
            <FontAwesome className="fas fa-retweet" name="retweet" />
            <a href="/#">{retweet_count}</a>
          </div>
          <div className="likes">
            <FontAwesome className="far fa-heart" name="heart" />
            <a href="/#">{favorite_count}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
