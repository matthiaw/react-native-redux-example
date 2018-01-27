const fb = require("firebase");
// Required for side-effects
require("firebase/firestore");

/*
var config = {
  apiKey: "AIzaSyAKuRSiyUNi5XlrIYhJN8sTGasYrHohqTM",
  authDomain: "circlead-f1cab.firebaseapp.com",
  databaseURL: "https://circlead-f1cab.firebaseio.com",
  projectId: "circlead-f1cab",
  storageBucket: "circlead-f1cab.appspot.com",
  messagingSenderId: "545756934124"
};*/

var config = {
  apiKey: "AIzaSyDviZwXlaomNCO89rMKeqp_dau772lQihA",
  authDomain: "circlead-test.firebaseapp.com",
  databaseURL: "https://circlead-test.firebaseio.com",
  projectId: "circlead-test",
  storageBucket: "circlead-test.appspot.com",
  messagingSenderId: "948137755400"
};

const Firebase = fb.initializeApp(config);

/* ENABLE OFFLINE-PERSISTENCE
fb.firestore().enablePersistence()
  .then(function() {
      // Initialize Cloud Firestore through firebase
      Firestore = fb.firestore();
      console.log("Firestore ensbled with persistence.");
  })
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
        console.log("Multiple tabs open, persistence can only be enabled in one tab at a a time.");
      } else if (err.code == 'unimplemented') {
        console.log("The current browser does not support all of the features required to enable persistence");
      }
  });*/

export default Firebase;
