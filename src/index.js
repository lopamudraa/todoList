import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoPractice from './TodoPractice';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import Counter from './Counter';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoPractice /></Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



