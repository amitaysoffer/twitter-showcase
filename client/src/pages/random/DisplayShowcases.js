import React from 'react'

export default function DisplayShowcases(props) {
  const { user } = props.showcase

  return (
      <div className="card">
        <div className="image-wrapper">
          <img src="https://images.unsplash.com/photo-1518605125802-006dcc629439?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="profileImage" />
        </div>
        <div className="content-wrapper">
          <div className="first-row">
            <div className="user">
              <span>{user.name}</span>
              <span>@{user.screen_name}</span>
            </div>
            <div className="username">
              <span>{user.description}</span>
            </div>
          </div>
          <div className="text">
            <span>Official Communications from the Premier League</span>
          </div>
          <div className="last-row">
            <div className="followers">
              <span>{user.followers_count} Followers</span>
            </div>
            <button onClick={props.handleRandomClick} id={user.screen_name}>Tweet!</button>
          </div>
        </div>
      </div>
  )
}
