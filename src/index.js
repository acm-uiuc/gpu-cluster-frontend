import React from 'react';
import ReactDOM from 'react-dom';
import FrameworkImages from './frameworkImages.js';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

console.log(FrameworkImages);
ReactDOM.render(<App frameworkImages={FrameworkImages} />, document.getElementById('root'));
registerServiceWorker();
