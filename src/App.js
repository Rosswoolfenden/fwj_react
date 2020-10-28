import logo from './logo.svg';
import React, { useState } from 'react';
import off from './img/red.jpg';
import on from './img/green.jpg'
import './App.css';
import axios from 'axios';


// let light = true;
// let stringlight = 'POWER IS ON'

function App() {

  // let light = true;
  // let stringlight = 'POWER IS ON'
  const [light, setLight] = useState(1);
  const [stringLight, setStringLight] = useState("On")
  // console.log(light);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <button onClick={() => fuckWithJosh(light) }>
          <img src={off} className="onoff" />
        </button>
        <p>
            LETS FUCK WITH HARVEY
        </p>
        <h1> { stringLight }</h1>
      </header>
    </div>
  );

  async function fuckWithJosh() {
    if(light == true) {
      await lightToggle(false);
      setLight(false);
      setStringLight('POWER IS OFF')
      
    } else {
      await lightToggle(true);
      setLight(true);
      setStringLight('POWER IS ON');
    }
  }

}
async function lightToggle(light) {
  console.log("we have just been called light = " + light);
  if (light) {
    axios.get("http://192.168.56.1:8080/")
    .then(res => {
      console.log("res is ", res);
    })
    .catch(err => {
      console.log(err);
    });
    light = false;
  } else {
// 192.168.1.89
    axios.get("http://192.168.56.1:8080/")
    .then(res => {
      console.log("res is ", res);
    })
    .catch(err => {
      console.log(err);
    }) ;
    light = true;
  }
}

export default App;
