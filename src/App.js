import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar'
import Name from './Components/Name/Name'
import Footer from './Components/Footer/Footer'
import fog from './static/fog.mp4'
import smoke from './static/smoke.mp4'
import './App.css';


class App extends Component {
  render(){
    return(
      <div id="fullScreenDiv"> 
      <NavBar />
        <div id="videoBlock">  
          <video 
              preload
              autoPlay
              muted 
              loop 
              playsinline
              video-auto-ctrl
              id="video" >
              <source src={fog} type="video/webm"></source>
              <source src={fog} type="video/mp4"></source>
          </video>  
          </div>
          <div id="messageBox"> 
              <div>
                  <Name />
              </div>
           </div>   
           {/* <span>Free Stock videos by <a rel="nofollow" target="_blank" href="http://www.videezy.com">Videezy</a></span> */}
          <Footer />
      </div>
    )
  }
}

export default App;

