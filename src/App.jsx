import * as React from "react"
import Feed from "./components/Feed/Feed"
import Navbar from "./components/Navbar/Navbar"
import UserProfile from "./components/UserProfile/UserProfile"
import Advertisements from "./components/Advertisements/Advertisements"
import { codepathUserProfile, firstTweet, navLinks } from "./constants"

export default function App() {
  const [userProfile, setUserProfile] = React.useState(codepathUserProfile);
  const [tweets, setTweets] = React.useState([firstTweet]);
  // below I'm trying before watching the videos though
  // nevermind, on start of step 3 (haven't started anything)
  // make sure to watch videos to understand input and change event and all that


  return (
    <div className="app">
      <Navbar navLinks={navLinks} />
      <main>
        <UserProfile userProfile={userProfile}/>
        <Feed tweets={tweets} setTweets={setTweets} userProfile={userProfile} />
        <Advertisements />
      </main>
    </div>
  )
}
