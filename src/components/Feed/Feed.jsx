import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed(props) {
  return (
// props has .tweets, .setTweets, .userProfile, .setUserProfile, .tweetText, .setTweetText
    <div className="col feed">
      {/* Below is the correct updated props to TweetBox */}
      {console.log(props.setUserProfile)}
      <TweetBox 
      tweetText={props.tweetText} 
      setTweetText={props.setTweetText} 
      setTweets={props.setTweets} 
      userProfile={props.userProfile} 
      setUserProfile={props.setUserProfile} 
      tweetAmount={props.tweets.length} />

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
