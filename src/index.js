import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
//FONT
import 'typeface-roboto';
// REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
//REDUCERS
import global from './services/redux/reducers/global';
import forms from './services/redux/reducers/forms';
import users from './services/redux/reducers/users';
//REDUCERS CONFIG
const rootReducer=combineReducers({
    global,
    forms,
    users
});
const store= createStore(rootReducer,applyMiddleware(thunk));


//RENDER
ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>
,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
