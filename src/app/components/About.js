import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div className="mainContent">
        <h1>About Us</h1><br /><br />
          <p>My Awesome Therapist is an app with a mission. Our mission is to help the busy Licensed Massage Therapist to manage scheduling and client management, while creating a web presence for existing and potential clients. </p>
          <p>Features (public by default):</p>
          <ul><br />
            <li><p>Home, About, Contact pages</p></li>
            <li><p>Services "menu"</p></li>
            <li><p>Therapists&#39; Blog</p></li>
          </ul><br />
          <p>Features (restricted by default):</p>
          <ul><br />
            <li><p>Therapists&#39; Schedule</p></li>
            <li><p>Client Database</p></li>
            <li><p>Site content management</p></li>
          </ul><br />
          <p>The My Awesome Therapist App allows the Therapist to control the availablity of each feature to both the authenticated client and the casual web visitor (potential client). </p>
      </div>
    )
  }
}
