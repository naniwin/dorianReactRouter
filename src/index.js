import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
// passengers prototype
const animalReducer = (state = ['cat'], action) => {
  console.log('in animalReducer:', action);
  if (action.type === 'SET_FAV') {
    // state = action.payload;
    // spreader ...
    state = [...state, action.payload]; // similar to state.push(action.payload), but will work better
  }
  return state;
};

const store = createStore(
  combineReducers({
    animalReducer,
  }) // end combine
); // end store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
