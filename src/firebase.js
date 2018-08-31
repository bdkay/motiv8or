import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBG9GkxgyPDrhTqwH0Rfh0wgIzA6OjIp0U",
  authDomain: "motiv8or-54423.firebaseapp.com",
  databaseURL: "https://motiv8or-54423.firebaseio.com",
  projectId: "motiv8or-54423",
  storageBucket: "motiv8or-54423.appspot.com",
  messagingSenderId: "964101800978"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');