import React from 'react';

const rmvDups = (arr) => {
  let newArr = [];
  arr.map( function(item){
    if (newArr.indexOf(item) === -1) {
      newArr.push(item);
    }
  } )
  return newArr;
};

export default class Sidebar extends React.Component {
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

  onSearch() {
    this.props.setSearchStr(this.state.searchStr)
  }

  onHandleSearch(event) {
    this.setState({
      searchStr: event.target.value
    });
  }

  onClickSelect(event) {
    this.setState({
      searchType: event.target.name,
      searchValue: event.target.id
    });
    this.props.setSearch(event.target.name, event.target.id)
  }

  render () {
    let monthArr = rmvDups(this.props.monthArr);
    let tagArr = rmvDups(this.props.tagArr);
    return(
      <div className="sidebar">
        <h2>Filter results:</h2>
        {/* <h3>Search</h3>
        <input type="text"
          defaultValue={this.props.defaultSearchStr} onChange={(event) => this.onHandleSearch(event) }>
        </input>
        <button
          onClick={this.onSearch.bind(this)}>
          Search
        </button>
      <br /><br /><hr /> */}

        <h3>Reset</h3>
        <div>
          <button id="reset-all" name="reset" onClick={this.onClickSelect.bind(this)}>All blog entries</button><br />
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

        <h3>Tags</h3>
        {tagArr.map((tag, idx) => {
          return  <div key={idx}>
                    <button
                      id={tag}
                      name="tags"
                      onClick={this.onClickSelect.bind(this)}>{tag}</button><br/>
                  </div>
        })}
      </div>
    );
  }
}
