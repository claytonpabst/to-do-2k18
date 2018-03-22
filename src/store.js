import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './ducks/tasks.js';

export default createStore(reducer, undefined, applyMiddleware( promiseMiddleware() ));