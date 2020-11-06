import React from 'react'

function DisplayShowcases(props) {
  const { user } = props.showcase

  return (
    <div className="card" onClick={props.handleRandomClick} id={user.screen_name}>
      <div className="image-wrapper">
        <img src={user.profile_image_url} alt="profileImage" />
      </div>
      <div className="content-wrapper">
        <div className="first-row">
          <div className="user">
            <span>{user.name}</span>
            <span>@{user.screen_name}</span>
          </div>
        </div>
        <div className="description">
          <p>{user.description}</p>
        </div>
        <div className="followers">
          <span>{user.followers_count} Followers</span>
        </div>
      </div>
    </div>
  )
}

export default DisplayShowcases