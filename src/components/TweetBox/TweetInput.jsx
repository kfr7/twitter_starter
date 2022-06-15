import * as React from "react"
import AvatarIcon from "../AvatarIcon/AvatarIcon"

// command and hover
// or 
// command p and select

// to do..
// look up "classnames library"
// [npm]

export default function TweetInput(props) {
  // props... handleOnChange, value

  const [focused, setFocused] = React.useState(false);

  return (
    <div className="tweet-textarea">
      <AvatarIcon />
      <textarea value={props.value} 
      onChange={props.handleOnChange} 
      name="new-tweet-input" 
      type="text" 
      placeholder="What's Happening?" 
      className={focused ? "expanded" : ""}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}/>


      <SmileIcon />
    </div>
  )
}

export const SmileIcon = () => <i className="fas fa-smile"></i>
export const ImageIcon = () => <i className="fas fa-image"></i>
