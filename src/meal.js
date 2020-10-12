function nameMenuItem(foodItem) {
  return ("Delicious " + foodItem)
};
function createMenuItem(name, initialPrice, type){
  return {name: name , price: initialPrice, type: type}
};

function addIngredients(foodIngred,ingredients){
  if(ingredients.includes(foodIngred) === true){
    return ingredients
  }
  return ingredients.push(foodIngred);
};

function formatPrice(initialPrice){
  console.log(initialPrice);
  return "$" + initialPrice;
};

function decreasePrice(initialPrice){
 var reducedNum = (initialPrice / 10);

  return (initialPrice-reducedNum);
};

function createRecipe(title, ingredients, type){
  return {title: title, ingredients: ingredients, type: type}
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
