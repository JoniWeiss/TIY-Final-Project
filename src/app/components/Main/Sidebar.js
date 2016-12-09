import React from 'react';
import Login from '../Login'
import QrCode from '../../images/qr-code.png'

export default class Sidebar extends React.Component {
  render () {
    return (
      <div className="sidebar">
        <h2>Sidebar</h2>
        <img className="qrCode" src={QrCode} />
        <p>Scan the QR code above to bring up on your mobile device!</p>
      </div>
    )
  }
}
