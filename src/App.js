import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Saludo from './Saludo';
import Navbar from './Navbar';
import Contador from './Contador';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Contador
          valorInicial={3}
          cantAum={5}
          cantDec={2}
        />

        <Contador
          valorInicial={20}
          cantAum={2}
          cantDec={1}
        />

        <Navbar 
          enlaces={[
            {url: 'https://youtube.com', txt: 'Youtube'},
            {url: 'https://twitter.com', txt: 'Twitter'},
            {url: 'https://facebook.com', txt: 'Facebook'},
            {url: 'https://instagram.com', txt: 'Instagram'}
          ]}
        />
        
        <Saludo 
          txt='Hola' 
          paragraph='Saludo en español'
        />
        <Saludo txt='Hello' />
        <Saludo txt='Bonacera' />

        <Navbar
          enlaces={[
            { url: 'https://google.com', txt: 'Google' },
            { url: 'https://linkedin.com', txt: 'Linkedin' }
          ]}
        />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
