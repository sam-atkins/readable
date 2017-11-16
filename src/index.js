/* globals document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeConfig from './store/store';
import './index.css';
import Root from './containers/Root';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(
  <Provider store={storeConfig}>
    <Root />
  </Provider>,document.getElementById('root')
);
registerServiceWorker();
