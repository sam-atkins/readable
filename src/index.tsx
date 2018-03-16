/* globals document */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// TODO why can't it read `process.env.NODE_ENV`?
import storeConfig from './store/storeConfig.dev';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(
  <Provider store={storeConfig}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
