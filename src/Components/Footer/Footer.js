import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import './Footer.scss'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
     margin: '0 auto',
    fontWeight: 'none',
    fontFamily: 'Times New Roman, Times, serif'
  },

  instagram: {
    float: 'right'
  }
}));


// const matches = useMediaQuery('(min-width:600px)');


export default function ButtonAppBar()  {
  const classes = useStyles();
  // const matches = useMediaQuery();

  return (  
    <div>
        <AppBar className="footer">
          <Toolbar className="tool-text">
            <Typography variant="h7" className={classes.title}>
              . سف أخفر .  سف أخفر. سف أخفر. سف أخفر. سف أخفر
            </Typography> <br />
            {/* <Typography variant="h6" className={classes.instagram}>
              Instagram: @sefgreenco
            </Typography> */}
          </Toolbar>
        </AppBar>
      </div> );

}



