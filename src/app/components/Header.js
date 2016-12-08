import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';


export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      authed: this.props.authed
    }
  }

  render () {
    // Navigation menu responsiveness
    // for small screens
    $(document).ready(function() {
      $('.menu').click(function(){
        $('.menu-items').slideDown(400, function(){
          $(this).click(function() {
            $('.menu-items').slideUp(400)
          });
        });
      });
    });
    $(window).resize(function() {
      var windowsize = $(window).width();
      if (windowsize > 480) {
        $(".menu-items").css("display","inline-block");
      } else if (windowsize <= 480) {
        $(".menu-items").css("display","none");
      }
    });﻿
    return(
      <header>
        <nav className="nav-menu">
          <div id="logo">
            <span className="menu"><i className="fa fa-bars" ></i></span>
            <Link to='/'>
              <img src="app/images/purple-lotus-flower.png" alt="logo" />
            </Link>
          </div>
          <div className="menu-items">
            <ul>
              <li><Link to='/'>My Awesome Therapist — Home</Link></li>
              <li><Link to='/services'>Services</Link></li>
              <li><Link to='/schedule'>Schedule</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact-us'>Contact Us</Link></li>
              <li><Link to='/blog'>Blog</Link></li>
              <li>
                {this.props.authed
                  ? <button
                      style={{border: 'none', background: 'transparent'}}
                      onClick={() => {
                        logout()
                        this.setState({authed: false})
                        router.transitionTo('/')
                      }}
                      >Logout</button>
                  : <span>
                      <Link to="/login">Login</Link>
                      <Link to="/register" >Register</Link>
                    </span>}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
