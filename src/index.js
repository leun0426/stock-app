import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import './resources/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import allReducers from 'reducers'
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(allReducers);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
