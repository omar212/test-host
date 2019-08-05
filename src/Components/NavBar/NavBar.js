import React from 'react';
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