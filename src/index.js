import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//Importing React router
import { BrowserRouter, Route } from 'react-router-dom'

import reducers from './reducers';
import PostIndex from './components/post_index';
import ReduxPromise from 'redux-promise';



const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path='/' component = { PostIndex } />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
