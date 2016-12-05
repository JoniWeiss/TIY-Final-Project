import React from 'react';

import Sidebar from './Sidebar';
import Content from './Content';

import * as firebase from 'firebase';

// import * as Rebase from 're-base';

import * as moment from 'moment';

/*************************************************/
/*************************************************/
/*************************************************/
/****** Uncomment ONE of these data sources  *****/
// *** Local data for demo purposes:
// import blogData from '../data/joni-weiss-blog.json';
// *** Firebase data source for production
// Initialize Firebase
var config = {
  apiKey: "AIzaSyChSy1WLxdHeYsroAvYElXsOYvkLyEufZE",
  authDomain: "joni-weiss-blog.firebaseapp.com",
  databaseURL: "https://joni-weiss-blog.firebaseio.com",
  storageBucket: "joni-weiss-blog.appspot.com",
  messagingSenderId: "1015106403880"
};
firebase.initializeApp(config);
const fbRef = firebase.database().ref();
const fbObjRef = fbRef.child('blogData');
/*************************************************/
/*************************************************/
/*************************************************/

import _ from 'lodash';

let blogData = [],
    monthArr = [],
    tagArr = [],
    datesArr = [];

function updateBlog(entryVal, entryKey) {
  blogData.push(entryVal);
  monthArr.push(entryVal.posted[1]);
  datesArr.push(entryVal.posted);
  entryVal.tags.forEach(function(tag) {
    tagArr.push(tag);
  });
}

export default class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      fbData: blogData,
      data: blogData,
      monthArr: [],
      datesArr: [],
      tagArr: [],
      searchStr: '',
      searchType: '',
      searchValue: ''
    };
  }

  componentWillMount (){
    // Add DB Objects to
    this.fbObjRef = fbRef.child('blogData');
    this.fbObjRef.on("child_added", (snapshot) => {
      updateBlog(snapshot.val(), snapshot.key);
      this.setState({
        fbData: blogData,
        data: blogData,
        monthArr: monthArr,
        datesArr: datesArr,
        tagArr: tagArr
      });
    }).bind(this)

  }

  handleSubmit (e) {
    e.preventDefault();
    this.fbObjRef.push({
      post: this.state.post
    });
    this.setState({post: {}});
  }

  componentWillUnmount () {
    this.fbObjRef.off();
  }

  setBlogData(stype, sval) {
    if (stype === "reset") {
      return this.state.fbData;
    }
    let arr = [];
    this.state.fbData.map(function(obj) {
      if (obj[stype].includes(sval)) {
        arr.push(obj);
      }
    })
    return arr;
  }

  onSetSearch (stype, sval) {
    this.setState({
      searchType: stype,
      searchValue: sval,
      data: this.setBlogData(stype, sval)
    });
  }

  onSetSearchStr (str) {
    this.setState({
      searchStr: str
    });
  }


  render() {
    return (
      <div className="content">
        <Sidebar
          data={this.state.data}
          monthArr={this.state.monthArr}
          tagArr={this.state.tagArr}
          setSearchStr={this.onSetSearchStr.bind(this)}
          defaultSearchStr={this.state.searchStr}
          defaultSearchType={this.state.searchType}
          defaultSearchValue={this.state.searchValue}
          setSearch={this.onSetSearch.bind(this)} />
        <Content
          data={this.state.data}
          searchStr={this.state.searchStr}
          searchType={this.state.searchType}
          searchValue={this.state.searchValue}/>
      </div>
    );
  }
}
