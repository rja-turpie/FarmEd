import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import logo from './logo.svg';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  logo:{
    flex: 1,
    width: 300,
    height: 50,
    backgroundRepeat: 'no repeat',
    backgroundSize: 'cover',
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small" style={{color: 'rgb(245, 255, 239)'}}>Subscribe</Button>
        <a className={classes.logo} href='\'>
        <img className={classes.logo} src={logo} />
        </a>
        <IconButton>
        </IconButton>
        <Button variant="outlined" size="small" href='\login'>
          Sign In
        </Button>
      </Toolbar>
      
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};