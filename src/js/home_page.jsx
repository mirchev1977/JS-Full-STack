'user strict';

import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import {browserHistory, Router, Route, Redirect} from 'react-router';
import Layout from './layout/layout'



import HomePage from './pages/home'
import CoursesPage from './pages/courses'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import UsersPage from './pages/users'

const app = (
  <Router history={browserHistory}>
    <Redirect from="/" to="/blog" />
    <Route path="/" component={Layout}>
      <Route path="home" component={HomePage} />
      <Route path="courses" component={CoursesPage} />
      <Route path="login" component={LoginPage} />
      <Route path="register" component={RegisterPage} />
      <Route path="users" component={UsersPage} />
    </Route>
  </Router>
)

jQuery(function() {
  ReactDOM.render(
    app,
    document.getElementById('container')
  );
})






















// let img = document.createElement('img');
// img.style.width = "100%";
// img.style.height = "100%";	
// img.src = require('../images/webpack-logo.jpg');

// document.getElementById('logo').appendChild(img);

// require('../css/styles.css');
// require('../css/styles.scss');

