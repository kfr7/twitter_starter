import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
// props. look below
// tweetText setTweetText setTweets userProfile setUserProfile tweetAmount
  
// event.target.textarea.value maybe try
  const handleOnTweetTextChange = (event) => {
    props.setTweetText(event.target.value) // change this to use textarea
                        // the line ABOVE might be wrong
  }


  const handleOnSubmit = () => {
    let oldNumTweets = props.userProfile.numTweets;
    let updatedNumTweets = oldNumTweets + 1;
    // console.log(props);
    // console.log("new amount:", updatedNumTweets)
    // props.setUserProfile({...props.userProfile, numTweets: updatedNumTweets});

    // STILL NEED TO UPDATE USER'S NUMTWEETS

    let newTweet = {
      id: props.tweetAmount,
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
      }
    console.log(newTweet)
    props.setTweets((oldArray) => oldArray.concat(newTweet))

    props.setTweetText(``);
    // props.setUserProfile(prevState => ({...prevState, numTweets: oldNumTweets+1}));
    // console.log(props.userProfile)
  }
  return (
    <div className="tweet-box">
      <TweetInput handleOnChange={handleOnTweetTextChange} value={props.tweetText}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount value={props.tweetText.length}/>
        <TweetSubmitButton value={props.tweetText.length} handleOnSubmit={handleOnSubmit}/>
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
  if (props.value === 0)
  {
    return <span className="tweet-length"></span>
  }
  else if (props.value > 140)
  {
    return <span className="tweet-length-red">Character Count: {140-props.value}</span>
  }
  else
  {
    return <span className="tweet-length">Character Count: {140-props.value}</span>
  }
  // return <span className={140-props.value < 0 ? "tweet-length-red" : "tweet-length"}>Character Count: {140-props.value}</span>
}

// I added that props to the TweetSubmitButton function
export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button disabled={props.value === 0 || props.value > 140} className="tweet-submit-button" onClick={props.handleOnSubmit}>Tweet</button>
    </div>
  )
}
