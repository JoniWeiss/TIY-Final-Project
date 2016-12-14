import React from 'react';
import sass from '../styles/_Main.sass'

export default class Main extends React.Component {
  render() {
    return (
      <div id="frontImage" className="content">
        <h1 id="appTitle" className="textOutline">My Awesome Therapist</h1>
        <img id="qrCode" src={require("../images/qr-code.png")} />
        <div id="demoInfo">
          <h2>Try The Demo!</h2>
          <p>Scan the QR Code (above) on your mobile device.</p>
          <br />
          <p>Log in to try the therapists' scheduler:</p>
          <p>Login: admin@demo.com</p>
          <p>Password: admin123</p>
        </div>
      </div>
    )
  }
}
