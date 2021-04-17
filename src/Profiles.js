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
}));

export default function Profiles() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
      </AppBar>
      <main>
        <Search />
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
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} direction>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://c.stocksy.com/a/JTx200/z9/705269.jpg?1552458356"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      East Lothian Farm
                    </Typography>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                    image="http://american-outdoors.net/wp-content/uploads/2015/03/Female-Farmer.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      West Lothian Farm
                    </Typography>
                    <Typography>
                        Vitae auctor eu augue ut lectus arcu bibendum at varius. In hac habitasse platea dictumst vestibulum rhoncus. Luctus venenatis lectus magna fringilla urna porttitor. Enim sed faucibus turpis in. Ut consequat semper viverra nam libero. Id eu nisl nunc mi ipsum. 
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
                    image="https://cdn.modernfarmer.com/wp-content/uploads/2014/05/femalefarmer2.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cairnie Farm
                    </Typography>
                    <Typography>
                    Massa enim nec dui nunc mattis enim ut tellus elementum. Fringilla ut morbi tincidunt augue interdum. A diam maecenas sed enim ut sem viverra. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Semper viverra nam libero justo laoreet sit amet. Lobortis scelerisque fermentum dui faucibus. Netus et malesuada fames ac turpis. Lobortis scelerisque fermentum dui faucibus in ornare. 
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
                         Integer quis auctor elit sed vulputate mi sit amet. Iaculis eu non diam phasellus vestibulum. Risus sed vulputate odio ut enim blandit volutpat.                                        </Typography>
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
                    image="https://www.thetimes.co.uk/imageserver/image/methode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F214fcc3e-ed7b-11e7-8539-e5d3352c849a.jpg?crop=2667%2C1500%2C0%2C0&resize=685"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Aberdour Farm
                    </Typography>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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