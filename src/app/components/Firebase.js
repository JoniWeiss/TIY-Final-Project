import * as firebase from 'firebase';

// Firebase data source for production
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

let blogData = [],
    monthArr = [],
    tagArr = [];

function updateBlog(entryVal, entryKey) {
  blogData.push(entryVal);
  monthArr.push(entryVal.posted[1]);
  entryVal.tags.forEach(function(tag) {
    tagArr.push(tag);
  });
}

// Add DB Objects to
this.fbObjRef = fbRef.child('blogData');
this.fbObjRef.on("child_added", (snapshot) => {
  updateBlog(snapshot.val(), snapshot.key);
}).bind(this)

// export default class Firebase extends React.Component {
//   constructor() {
//     super();
//   }
//   componentWillMount (){
//
//   }
//
//   componentWillUnmount () {
//     this.fbObjRef.off();
//   }
//
//   render() {
//     return (
//       <div>Firebase DB Source</div>
//     );
//   }
// }
