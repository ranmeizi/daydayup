import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux';
import store from './redux/store';
import 'antd/dist/antd.css';
import { AliveScope } from 'react-activation'

window.onload = function () {
  console.log('onload', store.getState())
  ReactDOM.render(
    <Provider store={store}>
      <AliveScope>
        <App />
      </AliveScope>
    </Provider>, document.getElementById('app'));
}