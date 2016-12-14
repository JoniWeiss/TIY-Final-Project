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
  }, authHandler(email))
}

export function logout() {
  base.auth().signOut()
  window.location.reload()
}
