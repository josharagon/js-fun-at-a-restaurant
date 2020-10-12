
function createRestaurant(restName){


    return {name: restName, menus: {breakfast:[], lunch:[], dinner:[]}}
};

function addMenuItem(restName, newFood) {
if(newFood.type === "lunch", "breakfast", "dinner" && restName.menus[newFood.type].includes(newFood) !== true) {
  restName.menus[newFood.type].push(newFood);
  }
};

function removeMenuItem(restName, newFoodName,newFoodType){

  // if(newFoodName!== restName.menus.lunch){
  //   return (`Sorry, we don't sell ${newFoodName}, try adding a new recipe!`)
  // };

// if(newFoodType === "lunch", "breakfast", "dinner" && restName.menus[newFoodType].includes(newFoodName) === true ){
// restName.menus[newFoodType].splice(newFoodName, 1)
// return `No one is eating our ${newFoodName} - it has been removed from the ${newFoodType} menu!`
// }else{
//   return (`Sorry, we don't sell ${newFoodName}, try adding a new recipe!`)
// }

if(newFoodType === "breakfast" && restName.menus.breakfast[0].name === newFoodName ){
restName.menus.breakfast.splice(0, 1)
return `No one is eating our ${newFoodName} - it has been removed from the ${newFoodType} menu!`
}
if(newFoodType === "dinner" && restName.menus.dinner[0].name === newFoodName ){
restName.menus.dinner.splice(0, 1)
return `No one is eating our ${newFoodName} - it has been removed from the ${newFoodType} menu!`
}
// if(newFoodType === "lunch" && restName.menus.lunch[0].name === newFoodName ){
// restName.menus.lunch.splice(0, 1)
// return `No one is eating our ${newFoodName} - it has been removed from the ${newFoodType} menu!`
// }
  return (`Sorry, we don't sell ${newFoodName}, try adding a new recipe!`)
}



module.exports = {
   createRestaurant,
   addMenuItem,
  removeMenuItem
}
