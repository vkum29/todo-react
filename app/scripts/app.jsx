import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import '../styles/app.css';

import About from './components/pages/about/about.jsx';
import Detail from './components/pages/todo/detail.jsx';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';
import Layout from './components/pages/layout.jsx';
import Todo from './components/pages/todo/todo.jsx';


render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Todo}></IndexRoute>
      <Route path='about' component={About}></Route>
      <Route path='todo(/:id)' component={Detail}></Route>
    </Route>
  </Router>
,
document.getElementById('todo-app'));
