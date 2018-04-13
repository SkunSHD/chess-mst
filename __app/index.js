import React from 'react';
import ReactDOM from 'react-dom';
import 'reset.css';
import 'react-md/dist/react-md.teal-amber.min.css';
import App from 'components/App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
