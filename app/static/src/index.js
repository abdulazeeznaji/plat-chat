import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import routes from './routes';

const token = sessionStorage.getItem('token');
if (token !== null) {
    // store.dispatch(authLoginUserSuccess(token));
}

ReactDOM.render(
  <React.StrictMode>
      {routes}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
