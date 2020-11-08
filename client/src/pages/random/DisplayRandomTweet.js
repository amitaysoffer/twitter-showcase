import React from 'react'
var FontAwesome = require('react-fontawesome')

function DisplayRandomTweet(props) {
  // debugger
  const { full_text, user, created_at, favorite_count, retweet_count, entities } = props
  return (
    <div className="card random-card">
      <div className="image-wrapper">
        <a href={entities.media ? entities.media[0].expanded_url : null} target="_blank" rel="noopener noreferrer">
          <img 
            src={user.profile_image_url.replace('normal', '400x400')}
            alt="profileImage" />
        </a>
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
          <div className="date">
            <span>{created_at.split('+')[0]}</span>
          </div>
        </div>
        <div className="text">
          <span>{full_text.substring(props.tweet.display_text_range[0], props.tweet.display_text_range[1] + 1)}</span>
        </div>
        <div className="link">
          <a href={entities.media ? entities.media[0].expanded_url : null} target="_blank" rel="noopener noreferrer">
            <img
              className="tweet-img"
              src={entities.media ? entities.media[0].media_url : null}
              height={entities.media ? entities.media[0].sizes.small.h : null}
              width={entities.media ? entities.media[0].sizes.small.w : null}
              alt=""
            />
          </a>
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

export default DisplayRandomTweet