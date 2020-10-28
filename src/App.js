import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import off from './img/red.jpg';
import on from './img/green.jpg';
import cry from './img/joshcry.jpg';
import kill from './img/joshkillme.jpg';
import './App.css';
import axios from 'axios';


// let light = true;
// let stringlight = 'POWER IS ON'

function App() {

  // let light = true;
  // let stringlight = 'POWER IS ON'
  const [light, setLight] = useState(1);
  const [stringLight, setStringLight] = useState("POWER IS ON");
  const [curimg, setCurimg] = useState(0);
  const [ccs, setCcs] = useState('App-header')
  let img = kill;
  // console.log(light);

  const imgages = [kill, cry];
  // useEffect(() => {
  //   if(light) {
  //     img = cry;
  //   } else {
  //     img = kill;
  //   }
  // }) ;
  return (
    <div className="App">
      <header className={ccs} >
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <button onClick={() => fuckWithJosh(light) }>
          <img src={ imgages[curimg] } className="onoff" />
        </button>
        <p>
            TOUCH HIM TO MAKE HIM CRY
        </p>
        <h1> { stringLight }</h1>
      </header>
    </div>
  );
  async function whatimg() {
    if(light) {
      return kill;
    } else {
      return cry;
    }
  }
  async function fuckWithJosh() {
    if(light == true) {
      await lightToggle(false);
      setLight(false);
      setStringLight('POWER IS OFF')
      setCurimg(1);
      setCcs("App-header2")
      
    } else {
      await lightToggle(true);
      setLight(true);
      setStringLight('POWER IS ON');
      setCurimg(0);
      setCcs("App-header")
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
