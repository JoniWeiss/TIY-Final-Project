import { base } from '../config/constants'

// auth
var authHandler = function(error, user) {
  if(error) {
    console.log("error: ", error)
  }
  console.log("user: ", user)
}

export function auth (email, pw) {
  return base.createUser({
    email: email,
    password: pw
  }, authHandler(email, pw))
}

export function login (email, pw) {
  return base.authWithPassword({
    email    : email,
    password : pw
  }, authHandler(email, pw));
}
//
// let authState = fbAuth.onAuthStateChange(firebaseUser => {})
//
// export function logout () {
//   return fbAuth.signOut()
// }
//
//
// export function saveUser (user) {
//   return ref.child(`users/${user.uid}/info`)
//     .set({
//       email: user.email,
//       uid: user.uid
//     })
//     .then(() => user)
// }
