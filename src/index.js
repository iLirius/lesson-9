// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import createStore from './store';
import {fetchShowRequest} from './actions';

const store = createStore();

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchShowRequest());

// ReactDOM.render(<App />, document.getElementById('root'));
