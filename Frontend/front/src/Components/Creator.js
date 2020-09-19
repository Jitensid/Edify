import React from "react";

import ReactPlayer from 'react-player';
import "./Css/creator.css";
import Avatar from '@material-ui/core/Avatar';
import {deepPurple} from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
  appBarName: {
    marginLeft: '10px',
    flex: 1,
},

    avatar: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
      height: 100,
      minWidth: 100,
      
      fontSize: 40,
    },
  }));
export default function ResponsivePlayer() { 

    const classes = useStyles();
    return (
        <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
        
        <Toolbar>
        
       
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap className={classes.appBarName}> 
            EDIFY
          </Typography>
        
          <Typography variant="h6" color="inherit"  className={classes.creatorName}> 
            Creator Name
          </Typography>
        
         
        </Toolbar>
      </AppBar>
        <div class='page-main'>
            <div class='creator'>
               
            <div className='creator-details'>
                      <div class="Avatar">
                        <a href='#'><Avatar className={classes.avatar}>OP</Avatar></a>
                      </div>
                      <div class='creator-text-details'>
                      <div class='creator-name'>
                        <a href='#'>Creator Name</a>
                      </div>
                      <div class="upload-date">
                        Upload Date
                      </div>
                      <div class='views'>
                        Views
                      </div>
                     
                      </div>
                     
                    </div>
                
            </div>
            <div class='certi'>
              <ul class='certificates'>
                  <h3>Certificates Received </h3>
                  <li>Certificate for XYZ</li>
           
                  <li>Certificate for XYZ</li>
                  <li>Certificate for XYZ</li>
                  <li>Certificate for XYZ</li>
              </ul>
            </div>
            <div class="skills">
                    <button class="w3-button w3-green btn" type="submit">All</button>
                    <button class="w3-button w3-green btn" type="submit">Skill 1</button>
                    <button class="w3-button w3-green btn" type="submit">Skill 2</button>
                </div>
            <div class='videos'>
            <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    // file = {file}
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    width='100%'
                    height='100%'
                    controls = {true}
                    />
                </div>
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    // file = {file}
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    width='100%'
                    height='100%'
                    controls = {true}
                    />
                </div>
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    // file = {file}
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    width='100%'
                    height='100%'
                    controls = {true}
                    />
                </div>
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    // file = {file}
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    width='100%'
                    height='100%'
                    controls = {true}
                    />
                </div>
            </div>
            </div>
            </React.Fragment>
    );
}