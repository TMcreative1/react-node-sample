import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import Thunk from 'redux-thunk';
import reducer from './_reducers/index';

const store = createStore(reducer, compose(applyMiddleware(Thunk)));

ReactDom.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);