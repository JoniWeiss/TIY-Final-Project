import React, { Component } from 'react';

import { BrowserRouter as Router, Redirect, browserHistory, Link, Match, Miss } from 'react-router'
import { base } from '../config/constants'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Main from './Main'
import Blog from './Blog'
import Services from './Services'
import Schedule from './Schedule'
import About from './About'
import ContactUs from './ContactUs'
import Login from './Login'
import Register from './Register'
import Logout from './Logout'

import AppSass from '../styles/App.sass';

function MatchWhenAuthed ({component: Component, authed, ...rest}) {
  return (
    <Match
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function MatchWhenUnauthed ({component: Component, authed, ...rest}) {
  return (
    <Match
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/' />}
    />
  )
}

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      isAuthed: false,
      isAdmin: false,
      email: "",
      name: "",
      uid: ""
    }
  }

  componentWillMount () {
    this.removeListener = base.auth().onAuthStateChanged((user) => {
      if (user) {
        this.handleAuthChange(true)
      }})
  }

  handleAuthChange (isAuthed) {
    this.setState({ isAuthed })
  }

  componentWillUnmount () {
    this.removeListener()
  }

  render () {
    return (
      <Router history={browserHistory}>
        <div className='container'>
          <Header
            isAuthed={this.state.isAuthed}
            isAdmin={this.state.isAdmin}
            handleAuthChange={this.handleAuthChange}
          />
          <Match
            exactly
            pattern="/"
            render={defaultProps => (
              <Home
                isAuthed={this.state.isAuthed}
                handleAuthChange={this.handleAuthChange}
                {...defaultProps}
              />
            )}
          />
          <Match
            pattern="/services"
            render={defaultProps => (
              <Services
                isAuthed={this.state.isAuthed}
                handleAuthChange={this.handleAuthChange}
                {...defaultProps}
              />
            )}
          />
          <Match
            pattern='/schedule'
            render={defaultProps => (
              <Schedule
                isAuthed={this.state.isAuthed}
                handleAuthChange={this.handleAuthChange}
                {...defaultProps}
              />
            )}
          />
          <Match pattern='/about' component={About}/>
          <Match pattern='/contact-us' component={ContactUs}/>
          <Match pattern='/blog' component={Blog}/>
          <MatchWhenUnauthed authed={this.state.isAuthed} pattern='/login' component={Login} />
          <MatchWhenUnauthed authed={this.state.isAuthed} pattern='/register' component={Register} />
          <MatchWhenAuthed authed={this.state.isAuthed} pattern='/logout' component={Logout} />
          <Miss render={() => <h3>No Match</h3>} />
          <Footer />
        </div>
      </Router>
    );
  }
}
