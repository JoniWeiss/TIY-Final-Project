import React from 'react';
import sass from '../styles/_Main.sass'

export default class Main extends React.Component {
  render() {
    return (
      <div id="frontImage" className="content">
        <h1 id="appTitle" className="textOutline">My Awesome Therapist</h1>
        <img id="qrCode"  alt="QR Scan Code." src={require("../images/qr-code.png")} />
      </div>
    )
  }
}
