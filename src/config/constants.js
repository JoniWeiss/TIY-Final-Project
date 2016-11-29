import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC8mbUWysQJXLEf_HBFAqJq5_MsSNW64Fk",
  authDomain: "mytherapistapp.firebaseapp.com",
  databaseURL: "https://mytherapistapp.firebaseio.com",
  storageBucket: "mytherapistapp.appspot.com",
  messagingSenderId: "427083981304"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
