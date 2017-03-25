// A $( document ).ready() block.
$(document).ready(function() {


    $("button").click(function(event) {

        event.preventDefault();

        var userInput = $(".form-control").val().trim();
        //alert(userInput);

        var options = $(this).attr("data-option");
        if (options === "dine-out") {
            getYelp(userInput);
        } else if (options === "dine-in") {
            getRecipe(userInput);
        } else {
            console.log("ERROR!");
        }
        $("#result").removeClass("hide");
    });
});
