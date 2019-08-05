import React from 'react';

import './Footer.scss'

const Footer = () => (
    <div className="footer-wrapper">
        <ul className="footer-contatiner">
            <div className="logo-footer">
              <li>
                  <a href="/">Logo</a>
              </li>
            </div>

            <div className="cusr-footer">
                  
                  <a href="/">Contact Us</a>
              
                  <span className="menu__spacer">|</span>

                  <a href="/">Shipping & Returns</a>
              
            </div>
        </ul>
    </div>
)

export default Footer
