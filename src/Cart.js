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



function increment0() {
  var value = parseFloat(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value = value + 0.5;
  document.getElementById('number').value = value;
}

function decrement0() {
  var value = parseFloat(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value = value - 0.5 < 0 ? 0 : value-=0.5;
  document.getElementById('number').value = value;
}

function increment1() {
  var value = parseFloat(document.getElementById('number1').value, 10);
  value = isNaN(value) ? 0 : value;
  value = value + 0.5;
  document.getElementById('number1').value = value;
}

function decrement1() {
  var value = parseFloat(document.getElementById('number1').value, 10);
  value = isNaN(value) ? 0 : value;
  value = value - 0.5 < 0 ? 0 : value-=0.5;
  document.getElementById('number1').value = value;
}

function increment2() {
  var value = parseFloat(document.getElementById('number2').value, 10);
  value = isNaN(value) ? 0 : value;
  value = value + 0.5;
  document.getElementById('number2').value = value;
}

function decrement2() {
  var value = parseFloat(document.getElementById('number2').value, 10);
  value = isNaN(value) ? 0 : value;
  value = value - 0.5 < 0 ? 0 : value-=0.5;
  document.getElementById('number2').value = value;
}

function increment3() {
  var value = parseFloat(document.getElementById('number3').value, 10);
  value = isNaN(value) ? 0 : value;
  value = value + 0.5;
  document.getElementById('number3').value = value;
}

function decrement3() {
  var value = parseFloat(document.getElementById('number3').value, 10);
  value = isNaN(value) ? 0 : value;
  value = value - 0.5 < 0 ? 0 : value-=0.5;
  document.getElementById('number3').value = value;
}

function increment4() {
  var value = parseFloat(document.getElementById('number4').value, 10);
  value = isNaN(value) ? 0 : value;
  value = value + 0.5;
  document.getElementById('number4').value = value;
}

function decrement4() {
  var value = parseFloat(document.getElementById('number4').value, 10);
  value = isNaN(value) ? 0 : value;
  value = value - 0.5 < 0 ? 0 : value-=0.5;
  document.getElementById('number4').value = value;
}

function increment5() {
  var value = parseFloat(document.getElementById('number5').value, 10);
  value = isNaN(value) ? 0 : value;
  value = value + 0.5;
  document.getElementById('number5').value = value;
}

function decrement5() {
  var value = parseFloat(document.getElementById('number5').value, 10);
  value = isNaN(value) ? 0 : value;
  value = value - 0.5 < 0 ? 0 : value-=0.5;
  document.getElementById('number5').value = value;
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
      {/* <Header title="Re:Fresh"  /> */}
      <AppBar position="relative">
      </AppBar>
      
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              West Lothian Farm
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Vitae auctor eu augue ut lectus arcu bibendum at varius. In hac habitasse platea dictumst vestibulum rhoncus. Luctus venenatis lectus magna fringilla urna porttitor. Enim sed faucibus turpis in. Ut consequat semper viverra nam libero. Id eu nisl nunc mi ipsum.            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Message farmer
                  </Button>
                </Grid>
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
          <Search />
          <Grid container spacing={4} direction>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://static.toiimg.com/thumb/msid-68902768,width-800,height-600,resizemode-75,imgsize-1493630,pt-32,y_pad-40/68902768.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      Beef Tomatoes
                    </Typography>
                    <div align="center">
                    <Typography>
                        Catch the last of our Beef Tomatoe Harvest.
                        <br></br>
                        £2.03 /kg
                    </Typography>
                    
                   
                    <button type="button" class="btn" onClick={decrement0}>
                      -
                    </button>
                    <input type="text" id="number" value="0" class="input-txt" />
                    <button type="button" class="btn" onClick={increment0}>
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
                    image="https://post.greatist.com/wp-content/uploads/2020/08/766x415_Carrot_Allergy-1-732x415.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      Chantenay Carrots
                    </Typography>
                    <div align="center">
                    <Typography>
                        Our award-winning chantanay carrots make the perfect healthy snack.
                        <br></br>
                        £0.38 /kg                    
                    </Typography>

                    <button type="button" class="btn" onClick={decrement1}>
                      -
                    </button>
                    <input type="text" id="number1" value="0" class="input-txt"/>
                    <button type="button" class="btn" onClick={increment1}>
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
                    image="https://cdn.cdnparenting.com/articles/2019/03/28135213/319574762-H.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      Oats
                    </Typography>
                    <div align="center">
                    <Typography>
                        Our oats taste great in your morning porridge.
                        <br></br>
                        £2.10 /kg
                        
                    </Typography>

                    <button type="button" class="btn" onClick={decrement2}>
                      -
                    </button>
                    <input type="text" id="number2" value="0" class="input-txt"/>
                    <button type="button" class="btn" onClick={increment2}>
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
                        Our Desiree Potatoes are still in harvest, and are great boiled baked, or mashed.
                        <br></br>
                        £0.73 /kg                  
                    </Typography>

                    <button type="button" class="btn" onClick={decrement3}>
                      -
                    </button>
                    <input type="text" id="number3" value="0" class="input-txt"/>
                    <button type="button" class="btn" onClick={increment3}>
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
                    image="https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-eggs-732x549-thumbnail-732x549.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      Eggs
                    </Typography>
                    <div align="center">
                    <Typography>
                        Our eggs are delivered to yuo within 24 hours of being laid.
                        <br></br>
                        £0.21 /Egg
                   </Typography>

                    <button type="button" class="btn" onClick={decrement4}>
                      -
                    </button>
                    <input type="text" id="number4" value="0" class="input-txt"/>
                    <button type="button" class="btn" onClick={increment4}>
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
                    image="https://www.thehappychickencoop.com/wp-content/uploads/2018/05/Leghorn-Chicken-All-You-Need-To-Know.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      Chicken
                    </Typography>
                    <div align="center">
                    <Typography>
                        Our free range leghorn chickens are treated with love and care.
                        <br></br>
                        £3.75 /Chicken                    
                    </Typography>

                    <button type="button" class="btn" onClick={decrement5}>
                      -
                    </button>
                    <input type="text" id="number5" value="0" class="input-txt"/>
                    <button type="button" class="btn" onClick={increment5}>
                      +
                    </button>
                    </div>
                  </CardContent>
                </Card>

                
              </Grid>
              
              
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Re:Fresh
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Farm fresh food delivered straight from farm to you.
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}