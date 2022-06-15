import * as React from "react"
import AvatarIcon from "../AvatarIcon/AvatarIcon"
import { formatLikes } from "../../utils/format"
import "./Tweet.css"

export default function Tweet({ tweet }) {
  // added state of amountLikes
  // better way to do this in the video but only have 7 more minutes until demo
  // change after
  const [amountLikes, setAmountLikes] = React.useState(tweet.likes);
  const [amountRetweets, setAmountRetweets] = React.useState(tweet.retweets);

    // create function
    // split string on spaces into array of words
    // iterate through the array and check each word for beginning char hash tag
    // if found, append that string with sub span/p/strong with color
    // output of fucntion should return string as it was but if not
    // ["hello", "#world", "something"]
    // ["hello", "<span style={{color: "red"}}>#world</span>", "something"]
    // put all elements back into string with space between everything
    // return "hello <span style={{color: "red"}}>#world</span> something"

// outer cb tells compiler inside is "code", NOT html, some kind of jsx
// inner cb declares object w key pairs

  return (
    <div className="tweet" data-tweet-id={tweet.id}>
      <div className="tweet-avatar">
        <AvatarIcon />
      </div>

      <div className="tweet-content">
        <TweetUserInfo name={tweet.name} handle={tweet.handle}/>
        <p className="tweet-text">{tweet.text}</p>
        {/* <TweetFooter numComments={tweet.comments} numRetweets={tweet.retweets} numLikes={tweet.likes}/> */}
        <TweetFooter numComments={tweet.comments}
        numRetweets={amountRetweets} setAmountRetweets={setAmountRetweets}
        numLikes={amountLikes} setAmountLikes={setAmountLikes}/>
      </div>
    </div>
  )
}

export function TweetUserInfo({ name, handle }) {
  return (
    <div className="tweet-user-info">
      <div className="meta">
        <p className="name">{name}</p>
        <span className="handle">@{handle}</span>
        <span className="dot">•</span>
        <span className="ts">1 min</span>
      </div>
      <i className="fa fa-angle-down"></i>
    </div>
  )
}

export function TweetFooter({ numComments, numRetweets, numLikes, setAmountRetweets, setAmountLikes }) {
  return (
    <div className="tweet-footer">
      <span>
        <i className="fa fa-comment"></i>
        {numComments || 0}
      </span>
      <span>
        <i className="fa fa-retweet" onClick={() => {setAmountRetweets(numRetweets+1)}}></i>
        {numRetweets || 0}
      </span>
      <span>
        <i className="fas fa-heart" onClick={() => {setAmountLikes(numLikes+1)}}></i>
        {formatLikes(numLikes ?? 0)}
      </span>
      <span>
        <i className="fa fa-envelope"></i>
      </span>
    </div>
  )
}
