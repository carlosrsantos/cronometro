/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import cronometro from './assets/cronometro.png';
import './style.css';

class App extends Component {
  render(){
    return (
      <div className="container">
      <img src={cronometro} className="img" />
      <a className="timer">0.0</a> 
      <div className="areaBtn">
        <a className="botao">VAI</a>
        <a className="botao">LIMPAR</a> 
      </div>
      </div>
    );
  }
}

export default App;
