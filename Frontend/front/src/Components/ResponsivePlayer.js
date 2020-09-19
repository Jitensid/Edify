import React from "react";

import ReactPlayer from 'react-player';
import "./Css/responsive-player.css";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import {deepPurple} from '@material-ui/core/colors';



const useStyles = makeStyles((theme) => ({
  appBarName: {
    marginLeft: '10px',
    flex: 1,
},
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    height: 100,
    minWidth: 100,
    margin: 20,
    fontSize: 40,
  },
}));

const cards = [1, 2, 3, 4];


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
                <div className="main">
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
                    <div className='playlist-area'>
                    <div className="playlist-info">
                        <div class="playlist-name">Playlist Name</div>
                        <button class="w3-button w3-black like button">Nominate</button>
                    </div>
                    <div className="playlist-videos-container">

                        <Container className={classes.cardGrid} maxWidth="md">
          
                        <Grid container spacing={4}>
                          {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={12}>
                              <Card className={classes.card}>
                                <CardMedia
                                  className={classes.cardMedia}
                                  image="https://source.unsplash.com/random"
                                  title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                  <Typography gutterBottom variant="h5" component="h2">
                                    Heading
                                  </Typography>
                                  <Typography>
                                    This is a media card. You can use this section to describe the content.
                                  </Typography>
                                </CardContent>
                                <CardActions>
                                  <Button size="small" color="primary">
                                    View
                                  </Button>
                                  <Button size="small" color="primary">
                                    Edit
                                  </Button>
                                </CardActions>
                              </Card>
                            </Grid>
                          ))}
                        </Grid>
                      </Container>
                      </div>
                    </div>
                    <div className='video-details'>
                      <div class="Avatar">
                      {['Creator Name'].map((text, index) => (
                           <Link to="/creator"></Link>
                          ))}
                      <a href=''><Avatar className={classes.avatar}>OP</Avatar></a>
                      </div>
                      <div class='text-details'>
                      <div class='creator-name'>
                      {['Creator Name'].map((text, index) => (
                           <Link to="/creator"></Link>
                          ))}
                        <a href='#'>Creator Name</a>
                      </div>
                      <div class="upload-date">
                        Upload Date
                      </div>
                      <div class='views'>
                        Views
                      </div>
                      
                      </div>
                      <div class="like-button">
                        <button class="w3-button w3-black like button">Like</button>
                      </div>
                    </div>
                </div> 
                <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        
      </footer>
              </React.Fragment>
        );
    
};

// export default ResponsivePlayer;