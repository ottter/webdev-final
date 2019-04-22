var ingredients = {
    "choc_chip": [
        "8 tbsp butter",
        "1/2 cup white sugar",
        "1/4 cup (packed) light brown sugar",
        "1 tsp vanilla",
        "1 egg",
        "1 1/2 cup flour",
        "1/2 tsp baking soda",
        "1/4 tsp salt",
        "3/4 cup chocolate chips"
    ],
    "key_lime": [
        "9\" graham cracker crust",
        "24 fl oz sweet condensed milk",
        "1/2 cup sour cream",
        "3/4 cup key lime juice",
        "optional: 1 lime (zested)",
        "optional: whipped cream"
    ]
};

$(document).ready(function(){
    var ingredientTemplate = $(".ingredient-template").html();

    var compiledIngredientTemplate = Handlebars.compile(ingredientTemplate);

    $(".ingredient-list-container").html(compiledIngredientTemplate(ingredients));
});