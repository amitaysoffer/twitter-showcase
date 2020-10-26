import React from 'react'

export default function DisplayTweets(props) {
  const { profileImage, user, username, date, text, link, comments, retwitted, likes } = props.tweet
  return (
    <ul>
      <img src={profileImage} alt="image"/>
      <li>{user}</li>
      <li>{username}</li>
      <li>{date}</li>
      <li>{text}</li>
      <li>{link}</li>
    </ul>
      
  )
}
