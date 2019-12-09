import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';
import './custom.scss'; // Bootstrap 4 with SASS

// default global settings for Axios
axios.defaults.baseURL = 'https://mass-atlas-api.herokuapp.com/';   // back-end URL
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
