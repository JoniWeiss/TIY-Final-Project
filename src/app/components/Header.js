import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import { base } from '../config/constants'
import { logout } from '../helpers/auth'

import classnames from 'classnames'

import sass from '../styles/_Header.sass'

export default class Header extends React.Component {
  render () {
    const { isAuthed } = this.props
    const { isAdmin } = this.props
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
      <header className="nav-bar">
        <nav className="nav-menu">
          <div id="logo">
            <span className="menu"><i className="fa fa-bars"></i></span>
            <Link to='/'>
              <img src="app/images/purple-lotus-flower.png" alt="logo" />
            </Link>
          </div>
          <div className="menu-items">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/services'>Services</Link></li>
              {/***Schedule***/}
              {isAuthed
                ? <span>
                    <li>
                      <Link to="/schedule">Therapist Schedule
                      </Link>
                    </li>
                  </span>
                : <span></span>
              }
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact-us'>Contact Us</Link></li>
              <li><Link to='/blog'>Blog</Link></li>
              {isAuthed
                ? <span>
                    <li>
                      <a href="/" onClick={logout}>
                        Log Out
                      </a>
                    </li>
                  </span>
                : <span>
                    <li
                      className={
                        classnames("navItem", {
                          hide: isAuthed
                        })
                      }>
                      <Link to="/login">Login
                      </Link>
                    </li>
                    <li
                      className={
                        classnames("navItem", {
                          hide: isAuthed
                        })
                      }>
                      <Link to="/register" >Register
                      </Link>
                    </li>
                  </span>
                }
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
