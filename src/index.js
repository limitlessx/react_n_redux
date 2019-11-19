import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducer/rootReducer'
import { Provider } from 'react-redux'
import  thunk  from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer,compose(
    applyMiddleware(thunk), 
    composeWithDevTools()
));
console.log('store is', store)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();