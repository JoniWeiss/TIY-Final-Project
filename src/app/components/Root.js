import React from 'react';

import { BrowserRouter as Router, browserHistory, Link, Match, Miss } from 'react-router';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Blog from './Blog';
import Services from './Services';
import BookMe from './BookMe';
import About from './About';
import ContactUs from './ContactUs';
import NotFound from './NotFound';

import AppSass from '../styles/App.sass';

export default class Root extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <div className='container'>
          <Header />
          <Match exactly pattern='/' component={Home}/>
          <Match pattern='/services' component={Services}/>
          <Match pattern='/book-me' component={BookMe}/>
          <Match pattern='/about' component={About}/>
          <Match pattern='/contact-us' component={ContactUs}/>
          <Match pattern='/blog' component={Blog}/>
          <Miss component={NotFound}/>
          <Footer />
        </div>
      </Router>

    );
  }
}
