import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//Importing React router
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import reducers from './reducers';
import PostIndex from './components/post_index';
import PostsNew from './components/post_new';
import PostsShow from './components/post_show';

import ReduxPromise from 'redux-promise';



const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/posts/new' component = { PostsNew } />
          {/*^^^^^Put your most specific route at the top.^^^^^^*/}
          <Route path= '/posts/:id' component= { PostsShow } /> 
          <Route path='/' component = { PostIndex } />     
        </ Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
