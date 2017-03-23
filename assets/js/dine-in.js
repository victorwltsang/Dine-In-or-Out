function getRecipe(ingredients) {

    // These are not the API Keys you're looking for
    var APIkey = "2394e022160abd9e7a8ac3318b5e584e";

    // Ingredients are to be comma separated


    // Sorting results parameter;  r by rating and t for trending.  Using rating for default.
    var sort = "r";

    var queryURL = "https://food2fork.com/api/search?key=" + APIkey + "&q=" + ingredients + "&sort=" + sort;
    // console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(recipeResults) {
        console.log(recipeResults)
        createHTML(recipeResults);

    });

    function createHTML(recipeResults) {

        var rawTemplate = document.getElementById("handlebar-template").innerHTML;

        var compiledTemplate = Handlebars.compile(rawTemplate);

        var generatedHTML = compiledTemplate(JSON.parse(recipeResults));

        var recipeContainer = document.getElementById("result");
        recipeContainer.innerHTML = generatedHTML;

    };

}
