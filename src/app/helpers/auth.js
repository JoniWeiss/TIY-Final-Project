import { base } from '../config/constants'

// auth
let authHandler = function(user, error) {
  if(error) {
    console.log("error: ", error)
  }
  console.log("user: ", user)
}

export function auth (email, pw) {
  return base.createUser({
    email: email,
    password: pw
  }, authHandler(email))
}

export function login (email, pw) {
  return base.authWithPassword({
    email    : email,
    password : pw
  }, authHandler(email));
}


// Create
base.createUser({
  email: 'bobtony@firebase.com',
  password: 'correcthorsebatterystaple'
}, userHandler);


// Reset Password
base.resetPassword({
  email: 'bobtony@firebase.com'
}, errorHandler);


//
// tylermcginnis/react-router-firebase-auth
//
// react-router-firebase-auth/src/helpers/auth.js
//
// Tyler McGinnis Upgrade to React 15.4, Firebase 3.6, and React Router 4
//
// import { ref, firebaseAuth } from '../config/constants'
//
// export function auth (email, pw) {
//   return firebaseAuth().createUserWithEmailAndPassword(email, pw)
//     .then(saveUser)
//     .catch((error) => console.log('Oops', error))
// }
//
// export function logout () {
//   return firebaseAuth().signOut()
// }
//
// export function login (email, pw) {
//   return firebaseAuth().signInWithEmailAndPassword(email, pw)
// }
//
// export function saveUser (user) {
//   return ref.child(`users/${user.uid}/info`)
//     .set({
//       email: user.email,
//       uid: user.uid
//     })
//     .then(() => user)
// }
//
