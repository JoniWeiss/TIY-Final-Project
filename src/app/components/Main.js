import React from "react";
import sass from "../styles/_Main.sass";

export default class Main extends React.Component {
  render() {
    return (
      <div id="contentArea">
        <div id="appTitle">
          <h1 className="textOutline">My Awesome Therapist</h1>
        </div>
        <div id="appSubtitle">
          <p>
            Final Project for Front End Engineering immersive Coding Bootcamp @
            TheIronYard in Salt Lake City, Utah. <br />
            For testing the Scheduling function, you can log in using
            admin@demo.com / admin123
          </p>
          <br />
          <p>
            My Awesome Therapist is for the busy Massage Therapist who needs a
            way to manage their schedule and their client database in a secure
            way, and who would like a web presence including a blog.
          </p>
        </div>
        <div id="frontImage" className="content" />
      </div>
    );
  }
}
