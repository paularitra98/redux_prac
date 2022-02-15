import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/Counter';

import {counter} from './reducers';
import { render } from '@testing-library/react';
const store=createStore(counter);


const renderbal= () => ReactDOM.render(
  
  <Counter
    value={store.getState()}

    onIncrement={()=>{
      store.dispatch({type:'INCREMENT'})
    }}

    onDecrement={()=>store.dispatch({type:'DECREMENT'})}
  />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


renderbal();
store.subscribe(renderbal);