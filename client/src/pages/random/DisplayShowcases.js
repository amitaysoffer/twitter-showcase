import React from 'react'

function DisplayShowcases(props) {
  const { user } = props.showcase

  return (
    <div className="card showcase-card" onClick={props.handleRandomClick} id={user.screen_name}>
      <div className="image-wrapper">
        <img src={user.profile_image_url.replace('normal', '400x400')} alt="profileImage" />
      </div>
      <div className="content-wrapper">
        {/* <div className="first-row"> */}
          {/* <div className="user"> */}
            <p>@{user.screen_name}</p>
          {/* </div> */}
        {/* </div> */}
        {/* {/* <div className="followers"> */} 
          <p>{user.followers_count} Followers</p>
        {/* </div> */}
      </div>
    </div>
  )
}

export default DisplayShowcases