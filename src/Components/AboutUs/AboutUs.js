import React, { Component } from 'react';
import './AboutUs.scss'
import Construction from '../Construction/Construction'

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="main-layout">
                <Construction />
            </div>
         );
    }
}
 
export default AboutUs;