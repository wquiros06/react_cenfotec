import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Main from './contenedores/main';

ReactDOM.render(
    <Main isLoggedIn={false}/>,
     document.getElementById('root'));

serviceWorker.unregister();
