
document.addEventListener('DOMContentLoaded', () => {
    const randomRecipeButton = document.querySelector('.random-recipe-button');
    const recipes = [
        'chinese-noodle.html',
        'fish-curry.html',
        'italian-salad.html',
        'sushi.html',
        'Broth.html',
        'coconut-curry.html',
        'fish-treat.html',
        'greek-chicken.html',
        'greek-fish.html',
        'greek-salad.html',
        'Gyoza.html',
        'meat-chips.html',
        'pizza.html',
        'ramen.html',
        'ravioli.html',
        'rice.html',
        'spaghetti.html',
        'special-fish.html',
        'special-noodles.html',
        'vegetable-curry.html'
        // Add more recipe pages as needed
    ];

    randomRecipeButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * recipes.length);
        const randomRecipe = recipes[randomIndex];
        window.location.href = randomRecipe;
    });
});