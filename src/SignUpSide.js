import React, { Component } from 'react';
import './SignUpSide.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
        FarmEd
    </Typography>
  );
}

class BusinessType extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      businessType: [] 
    };
  }

componentDidMount() {
  this.setState({
    businessType: [
      {id: 'ind', name: 'Individual'}, 
      {id: 'bus', name: 'Business'}
    ]
  });
}

render () {
  const {businessType} = this.state;
  let busList = businessType.length > 0 && businessType.map((item,i) =>{
    return (
      <option key={i} value={item.id}>{item.name}</option>
    )
  }, this);
  return (
    <div>
      <select>
        {busList}
      </select>
    </div>
  );
}
}

export default function SignUpSide() {

  return (
    <Grid container component="main" className="SignUpSide">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className="SignUpSide-image" />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className="SignUpSide-paper">
          <Avatar className="SignUpSide-avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className="SignUpSide-form" noValidate>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name/Business"
              type="name"
              id="name"
              autoComplete="current-name"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="postcode"
              label="Postcode"
              type="postcode"
              id="postcode"
              autoComplete="current-postcode"
            />
            <BusinessType />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="SignUpSide-submit"
              href="/farms"
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link className="link" href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link className= "link" href="/login" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}