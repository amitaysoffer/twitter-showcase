import React from 'react';
import { BiBadgeCheck } from 'react-icons/bi';
import { VscCircleFilled } from 'react-icons/vsc';
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';

function DisplayRandomTweet(props) {
  const {
    full_text,
    user,
    created_at,
    favorite_count,
    retweet_count,
    entities,
    display_text_range,
  } = props.randomTweet;

  return (
    <div className="card random-card">
      <div className="image-wrapper">
        <a
          href={entities.media ? entities.media[0].expanded_url : null}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={user.profile_image_url.replace('normal', '400x400')}
            alt="profileImage"
          />
        </a>
      </div>
      <div className="content-wrapper">
        <div className="first-row">
          <div className="user">
            <span>{user.name}</span>
            <BiBadgeCheck />
          </div>
          <div className="username">
            <span>@{user.screen_name}</span>
          </div>
          <div className="date">
            <VscCircleFilled />
            <p>{created_at.split('+')[0]}</p>
          </div>
        </div>
        <div className="text">
          <p>
            {full_text.substring(
              props.randomTweet.display_text_range[0],
              props.randomTweet.display_text_range[1] + 1
            )}
          </p>
        </div>
        <div className="link">
          <a
            href={entities.media ? entities.media[0].expanded_url : null}
            target="_blank"
            rel="noopener noreferrer"
          >
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
            <FaRegComment />
            <a href="/#">{display_text_range[1]}</a>
          </div>
          <div className="retweets">
            <AiOutlineRetweet />
            <a href="/#">{retweet_count}</a>
          </div>
          <div className="likes">
            <AiOutlineHeart />
            <a href="/#">{favorite_count}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayRandomTweet;
