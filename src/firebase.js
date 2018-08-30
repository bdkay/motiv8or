import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBG9GkxgyPDrhTqwH0Rfh0wgIzA6OjIp0U",
  authDomain: "motiva8or-189c5.firebaseapp.com",
  databaseURL: "https://motiva8or-189c5.firebaseio.com",
  projectId: "motiva8or-189c5",
  storageBucket: "motiva8or-189c5.appspot.com",
  messagingSenderId: "586346620850"
};

export const firebaseApp = firebase.initializeApp(config);