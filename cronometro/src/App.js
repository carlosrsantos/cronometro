/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import cronometro from './assets/cronometro.png';
import './style.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      numero: 0, 
      botao: 'INICIAR'
    };
    this.timer = null;
    this.iniciar = this.iniciar.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  iniciar(){
      let state = this.state;

      if(this.timer !== null){
        clearInterval(this.timer);
        this.timer = null;
        state.botao = 'INICIAR';
      }else{
        this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      },100);
      state.botao = "PAUSAR";
    }

    this.setState(state);
  }

  zerar(){
      if(this.timer !== null){
        clearInterval(this.timer);
        this.timer = null;
      }

      let state = this.state;
      state.numero = 0;
      state.botao = 'INICIAR';
      this.setState(state);
  }

  render(){
    return (
      <div className="container">
      <img src={cronometro} className="img" />
      <a className="timer">{ this.state.numero.toFixed(1) }</a> 
      <div className="areaBtn">
        <a className="botao" onClick={ this.iniciar }>{ this.state.botao }</a>
        <a className="botao" onClick={ this.zerar }>ZERAR</a> 
      </div>
      </div>
    );
  }
}

export default App;
