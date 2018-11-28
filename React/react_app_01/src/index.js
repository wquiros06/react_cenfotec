import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comentarios from './Comentarios';
import * as serviceWorker from './serviceWorker';


//Practica 2
ReactDOM.render(<Comentarios />, document.getElementById('root'));

serviceWorker.unregister();
