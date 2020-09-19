import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard.js'
import CreateChannel from './Components/CreateChannel.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route exact path="/" component= { Dashboard }/>
      <Route path="/createchannel" component= { CreateChannel }/>
    </Router>
  );
}

export default App;