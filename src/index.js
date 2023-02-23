import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './App.css';
import {Provider} from 'react-redux';
import Store from './Store'

const appElement = document.getElementById('root');

ReactDOM.render(
<Provider store={Store}>
<App />
</Provider>
, appElement);