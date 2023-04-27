import React from "react";
import Card from "./Card";

export default function MainPage(props){

  // 1. backend sends us a user_id, maybe an access_token?
  // 2. create a query to set up a playlist table row on successful login with this given info (want to return playlist id)

  // 1. backend returned to us a playlist_id
  // 2. we query with this playlist_id to insert another row into song table (along with other parameters)

  // figure out how to fetch n songs from spotify api and have some info on them
  // like image, artist, song name, genre?

  // User searches for a genre and then clicks button which is passed up to App.js
  return(
  <div id="main-page-container">
    <div className='container1' id='searchbar'>
      <input onChange={props.handleOnChange} placeholder="Enter Genre here"></input>
      <button id='searchbutton' onClick={props.getRecommendations}>Search</button>
    </div>
    <Card musicList={props.musicList}/>
   {/* //link button for playlist? */}
  </div>
   
  )
}

