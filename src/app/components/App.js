import React from 'react';

import { BrowserRouter as Router, Redirect, browserHistory, Link, Match, Miss } from 'react-router'
import { base } from '../config/constants'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Blog from './Blog'
import Services from './Services'
import Schedule from './Schedule'
import About from './About'
import ContactUs from './ContactUs'
import Login from './Login'


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
        : <Redirect to='/dashboard' />}
    />
  )
}

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      authed: false,
      loading: true
    }
  }

  componentDidMount () {
    this.removeListener = base.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }

  render () {
    return (

      <Router history={browserHistory}>
        <div className='container'>
          <Header authed={this.state.authed}/>
          <Match exactly pattern='/' component={Home}/>
          <Match pattern='/services' component={Services}/>
          <MatchWhenAuthed authed={this.state.authed} pattern='/schedule' component={Schedule} />
          <Match pattern='/about' component={About}/>
          <Match pattern='/contact-us' component={ContactUs}/>
          <Match pattern='/blog' component={Blog}/>
          {/*<Match pattern="/"
            render={(defaultProps) => <MyComponent
            myProp = {myProp}
            {...defaultProps} />
          }/>*/}
          <Miss render={() => <h3>No Match</h3>} />
          <Footer />
        </div>
      </Router>

    );
  }
}
