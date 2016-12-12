import React, { Component } from 'react';
import { base } from '../../config/constants'
import Sidebar from './Sidebar';
import Content from './Content';
import moment from 'moment'
import _ from 'lodash';

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      blog: [],
      monthArr: [],
      datesArr: [],
      tagArr: [],
      searchStr: '',
      searchType: '',
      searchValue: ''
    };
  }

  componentWillMount(){
    this.setState({
      blog: this.getBlog()
    })
  }
  componentWillUnmount(){
    base.removeBinding(this.blogRef);
  }

  onSetSearchStr (str) {
    this.setState({
      searchStr: str
    });
  }

  getBlog(){
    base.fetch('blog', {
      context: this,
      asArray: true
    }).then(blog => {
      console.log("getBlog(success!): ", blog);
    }).catch(error => {
      //handle error
      console.log("getServices(error): ", error);
    })
  }

  render() {
    return (
      <div className="content mainContent">
        <Sidebar
          blog={this.state.blog}
          monthArr={this.state.monthArr}
          tagArr={this.state.tagArr}
          setSearchStr={this.onSetSearchStr.bind(this)}
          defaultSearchStr={this.state.searchStr}
          defaultSearchType={this.state.searchType}
          defaultSearchValue={this.state.searchValue} />
        <Content
          blog={this.state.blog}
          searchStr={this.state.searchStr}
          searchType={this.state.searchType}
          searchValue={this.state.searchValue}/>
      </div>
    );
  }
}
