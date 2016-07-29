import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import {browserHistory, Router, Route, Redirect} from 'react-router';
import Layout from './layout/layout'



import BlogPage from './pages/blog'
import PicturePage from './pages/picture'
import VideoPage from './pages/video'

const app = (
  <Router history={browserHistory}>
    <Redirect from="/" to="/blog" />
    <Route path="/" component={Layout}>
      <Route path="blog" component={BlogPage} />
      <Route path="picture" component={PicturePage} />
      <Route path="video" component={VideoPage} />
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

