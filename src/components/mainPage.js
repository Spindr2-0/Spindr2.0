import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import axios from 'axios';
import { StateContext } from '../context/StateContext';

export default function MainPage(props){
  // few local and global states
  const { token, setToken } = useContext(StateContext);
  const { tokenType, setTokenType } = useContext(StateContext);
  const [ player, setPlayer ] = useState(null);
  const [ isPaused, setPaused ] = useState(false);
  const [ isActive, setActive ] = useState(false);
  const [ currTrack, setTrack ] = useState({})
  console.log(typeof(token))


  // 1. backend sends us a user_id, maybe an access_token?
  // 2. create a query to set up a playlist table row on successful login with this given info (want to return playlist id)

  // 1. backend returned to us a playlist_id
  // 2. we query with this playlist_id to insert another row into song table (along with other parameters)

 

// setup spotify webplayer

useEffect(() => {

  const script = document.createElement("script");
  script.src = "https://sdk.scdn.co/spotify-player.js";
  script.async = true;

  document.body.appendChild(script);

  window.onSpotifyWebPlaybackSDKReady = () => {
      console.log('hi')
      const newPlayer = new window.Spotify.Player({
          name: 'Web Playback SDK',
          getOAuthToken: cb => { cb(token); },
          volume: 0.5
      });
      setPlayer(newPlayer);
      player.addListener('ready', ({ device_id }) => {
          console.log('Ready with Device ID', device_id);
      });
;
      player.addListener('not_ready', ({ device_id }) => {
          console.log('Device ID has gone offline', device_id);
      });


      player.connect();

  };
}, []);



 // figure out how to fetch n songs from spotify api and have some info on them
  // like image, artist, song name, genre?

  // User searches for a genre and then clicks button which is passed up to App.js

  // send back an access token and an array of song objects
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

