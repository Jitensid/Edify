import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard.js'
import AddVideo from './Components/AddVideo.js'
import AddPlaylist from './Components/AddPlaylist.js'
import Channel from './Components/Channel.js'
import ResponsivePlayer from './Components/ResponsivePlayer.js'
import Playlist from './Components/Playlist.js'
import Creator from './Components/Creator.js'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component= { Dashboard }/>
      <Route path="/addvideo" component= { AddVideo }/>
      <Route path="/addplaylist" component= { AddPlaylist }/>
      <Route path="/channel" component= { Channel }/>
      <Route path="/player" component= { ResponsivePlayer }/>
      <Route path="/playlist" component= { Playlist }/>
      <Route path="/creator" component= { Creator }/>
    </Router>
  );
}

export default App;