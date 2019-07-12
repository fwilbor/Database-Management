console.log("Hello World!");

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