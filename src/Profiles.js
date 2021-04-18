import React from 'react';
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
import Header from './Header';
import log from './logo.svg';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: 'rgb(177, 206, 151)',
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
    backgroundColor: 'rgb(177, 206, 151)',
    padding: theme.spacing(6),
  },
  logoo:{
    align: 'center',
    width: 300,
    height: 50,
    backgroundRepeat: 'no repeat',
    backgroundSize: 'cover',
  }
}));

export default function Profiles() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
      </AppBar>
      <main>

        

        <Header  />

        {/* Hero unit */}
        <div className={classes.heroContent} >
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center"  gutterBottom style={{color: 'rgb(245, 255, 239)'}}>
              Farmer Profiles
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Meet your local farmers!
              <br></br>
              Click on a profile to see farm products and more
            </Typography>
          </Container>
        </div>
        <Search />
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} direction>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.thetimes.co.uk/imageserver/image/methode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F214fcc3e-ed7b-11e7-8539-e5d3352c849a.jpg?crop=2667%2C1500%2C0%2C0&resize=685"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      East Lothian Farm
                    </Typography>
                    <Typography>
                    We raise the only Aberdeen Angus cows in the central Scottish belt. We have been in the cattle-farming business for 20 years, raising only grass-fed beef and the freshest milk. 
                    </Typography>
                  </CardContent>
                  <CardActions style={{justifyContent: 'center'}}>
                    <Button size="small" style={{ color:  'rgb(73, 110, 49)' }}>
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://thumbs.dreamstime.com/b/portrait-beautiful-female-farmer-holds-bunch-carrots-smiling-camera-wearing-straw-hat-surrounded-many-woman-167873027.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      West Lothian Farm
                    </Typography>
                    <Typography>
                    West Lothian farm in bonnie Livingston has been a family business for over 80 years. We are an organic farm, raising free-range chickens in our pastures and never using pesticides on our crops. We believe the future of food is found in organic farming, and we hope to spread that ethos, one harvest at a time. 
                    </Typography>
                  </CardContent>
                  <CardActions style={{justifyContent: 'center'}}>
                    <Button size="small" style={{ color:  'rgb(73, 110, 49)' }} href="/West-Lothian-Farm">
                      View
                    </Button>
                  </CardActions> 
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://traininghouse.pt/wp-content/uploads/2016/09/female-tomato-farmer.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cairnie Farm
                    </Typography>
                    <Typography>
                    Cairnie Farm is a long established family run business in Cupar, Fife and is a popular local landmark. Situated on 120 acres of land, our farm is mostly used to grow pesticide-free fruit, and doesn’t grow any GMO foods. We love what we do, and want to encourage folks in Scotland to eat more fruit.
                    </Typography>
                  </CardContent>
                  <CardActions style={{justifyContent: 'center'}}>
                    <Button size="small" style={{ color:  'rgb(73, 110, 49)' }}>
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="http://www.americasheartland.org/pressroom/images/female_farmer_in_wheat_field.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Dunfermline Farm
                    </Typography>
                    <Typography>
                         We are a grain farm growing wheat, barley, and oats. We work with the local mill to offer multiple types of grind of grain, and also supply local breweries with hops for their beers.                                        
                    </Typography>
                  </CardContent>
                  <CardActions style={{justifyContent: 'center'}}>
                    <Button size="small" style={{ color:  'rgb(73, 110, 49)' }}>
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
                            
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://media.npr.org/assets/img/2011/03/30/farmers_helen-86e0f6199d1ab0894e8242c7f207d29df342b3d5-s1200.jpg"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Aberdour Farm
                    </Typography>
                    <Typography>
                    We are an organic farm, raising free-range chickens for over 30 years. We are against caging hens, and our mission is to help animals live a life of dignity. 
                    </Typography>
                  </CardContent>
                  <CardActions style={{justifyContent: 'center'}}>
                    <Button size="small" style={{ color:  'rgb(73, 110, 49)' }}>
                      View
                    </Button>
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>

                
              </Grid>
              
              
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <img src={log} className={classes.logoo}/>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Farm fresh food delivered straight from farm to you.
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}