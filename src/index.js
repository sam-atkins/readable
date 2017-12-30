/* globals document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(
  <Provider store={storeConfig}>
    <App />
  </Provider>,document.getElementById('root')
);
registerServiceWorker();
