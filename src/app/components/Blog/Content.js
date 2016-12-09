  import React from 'react';

import ArticleContent from './ArticleContent';
import NewPost from './NewPost';

export default class Content extends React.Component {
  render () {
    return(
      <div className="content-main">
        <h2>New Post</h2>

        <h2>Content section</h2>
        {this.props.blog.map((entry, idx) => {
          console.log("blog entry: ", entry);
          return (<div key={idx}>
                    <h3 className="entry-title">
                      {entry.title}<br /><br />
                    </h3>
                    <p className="entry-article">
                      {entry.entryDate.map((val, idx) => {
                        return <span key={idx}>{val} </span>
                        })}<br /><br />
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
