import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { BrowserRouter, Route, Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {White} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
 
    addPlaylist: {
        marginLeft: '10px',
        flex: 1,
        color: "white",
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      maxWidth: '100%',
    },
    card: {
      height: '110px',
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
    cardActions: {
        marginBottom: '30px',
    },
  }));
  
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function SimpleCard() {
  const classes = useStyles();
  

  return (
    <React.Fragment>
    <CssBaseline />
    <AppBar position="relative">
    <Toolbar>
      <CameraIcon className={classes.icon} />
      <Typography variant="h6" color="inherit" noWrap className={classes.appBarName} >
        Your Playlists
      </Typography>
      <Link to='addplaylist'>
      <Button size="small" color="inherit" className={classes.addPlaylist}>
                Add New Playlist
        </Button>
        </Link>
    </Toolbar>
  </AppBar>
    <Container className={classes.cardGrid} >
    {/* End hero unit */}
    <Grid container spacing={2}>
      {cards.map((card) => (
        <Grid item key={card} xs={12} sm={12} md={12}>
          <Card className={classes.card}>
           
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" component="h2">
                Heading
              </Typography>
              
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Link to='addvideo'>
              <Button size="small" color="primary">
                Add Video
              </Button>
              </Link>
              <Button size="small" color="primary">
                Edit Playlist
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
