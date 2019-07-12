console.log("Hello World!");


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA9RLj3AF-1UhA4UQFLVuKS47hYunxSQcg",
    authDomain: "employeetime-f3544.firebaseapp.com",
    databaseURL: "https://employeetime-f3544.firebaseio.com",
    projectId: "employeetime-f3544",
    storageBucket: "",
    messagingSenderId: "1062609983696",
    appId: "1:1062609983696:web:9421a5aada42a8e9"
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
