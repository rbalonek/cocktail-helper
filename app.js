//  GETTING DRINK NAME , IMAGE , RECEPIE, AND INGREDIENTS
function showCocktailName(dataObj) {
  let cocktailName = `
  <h2 id="drink-name">${dataObj.strDrink}</h2> 
  `
  document.querySelector('#recepie').insertAdjacentHTML('beforeend', cocktailName)
}
// #RECEPIE => drink-info
// #recepie-data => cocktail-img

function showCocktailImg(dataObj) {
  let cocktailImg = `<img class= 'grow' id="cocktail" src="${dataObj.strDrinkThumb}" alt="drink">`
  document.querySelector('#recepie-data').insertAdjacentHTML('beforeend', cocktailImg)
}

function showRecepie(dataObj) {
  let recepieText = `<h3 id="drink-recepie">${dataObj.strInstructions}</h3>`
  document.querySelector('#recepie').insertAdjacentHTML('beforeend', recepieText)
}

function showIngredients(dataObj) {
  let ingredientText = `
<li id="drink-recepie">${dataObj.strIngredient1}, ${dataObj.strMeasure1} </li>
<li id="drink-recepie">${dataObj.strIngredient2}, ${dataObj.strMeasure2}</li>
<li id="drink-recepie">${dataObj.strIngredient3}, ${dataObj.strMeasure3}</li>
<li id="drink-recepie">${dataObj.strIngredient4}, ${dataObj.strMeasure4}</li>
`
document.querySelector('#recepie').insertAdjacentHTML('beforeend', ingredientText)
}


/// REMOVING DRINK INFO FOR NEW SEARCH
function removeDrinkImg() {
  const appendElement = document.querySelector('#recepie')
  while (appendElement.lastChild) {
    appendElement.removeChild(appendElement.lastChild)
  }
}

function removeDrinkInfo() {
  const appendElement = document.querySelector('#recepie-data')
  while (appendElement.lastChild) {
    appendElement.removeChild(appendElement.lastChild)
  }
}

/// SEARCH FOR DRINK BY LIQUOR TYPE
const submit = document.querySelector('#liquor-form')
submit.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#liquor-search').value
  liquorSearch(inputValue)
  //reset the search bar when used
  document.querySelector('#liquor-search').value = ''
  //change the placeholder or the search bar suggestion line
  document.querySelector('#liquor-search').placeholder = 'Liquor Type'
  //to make sure it's coming up with the right thing... It does!
  // console.log(inputValue)
  removeDrinkImg()
  removeDrinkInfo()
})

// /FIRGURE OUT DIFF BETWEEN liquor-form / liquor-search

///// 1ST API TO GET ID# FROM LIQUOR SEARCH
async function liquorSearch(drink) {
  const searchURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`;
  for (let i = 0; i < 5; i++)
  try {
    let response = await axios.get(searchURL);
    let data = response.data.drinks[Math.floor((Math.random() * 30))]
    searchFromId(data.idDrink)
    // console.log(data)
    // console.log(response.data)
  } catch (error) {
  console.log(`bobs error: ${error}`)
  }
}
  
//2ND API TO USE ID# TO GRAB REST OF RESULTS
async function searchFromId(id) {
  const searchURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  try {
    let response = await axios.get(searchURL);
    let data = response.data.drinks[0]
    // console.log(response.data)
    showCocktailName(data)
    showRecepie(data)
    showIngredients(data)
    showCocktailImg(data)
    // console.log(data)
  } catch (error) {
  console.log(`bob err 2nd api: ${error}`)
  }
}