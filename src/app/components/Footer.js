import React from 'react';

export default class Footer extends React.Component {
  render () {
    return(
      <footer className="footer">
        <div className="footerLeft">
        </div>
        <div className="footerCenter">
          <p>
            <a  href="//www.linkedin.com/in/joniweiss?trk=hp-identity-name" alt="Link to LinkedIn Profile." aria-label="Link to LinkedIn Profile."
              data-size="large" target="_blank">
              <i className="fa fa-linkedin-square fa-2x"
              aria-hidden="true"></i>&nbsp;&nbsp;
            </a>
          </p>

          <p>
            <a href="//twitter.com/joniw" alt="Link to Twitter Profile." aria-label="Link to Twitter Profile."
              data-size="large" target="_blank">
              <i className="fa fa-twitter-square fa-2x"
              aria-hidden="true"></i>&nbsp;&nbsp;
            </a>
          </p>

          <p>
            <a href="//github.com/JoniWeiss" alt="Link to GitHub Profile." aria-label="Link to GitHub Profile."
              data-size="large" target="_blank">
              <i className="fa fa-github fa-2x"
              aria-hidden="true"></i>&nbsp;&nbsp;
            </a>
          </p>

          <p>Joni Andrea Weiss 2016</p>

        </div>
        <div className="footerRight">
        </div>
      </footer>
    );
  }
}
