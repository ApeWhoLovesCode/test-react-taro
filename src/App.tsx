import React from 'react';
import logo from './logo.svg';
import { Button } from '@tarojs/components';
// import { Button } from '@tarojs/components/dist-h5/react';
// import { Loading } from 'retaroct-ui';
import './App.css';
console.log('Button: ', Button);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button>Taro</Button> */}
        {/* <Loading /> */}
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
