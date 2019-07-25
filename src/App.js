import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar'
import Name from './Components/Name/Name'
import Footer from './Components/Footer/Footer'
import fog from './static/fog.mp4'
import smoke from './static/smoke.mp4'
import image1 from './static/image1.JPG'
import image2 from './static/image2.jpeg'
import image3 from './static/image3.JPG'
import image4 from './static/image4.JPG'
import image5 from './static/image5.JPG'
import image6 from './static/image6.JPG'
import image7 from './static/image7.JPG'

import './App.scss';
import enableInlineVideo from 'iphone-inline-video';



class App extends Component {
  
  render(){
  
    return(
      <div id="fullScreenDiv"> 
      <NavBar />
        <div id="videoBlock">  
          <video 
              preload="auto" 
              autoPlay
              muted="" 
              loop 
              onPlay={enableInlineVideo}
              playsInline=""
              video-auto-ctrl="true"
              id="video" >
              <source src={smoke} type="video/webm"></source>
              <source src={smoke} type="video/mp4"></source>
          </video>  
          <img className="image1" src={image1} alt="first"/>
          <img className="image2" src={image2} alt="second"/>
          <img className="image3" src={image3} alt="thrid"/>
          <img className="image4" src={image4} alt="fourth"/>
          <img className="image5" src={image5} alt="fifth"/>
          <img className="image6" src={image6} alt="sixth"/>
          <img className="image7" src={image7} alt="seventh"/>

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

