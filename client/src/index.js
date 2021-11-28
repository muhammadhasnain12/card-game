import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import "aos/dist/aos.css";

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));