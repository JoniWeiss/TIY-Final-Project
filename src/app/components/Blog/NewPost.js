import React from 'react';

export default class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthArr: this.props.monthArr,
      tagArr: this.props.tagArr,
      searchStr: this.props.defaultSearchStr,
      searchType: this.props.defaultSearchType,
      searchValue: this.props.defaultSearchValue
    }
  }

  onClickSelect(event) {
    this.setState({
      searchType: event.target.name,
      searchValue: event.target.id
    });
    this.props.setSearch(event.target.name, event.target.id)
  }

  render () {
    return(
      <div className="new-post">
        <h2>New Blog Post:</h2>
        <div>
          <button id="reset-form" name="reset" onClick={this.onClickSelect.bind(this)}>Reset Form</button><br />
        </div>
        <div>
          <form onSubmit="this.doSubmit()">

          </form>
        </div>
        <h3>Months</h3>
          {monthArr.map((month, idx) => {
          return  <div key={idx}>
                    <button
                      id={month}
                      name="posted"
                      onClick={this.onClickSelect.bind(this)}>{month}</button><br/>
                  </div>
        })}
      </div>
    );
  }
}
