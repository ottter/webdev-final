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
    ],
    "cheesecake": [
        "1 cup graham cracker crumbs",
        "2 tbsp sugar",
        "3 tbsp melted butter",
        "3 packs cream cheese",
        "1 cup sugar",
        "3 tbsp flour",
        "3/4 cup eggnog",
        "2 eggs",
        "2 tbsp rum",
        "1 pinch nutmeg",
        "springform pan (9\")"
    ],
    "apple_pie": [
        "1/4 cup butter",
        "1 cup brown sugar",
        "5 apples (peeled and sliced)",
        "3 pie crusts",
        "1 cup sugar",
        "2 tsp cinnamon",
        "1/4 cup sugar",
        "1 tbsp butter (cut in small cubes)"
    ],
    "pancakes": [
        "1 cup flour",
        "1 tbsp sugar",
        "2 tsp baking powder",
        "1/2 tsp salt",
        "1 large egg",
        "3/4 cup milk",
        "1/4 cup butter (melted)"
    ],
    "crepes": [
        "1 cup flour",
        "1/2 cup water",
        "2 eggs",
        "1/4 tsp salt",
        "1/2 cup milk",
        "2 tbsp butter (melted)"
    ],
    "french_toast": [
        "6 thick slices of bread",
        "1/4 tsp nutmeg",
        "1 tsp vanilla extract",
        "2 eggs",
        "2/3 cup milk",
        "1/4 tsp cinnamon",
        "pinch of salt"
    ],
    "ricotta": [
        "3 1/2 cups all-purpose flour",
        "2 tsp baking soda",
        "3/4 tsp salt",
        "1 cup unsalted butter (softened)",
        "1 3/4 cups granulated sugar",
        "1 tsp lemon zest",
        "15 oz ricotta",
        "1 tbsp vanilla extract",
        "2 large eggs",
        "1 tbsp butter (melted)",
        "3 3/4 cups powdered sugar",
        "2 tbsp fresh lemon juice",
        "1 tsp vanilla extract",
        "4-6 Tbsp milk"
    ],
    "chick_potpie": [
        "1 1/2 lb chicken breast",
        "1 cup pearl onions",
        "1 cup carrots & peas",
        "2 tbsp flour",
        "2 cup chicken stock",
        "1 cup heavy cream",
        "1 egg",
        "3 garlic cloves (minced)",
        "seasonings: salt pepper sage oregano paprika"
    ],
    "tofu_ss": [
        "1 lb tofu",
        "1 bell pepper (green)",
        "2-3 chili peppers",
        "1 small onion",
        "2 tbsp soy sauce",
        "1/4 cup sweet and sour sauce",
        "starch option of choice (I used brown rice!)"
    ],
    "tofu_pep": [
        "1 lb tofu",
        "1 small onion",
        "8 oz broccoli",
        "2 tbsp soy sauce",
        "salt & pepper",
        "starch option of choice (I used udon!)"
    ]
};

$(document).ready(function(){
    var ingredientTemplate = $(".ingredient-template").html();

    var compiledIngredientTemplate = Handlebars.compile(ingredientTemplate);

    $(".ingredient-list-container").html(compiledIngredientTemplate(ingredients));
});