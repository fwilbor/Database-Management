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


  $(".btn").on("click", function(event){
    event.preventDefault();

    var name= $("#exampleName").val().trim();
    var role= $("#exampleRole").val().trim();
    var date= $("#exampleDate").val().trim();
    var rate= $("#exampleRate").val().trim();

    database.ref().set({
        name:name,
        role:role,
        date:date,
        rate:rate
    });
});
