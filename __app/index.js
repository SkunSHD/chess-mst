import React from 'react';
import ReactDOM from 'react-dom';
// Ons styles
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import './index.css';
import App from 'components/App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
