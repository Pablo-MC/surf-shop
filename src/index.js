import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.scss';
import App from './App';


// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap JS, jQuery, Popper.js
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Font-awesome
import 'font-awesome/css/font-awesome.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
