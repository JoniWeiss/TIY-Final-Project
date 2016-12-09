import React, { Component } from 'react';

import { BrowserRouter as Router, Redirect, browserHistory, Link, Match, Miss } from 'react-router'
import { base } from '../config/constants'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Main from './Main'
import Blog from './Blog'
import Services from './Services'
import Dashboard from './Dashboard'
import About from './About'
import ContactUs from './ContactUs'
import Login from './Login'


import AppSass from '../styles/App.sass';

function MatchWhenAuthed ({component: Component, isAuthed, ...rest}) {
  return (
    <Match
      {...rest}
      render={(props) => isAuthed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function MatchWhenUnauthed ({component: Component, isAuthed, ...rest}) {
  return (
    <Match
      {...rest}
      render={(props) => isAuthed === false
        ? <Component {...props} />
      : <Redirect to='/schedule' />}
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

  componentDidMount () {
    this.removeListener = base.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("Logged in: ", user.email, user.uid);
        this.handleAuthChange(true)
      } else {
        console.log("Not logged in");
      }})
  }

  handleAuthChange (isAuthed) {
    this.setState({ isAuthed })
  }

  componentWillUnmount () {
    this.removeListener()
  }

  render () {
    console.log("isAuthed: ", this.state.isAuthed);
    return (
      <Router history={browserHistory}>
        <div className='container'>
          <Header
            isAuthed={this.state.isAuthed}
            isAdmin={this.state.isAdmin}
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
            pattern='/dashboard'
            render={defaultProps => (
              <Dashboard
                isAuthed={this.state.isAuthed}
                handleAuthChange={this.handleAuthChange}
                {...defaultProps}
              />
            )}
          />
          <Match pattern='/about' component={About}/>
          <Match pattern='/contact-us' component={ContactUs}/>
          <Match pattern='/blog' component={Blog}/>
          <Miss render={() => <h3>No Match</h3>} />
          <Footer />
        </div>
      </Router>
    );
  }
}
