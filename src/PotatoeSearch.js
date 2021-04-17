import React, { Component } from 'react';
import './Cart.css';
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
import Search from './search';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



function increment() {
  var value = parseFloat(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value = value + 0.5;
  document.getElementById('number').value = value;
}

function decrement() {
  var value = parseFloat(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value = value - 0.5 < 0 ? 0 : value-=0.5;
  document.getElementById('number').value = value;
}



const useStyles = makeStyles((theme) => ({
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
    paddingTop: theme.spacing(8),
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
}));

export default function Cart() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
      </AppBar>
      <Search />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Shop Local.
            </Typography>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              
              Eat Fresh.
            </Typography>
            <Typography variant="h3" align="center" color="textSecondary" paragraph>
              Make an Impact.           </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                {/* <Grid item>
                  <Button variant="contained" color="primary">
                    Message farmer
                  </Button>
                </Grid> */}
                <Grid item>
                  <Button variant="outlined" color="primary" href="/Checkout">
                    Checkout
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} direction>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="http://www.planetnatural.com/wp-content/uploads/2014/04/garden-potatoes.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      Charlotte Potatoes
                    </Typography>
                    <div align="center">
                    <Typography>
                        Description
                        <br></br>
                        Price
                        <br></br>
                        Quanity
                    </Typography>
                    
                   
                    <button type="button" class="btn" onClick={decrement}>
                      -
                    </button>
                    <input type="text" id="number" value="0" class="input-txt" />
                    <button type="button" class="btn" onClick={increment}>
                      +
                    </button>
                    </div>




                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.farminguk.com/images/News/50002_1.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      Maris Piper Potatoes
                    </Typography>
                    <div align="center">
                    <Typography>
                        Description
                        <br></br>
                        Price
                        <br></br>
                        Quanity                    
                    </Typography>

                    <button type="button" class="btn" onClick={decrement}>
                      -
                    </button>
                    <input type="text" id="number" value="0" class="input-txt"/>
                    <button type="button" class="btn" onClick={increment}>
                      +
                    </button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.pinimg.com/originals/c4/80/55/c48055220c6e192c50ab319c27ac584b.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      Baby Potatoes
                    </Typography>
                    <div align="center">
                    <Typography>
                        Description
                        <br></br>
                        Price
                        <br></br>
                        Quanity
                    </Typography>

                    <button type="button" class="btn" onClick={decrement}>
                      -
                    </button>
                    <input type="text" id="number" value="0" class="input-txt"/>
                    <button type="button" class="btn" onClick={increment}>
                      +
                    </button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="http://www.cpm-magazine.co.uk/wp-content/uploads/2019/04/Desiree-crop5-1-600x400.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      Desiree Potatoes
                    </Typography>
                    <div align="center">
                    <Typography>
                        Description
                        <br></br>
                        Price
                        <br></br>
                        Quanity                    
                    </Typography>

                    <button type="button" class="btn" onClick={decrement}>
                      -
                    </button>
                    <input type="text" id="number" value="0" class="input-txt"/>
                    <button type="button" class="btn" onClick={increment}>
                      +
                    </button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
                            
              {/* <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-eggs-732x549-thumbnail-732x549.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      Eggs
                    </Typography>
                    <div align="center">
                    <Typography>
                        Description
                        <br></br>
                        Price
                        <br></br>
                        Quanity                    
                    </Typography>

                    <button type="button" class="btn" onClick={decrement}>
                      -
                    </button>
                    <input type="text" id="number" value="0" class="input-txt"/>
                    <button type="button" class="btn" onClick={increment}>
                      +
                    </button>
                    </div>
                  </CardContent>
                </Card>

                
              </Grid> */}

              {/* <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://avec-poultry.eu/wp-content/uploads/2018/04/38686671_drumsticks_cropped.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      Chicken
                    </Typography>
                    <div align="center">
                    <Typography>
                        Description
                        <br></br>
                        Price
                        <br></br>
                        Quanity                    
                    </Typography>

                    <button type="button" class="btn" onClick={decrement}>
                      -
                    </button>
                    <input type="text" id="number" value="0" class="input-txt"/>
                    <button type="button" class="btn" onClick={increment}>
                      +
                    </button>
                    </div>
                  </CardContent>
                </Card>

                
              </Grid> */}
              
              
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}