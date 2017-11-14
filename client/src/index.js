/* globals document */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './containers/Root';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
