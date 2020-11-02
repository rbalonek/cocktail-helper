//  GETTING DRINK NAME , IMAGE , RECEPIE, AND INGREDIENTS
function showCocktailName(dataObj) {
  let cocktailName = `<h2 id="drink-name">${dataObj.strDrink}</h2>`;
  document
    .querySelector("#drink-info")
    .insertAdjacentHTML("beforeend", cocktailName);
}
function showRecepie(dataObj) {
  let recepieText = `<h3 id="drink-recepie">${dataObj.strInstructions}</h3>`;
  document
    .querySelector("#drink-info")
    .insertAdjacentHTML("beforeend", recepieText);
}
function showIngredients(dataObj) {
  let ingredientText = `
    <li id="drink-recepie">${dataObj.strIngredient1}, ${dataObj.strMeasure1}</li>
    <li id="drink-recepie">${dataObj.strIngredient2}, ${dataObj.strMeasure2}</li>
    <li id="drink-recepie">${dataObj.strIngredient3}, ${dataObj.strMeasure3}</li>
    <li id="drink-recepie">${dataObj.strIngredient4}, ${dataObj.strMeasure4}</li>`;
  document
    .querySelector("#drink-info")
    .insertAdjacentHTML("beforeend", ingredientText);
}
function showCocktailImg(dataObj) {
  let cocktailImg = `<img class= 'grow' id="cocktail" src="${dataObj.strDrinkThumb}" onclick="alertDrink()" alt="drink">`;
  document
    .querySelector("#cocktail-img")
    .insertAdjacentHTML("beforeend", cocktailImg);
}

////// REMOVING DRINK INFO FOR NEW SEARCH //////
function removeDrinkImg() {
  const appendElement = document.querySelector("#drink-info");
  while (appendElement.lastChild) {
    appendElement.removeChild(appendElement.lastChild);
  }
}
function removeDrinkInfo() {
  const appendElement = document.querySelector("#cocktail-img");
  while (appendElement.lastChild) {
    appendElement.removeChild(appendElement.lastChild);
  }
}
////// SEARCH FOR DRINK BY LIQUOR TYPE //////
const submit = document.querySelector("#liquor-form");
submit.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = document.querySelector("#liquor-search").value;
  liquorSearch(inputValue);
  document.querySelector("#liquor-search").value = "";
  document.querySelector("#liquor-search").placeholder = "New Search";
  removeDrinkImg();
  removeDrinkInfo();
});
///// SEARCH FOR DRINK FROM SPEED RACK IN HEADER /////
function chooseGin() {
  removeDrinkImg();
  removeDrinkInfo();
  liquorSearch("gin");
}
function chooseVodka() {
  removeDrinkImg();
  removeDrinkInfo();
  liquorSearch("Vodka");
}
function chooseTequila() {
  removeDrinkImg();
  removeDrinkInfo();
  liquorSearch("Tequila");
}
function chooseRum() {
  removeDrinkImg();
  removeDrinkInfo();
  liquorSearch("Rum");
}
function alertDrink() {
  if (confirm("Would you like to order this drink?")) {
    alert("Coming right up! Your drink will be added to your bill.");
  } else {
    alert("Ok, let us know if you'd like a drink!");
  }
}
///// 1ST API TO GET ID# FROM LIQUOR SEARCH /////
async function liquorSearch(drink) {
  const searchURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`;
  for (let i = 0; i < 5; i++)
    try {
      let response = await axios.get(searchURL);
      let data = response.data.drinks[Math.floor(Math.random() * 30)];
      searchFromId(data.idDrink);
    } catch (error) {
      console.log(`bobs error: ${error}`);
    }
}
////// 2ND API TO USE ID# TO GRAB REST OF RESULTS ////
async function searchFromId(id) {
  const searchURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  try {
    let response = await axios.get(searchURL);
    let data = response.data.drinks[0];
    showCocktailName(data);
    showRecepie(data);
    showIngredients(data);
    showCocktailImg(data);
  } catch (error) {
    console.log(`bob err 2nd api: ${error}`);
  }
}
