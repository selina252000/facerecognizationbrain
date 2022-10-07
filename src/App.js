import React , { Component}from 'react';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import './App.css';
import 'tachyons';





const app = new Clarifai.App({

  apiKey: '8b75e710f339427d88a986b282521d0e'

});
class App extends Component {
    constructor(){
      super();
      this.state ={
        input: '',
        imageUrl: '',
        box:{ },
        route:'signin',
        isSignedIn: false

      }
    }

    calculateFaceLocation=(data)=>{
      const clarafaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
      console.log(clarafaiFace);
      const image =document.getElementById('inputimage');
      const width = Number(image.width);
      const height =Number(image.height);
      return{
        leftCol:clarafaiFace.left_col*width,
        topRow: clarafaiFace.top_row *height,
        rightCol: width-(clarafaiFace.right_col *width),
        bottomRow:height-(clarafaiFace.bottom_row *height)
      } 
    }
    displayFaceBox =(box)=>{
      this.setState({box:box});
    }
  onInputChange =(event)=>{
    this.setState({input:event.target.value});

  }


  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});

      app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
        .catch(err => console.log(err));
  }

  onRouteChange =(route) =>{
    if (route === 'signout'){
      this.setState({isSignIn:false})
    }else if(route ==='home'){
      this.setState({isSignIn :true})
    }
    this.setState({route:route});
  }

  render(){
   const  {isSignedIn , imageUrl , route, box}  = this.state;
    return (
      <div className="App">
    
        <ParticlesBg type="circle" bg={true} />
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      {route === 'home'
      ? <div>
          <Logo/>
          <Rank/>
          <ImageLinkForm 
          onInputChange ={this.onInputChange} 
          onButtonSubmit ={this.onButtonSubmit}
          />
          <FaceRecognition box ={box} imageUrl = {imageUrl}/>
        </div>
   :(
    route === 'signin'
    ?<Signin onRouteChange={this.onRouteChange}/>
    :<Register onRouteChange={this.onRouteChange}/>
   )
      
  }
</div>
    );
      }
}

export default App;
