console.log("Hello World!");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCwvZvLtxi8ho8G9kjKpJzAqVcDbtsRH94",
    authDomain: "databasemanagement-aa25d.firebaseapp.com",
    databaseURL: "https://databasemanagement-aa25d.firebaseio.com",
    projectId: "databasemanagement-aa25d",
    storageBucket: "databasemanagement-aa25d.appspot.com",
    messagingSenderId: "15605932344",
    appId: "1:15605932344:web:cf92b5c5eb39e35c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();

  var name = "";
  var email = "";
  var age = 0;
  var comment = "";