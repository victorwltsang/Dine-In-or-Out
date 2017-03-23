// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    $("button").click(function() {

    	var userInput = $(".form-control").val().trim();
    		alert(userInput);
    });
});
