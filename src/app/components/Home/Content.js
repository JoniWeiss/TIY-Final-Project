import React from 'react';

export default class Content extends React.Component {
  render () {
    return(
      <div className="blog-content">
        <h2>Home</h2>
        <p>My Awesome Therapist is an app with a mission. Our mission is to help the busy Licensed Massage Therapist to manage scheduling and client management, while creating a web presence for existing and potential clients. </p>
        <p>Features (public by default):</p>
        <ul>
          <li>Home, About, Contact pages</li>
          <li>Services "menu"</li>
          <li>Therapists' Blog</li>
        </ul>
        <p>Features (restricted by default):</p>
        <ul>
          <li>Therapists' Schedule</li>
          <li>Client Database</li>
          <li>Site content management</li>
        </ul>
        <p>The My Awesome Therapist App allows the Therapist to control the availablity of each feature to both the authenticated client and the casual web visitor (potential client). </p>
      </div>
    );
  }
}
