import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
// passed through: setTweets, userProfile, tweetAmount (from Feed.jsx)
  const handleOnSubmit = () => {
    let newTweet = {
      id: props.tweetAmount,
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: ``, // for now set it equal to empty string  (said in instructions)
      comments: 0,
      retweets: 0,
      likes: 0,
      }
    props.setTweets((oldArray) => oldArray.concat(newTweet))
  }

  return (
    <div className="tweet-box">
      <TweetInput />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span></span>
}

// I added that props to the TweetSubmitButton function
export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={props.handleOnSubmit}>Tweet</button>
    </div>
  )
}
