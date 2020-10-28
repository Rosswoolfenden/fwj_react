import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import off from './img/red.jpg';
import on from './img/green.jpg';
import cry from './img/joshcry.jpg';
import kill from './img/joshkillme.jpg';
import './App.css';
import axios from 'axios';
import cryround from './img/roundcry.png';
import round from './img/round.png';


// let light = true;
// let stringlight = 'POWER IS ON'

function App() {

  // let light = true;
  // let stringlight = 'POWER IS ON'
  const [light, setLight] = useState(1);
  const [stringLight, setStringLight] = useState("POWER IS ON");
  const [curimg, setCurimg] = useState(0);
  const [test, setText] = useState("TOUCH HIS JOSH'S FACE TO MAKE HIM CRY");
  const [ccs, setCcs] = useState('App-header')
  let img = kill;
  // console.log(light);

  const imgages = [kill, cry];
  return (
    <div className="App">
      <header className={ccs} >
        <h1> LETS FUCK WITH HARVEY</h1>

        <button onClick={() => fuckWithJosh(light) }>
          <img src={ imgages[curimg] } className="onoff" alt="logo"/>
        </button>
        <p>
          {test}
        </p>
        <h1 className="App"> { stringLight }</h1>
      </header>
      <footer>
      <img src={cryround} className="App-logo" alt="logo" />
      </footer>
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
      setText("HAHAHAAHHA - Touch again to return power")
      
    } else {
      await lightToggle(true);
      setLight(true);
      setStringLight('POWER IS ON');
      setCurimg(0);
      setCcs("App-header")
      setText("TOUCH HIS JOSH'S FACE TO MAKE HIM CRY");
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
