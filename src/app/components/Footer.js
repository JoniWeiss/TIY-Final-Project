import React from 'react';

export default class Footer extends React.Component {
  render () {
    return(
      <footer className="footer">
        <div className="footerLeft">
          Left
        </div>
        <div className="footerCenter">
          <p><a href="//joniweiss.com">Created by Joni Weiss @ The Iron Yard</a></p>
        </div>
        <div className="footerRight">
          Right
        </div>
      </footer>
    );
  }
}
