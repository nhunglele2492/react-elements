import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

const App = <Routes />;

ReactDOM.render(App, document.getElementById('root'));
