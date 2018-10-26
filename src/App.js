import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import y from './img/pdp.jpg'
import x from './img/pdp0.jpg'
import z from './img/pdp1.jpg'
class App extends Component {
  render() {
    return (
    	<div>
<center><p className="team">My team</p></center>
<center>
<Box className="box" pic={y} name="mohamed hlilou" job="programmer" />
<Box className="box" pic={z} name="adel mensi" job="engineer" />
<Box className="box" pic={x} name="meriem bahroun" job="designer" />
</center>    	
    	</div>
    );
   }
 }
export default App;
