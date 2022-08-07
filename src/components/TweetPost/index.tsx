import React from 'react';
import moment from 'moment';
export interface TweetPostProps {
  name: string;
  username: string;
  tweet: string;
  thumbnail: string;
  link: string;
  likes_count: string | number;
  retweets_count: string | number;
  replies_count: string | number;
  created_at: string;
}

const parseNumber = (value: string | number) =>
  new Intl.NumberFormat('en-IN').format(Number(value));
export const TweetPost: React.FC<TweetPostProps> = (
  props
) => {
  return (
    <a
      className='post'
      href={props.link}
      target='_blank'
      rel='noreferrer'
    >
      <div className='post__avatar'>
        <img
          src='https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png'
          alt=''
        />
      </div>

      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>{props.name}</h3>
            <a
              href={`https://twitter.com/${props.username}`}
              target='_blank'
              rel='noreferrer'
            >
              @{props.username}
            </a>
          </div>
          <div className='post__headerDescription'>
            <p>{props.tweet}</p>
          </div>
        </div>
        {props.thumbnail ? (
          <div
            className='thumbnail'
            style={{
              backgroundImage: `url(${props.thumbnail})`,
            }}
          />
        ) : null}
        <div className='time'>
          <p>
            {moment(props.created_at).format(
              'h:mm A . MMM, DD YYYY'
            )}
          </p>
        </div>
        <div className='post__footer'>
          <div>
            {parseNumber(props.retweets_count)} Retweets
          </div>
          <div>
            {parseNumber(props.replies_count)} Quote Tweets
          </div>
          <div>{parseNumber(props.likes_count)} Likes</div>
        </div>
      </div>
    </a>
  );
};
