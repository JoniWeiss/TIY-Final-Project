import React from 'react';

export default class ContactUs extends React.Component {
  render() {
    return (
      <div className="centeredText mainContent">
        <h1>Contact Us</h1><br /><br />
        <p>This is where therapist contact information will belong. </p>

        <h1>Address and Map</h1>
        <p>Call us: <a href="tel:801-948-3149">801-948-3149</a></p>
        <p>Email us: <a href="mailto:me@joniweiss.com">me@joniweiss.com</a></p><br />

        <h1>Address and Map</h1>
        <div>
          <p>Click on map for directions:</p>
          <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9506754934837!2d-111.8938183845935!3d40.76310957932634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f50fe5b827f9%3A0xe6de13b82471db4f!2s10+Broadway%2C+Salt+Lake+City%2C+UT+84101!5e0!3m2!1sen!2sus!4v1481755621439" target="_blank">
            <div>
              <p>
                <strong>Find us at 10 West 300 South, Suite 310, Salt Lake City Utah 84101. <br />
                </strong>
              </p>
            </div>
            <div>
            	<p>
              <img src={require("../images/iron-yard-map.png")} alt="Map to The Iron Yard on 10 West 300 South, Suite 310, Salt Lake City Utah 84101" /><br /><br />
              </p>
            </div>
          </a>
        </div>
      </div>
)}}
