import React, { Component } from 'react';
import background from '../../static/background.JPG'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Name from '../Name/Name'
import Login from '../Login/Login'
import Construction from '../Construction/Construction';

import './Home.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="main-layout">
                    
                    <Construction />
                    {/* <Login /> */}
                        
            </div>
         );
    }
}
 
export default App;