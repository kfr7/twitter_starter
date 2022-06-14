import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed(props) {
  return (

    <div className="col feed">
      {/* Below is the correct updated props to TweetBox */}
      <TweetBox setTweets={props.setTweets} userProfile={props.userProfile} tweetAmount={props.tweets.length} />

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
      {props.tweets.map((tweet, idx) => (
        <Tweet key={idx} tweet={tweet}/>

      ))
      }</div>
    </div>
  )
}
