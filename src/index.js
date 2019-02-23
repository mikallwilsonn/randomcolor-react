// ----
// Dependencies
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './theme/theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


// ----
// Component
import App from './components/App';


// ----
// Reducers
import reducers from './reducers';


// ----
// Store
const store = createStore( reducers, {}, applyMiddleware( reduxThunk ));


// ----
// Render the appplication
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector( '#root' )
);
