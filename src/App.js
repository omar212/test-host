import React, { Component } from 'react';


import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Gallery from './Components/Gallery/Gallery'
import AboutUs from './Components/AboutUs/AboutUs'
import Account from './Components/Account/Account'
import Shop from './Components/Shop/Shop'


import { BrowserRouter, Route, Switch } from 'react-router-dom'



class App extends Component {
  
  render(){
  
    return(
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/account" component={Account}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/shop" component={Shop}/>
          </Switch>
        </BrowserRouter> 
    )
  }
}

export default App;