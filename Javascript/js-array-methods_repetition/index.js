const recipes = [
  {
    title: "Crepes",
    duration: 60,
    ingredients: ["butter", "flour", "eggs", "milk", "salt"],
    servings: 3,
  },
  {
    title: "Scrambled Eggs",
    duration: 20,
    ingredients: ["eggs", "milk", "salt"],
    servings: 2,
  },
  {
    title: "Vegan Salmon",
    duration: 60 * 24 * 3, // 3 days
    ingredients: [
      "carrots",
      "olive oil",
      "nori sheets",
      "liquid smoke",
      "soy sauce",
    ],
    servings: 10,
  },
  {
    title: "Carrot Cake",
    duration: 120,
    ingredients: ["carrots", "flour", "eggs", "salt", "milk", "sugar"],
    servings: 10,
  },
];

/*
 1: `map` exercises
*/

const onlyTitles = recipes.map((recipe) => recipe.title); // ['Crepes', ...]
console.log("Only Titles: " + onlyTitles);

const titlesWithDuration = recipes.map((recipe) => {
  if (recipe.duration < 1440) {
    return recipe.title + " " + recipe.duration + "min";
  } else {
    return recipe.title + " " + recipe.duration / 24 / 60 + " days";
  }
}); // ['Crepes (60min)', ...]
console.log("Titles with duration: " + titlesWithDuration);

const timePerServing = recipes.map((recipe) => {
  return recipe.duration / recipe.servings;
}); // [20, 10, 432, 12]

console.log("Time per Serving: " + timePerServing);

// EXTRA:

// HINT: use first map() and then Array.prototype.join() with "method chaining" like so:
// myArray.map(...).join(', ');

const allTitlesInOneString = recipes.map((recipe) => recipe.title).join(", ");
console.log("All titles in one string : '" + allTitlesInOneString + "'");

// 'Crepes, Scrambled Eggs, ...'

// For more information how to join an array,
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#joining_an_array_four_different_ways

/*
 2: `filter` exercises
*/

const recipesThatOnlyTake60minutesOrLess = recipes.filter((recipe) => {
  return recipe.duration <= 60;
});
console.log("Recipes that only take 60 minutes or less:")
console.log(recipesThatOnlyTake60minutesOrLess);

const allRecipesWithMoreThan2Servings = recipes.filter((recipe) => {
  return recipe.servings >= 3;
});
console.log("All recipes with more than 2 servings:")
console.log(allRecipesWithMoreThan2Servings);

const allRecipesWithTitlesLongerThan12Characters = recipes.filter((recipe)=> {

  return recipe.title.length > 12;

});

console.log("All recipes with titles longer than 2 characters: ")
console.log (allRecipesWithTitlesLongerThan12Characters);

export {
  onlyTitles,
  titlesWithDuration,
  timePerServing,
  allTitlesInOneString,
  recipesThatOnlyTake60minutesOrLess,
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
};
