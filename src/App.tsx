import React from 'react';
import logo from './logo.svg';
import { Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './App.css';
console.log('Button: ', Button);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => {
          Taro.showToast({title: '啊啊啊'})
        }}>Taro button</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

export default App;
