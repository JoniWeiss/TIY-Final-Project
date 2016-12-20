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
      if($('.menu').is(":visible")) {
        $('.menu-items').slideUp(0);
      }
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
      if (windowsize > 850) {
        $(".menu-items").css("display","inline-block");
      } else if (windowsize <= 850) {
        $(".menu-items").css("display","none");
      }
    });﻿
    return(
      <header className="nav-bar">
        <nav className="nav-menu">
          <div id="logo">
            <span className="menu"><i className="fa fa-bars fa-2x" aria-hidden="true"></i></span>
            <Link to='/'>
              <img src={require("../images/purple-lotus-flower.png")} alt="Logo and link to Application Home." />
            </Link>
          </div>
          <div className="menu-items">
            <ul>
              <li className="navList"><Link to='/'>Home</Link></li>
              <li className="navList"><Link to='/services'>Services</Link></li>
              {/***Schedule***/}
              {isAuthed
                ? <span>
                    <li className="navList">
                      <Link to="/schedule">Therapist Schedule
                      </Link>
                    </li>
                  </span>
                : <span></span>
              }
              <li className="navList"><Link to='/about'>About Us</Link></li>
              <li className="navList"><Link to='/contact-us'>Contact Us</Link></li>
              <li className="navList"><Link to='/blog'>Blog</Link></li>
              {isAuthed
                ? <span>
                    <li className="navList">
                      <a href="/" onClick={logout}>
                        Log Out
                      </a>
                    </li>
                  </span>
                : <span>
                    <li
                      className={
                        classnames("navItem navList", {
                          hide: isAuthed
                        })
                      }>
                      <Link to="/login">Login
                      </Link>
                    </li>
                    <li
                      className={
                        classnames("navItem navList", {
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
