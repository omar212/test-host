import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom'

import './nav.scss'

export default function ButtonAppBar() {

  return (
    <nav className="menu">
            
            <ul className="menu__list">

              {/* <li className='menu__list-item'>
                <IconButton edge="start" className="menu__list logo" >
                  <MenuIcon />
                </IconButton>
              </li> */}

              <li className='menu__list-item'>

                  <a variant="h6" href="/shop" className="menu__link">
                      Shop
                  </a>

              </li>

              <span className="menu__spacer">|</span>

              <li className='menu__list-item'>

                <a variant="h6" href="/gallery" className="menu__link">
                    Gallery
                </a>

              </li>
      
              <span className="menu__spacer">|</span>

              <li className='menu__list-item'>

                <a href="/aboutus" variant="h6" className="menu__link">
                    About Us
                </a>

              </li>

              <span className="menu__spacer" >|</span>

              <li className='menu__list-item'>

                <a href="/account"  variant="h6" className="menu__link">
                    Account
                </a>

              </li>
              
            </ul>
    </nav>
  );
}