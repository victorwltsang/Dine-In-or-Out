// A $( document ).ready() block.
$(document).ready(function() {
    console.log("ready!");

    $("button").click(function() {

    	var userInput = $(".form-control").val().trim();
    		//alert(userInput);

    	var options = $(this).attr("data-option");
			if (options === "dine-in") {
				getYelp(userInput);
			}

		else if (options === "dine-out") {
				getRecipe(userInput);
			}

		else {
			console.log("ERROR!");
			}
});
