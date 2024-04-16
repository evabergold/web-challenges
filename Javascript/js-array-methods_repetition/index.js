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
console.log(onlyTitles);

const titlesWithDuration = recipes.map((recipe) => {
  if (recipe.duration < 1440) {
    return recipe.title + " " + recipe.duration + "min";
  } else {
    return recipe.title + " " + recipe.duration / 24 / 60 + " days";
  }
}); // ['Crepes (60min)', ...]
console.log(titlesWithDuration);

const timePerServing = recipes.map((recipe) => {
  return recipe.duration / recipe.servings;
}); // [20, 10, 432, 12]

console.log(timePerServing);

// EXTRA:

// HINT: use first map() and then Array.prototype.join() with "method chaining" like so:
// myArray.map(...).join(', ');

const allTitlesInOneString = recipes.map((recipe) => recipe.title); 


// 'Crepes, Scrambled Eggs, ...'

// For more information how to join an array,
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#joining_an_array_four_different_ways

/*
 2: `filter` exercises
*/

const recipesThatOnlyTake60minutesOrLess = null;

const allRecipesWithMoreThan2Servings = null;

const allRecipesWithTitlesLongerThan12Characters = null;

export {
  onlyTitles,
  titlesWithDuration,
  timePerServing,
  allTitlesInOneString,
  recipesThatOnlyTake60minutesOrLess,
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
};
