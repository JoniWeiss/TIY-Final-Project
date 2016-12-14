import React, { Component } from 'react';

import moment from 'moment'

import { formatLongDate } from '../../helpers/date-helpers'

import ArticleContent from './ArticleContent';

export default class Content extends Component {
  render (props) {
    return(
      <div className="content-main">
        <h2>Content section</h2>
        {this.props.blog.map((entry, idx) => {
          console.log("blog entry: ", entry);
          return (<div key={idx}>
            <h3 className="entry-title">
              {entry.title}<br /><br />
            </h3>
            <p className="entry-article">
              {formatLongDate(entry.entryDate)}<br /><br />
            </p>
            <ArticleContent data={entry.article} />
            <p>Tags: {entry.tags.map((tag,idx) => {
                return <span key={idx}>[{tag}] </span>
              })}</p>
            <p>&nbsp;</p>
            <hr />
            <p>&nbsp;</p>
          </div>)
        })}
      </div>
    );
  }
}
