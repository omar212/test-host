import React, { Component } from 'react';
import background from '../../static/background.JPG'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Name from '../Name/Name'
import Login from '../Login/Login'

import './Home.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{ backgroundImage: `url('${background}')`}} className="main-layout">
                <NavBar />

                <div style={{float: 'left'}}>
                    <Name />
                </div>
                <div style={{float: 'right'}}>
                    <Login />
                </div>
                
                <Footer/>
            </div>
         );
    }
}
 
export default App;