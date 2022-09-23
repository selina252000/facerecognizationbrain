import React , { Components}from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import './App.css';
import 'tachyons';
import Particles from "react-tsparticles";

 const particlesOptions ={
  particles:{
    number:{
      value:30,
      density:{
        enable :true,
        value_area: 800
      }
    }
  }
}
class  App extends Components {
  render(){
  return (
    <div className="App">
    <Particles className='particles'
      params ={particlesOptions}
    />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
        {/*
      < FAceRecognition/> */}

      
    </div>
  );
    }
}

export default App;
