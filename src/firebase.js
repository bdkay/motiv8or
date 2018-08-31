import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCWCt3zoCSGMzA_4gGfprHB8CZ_SAaIrhI",
  authDomain: "motiv8or-54423.firebaseapp.com",
  databaseURL: "https://motiv8or-54423.firebaseio.com",
  projectId: "motiv8or-54423",
  storageBucket: "motiv8or-54423.appspot.com",
  messagingSenderId: "964101800978"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');