import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";

const increment = () => {

  return {
  
  type: 'INCREMENT'
  
  };
  
  };
  const decrement = () => {

    return {
    
    type: 'DECCREMENT'
    
    };
    
    };
    const counter = (state = 0, action) => {

      switch (action.type) {
      
      case 'INCREMENT':
      
      return state + 1;

      case 'DECREMENT':
        
      
        return state - 1;
      }
    };
    const store = createStore (counter);

    store.subscribe(() => console.log(store.getState()));
    store.dispatch(increment());
    


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
