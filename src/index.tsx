import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyPolyfills, defineCustomElements } from '@tarojs/components/loader'
import '@tarojs/components/dist/taro-components/taro-components.css'

applyPolyfills().then(() => {
  defineCustomElements(window)
})

ReactDOM.render((
  <App />
  ),document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
