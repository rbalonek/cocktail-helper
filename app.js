async function liquorSearch(drink) {
  const searchURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`;
  for (let i = 0; i < 5; i++)
  try {
    let response = await axios.get(searchURL);
    let data = response.data.drinks[Math.floor((Math.random() * 30) + 1)]
    searchFromId(data.idDrink)
    // console.log(drinks[21])
    // console.log(response.data)
  } catch (error) {
  console.log(`bobs error: ${error}`)
  }
  }
liquorSearch()

//////////////////////////////Pulls Up Name, Image, and ID
function showCocktailName(dataObj) {
  let cocktailName = `
  <h2 id="drink-name">${dataObj.strDrink}</h2> 
  `
  document.querySelector('#liquor-data').insertAdjacentHTML('beforeend', cocktailName)
}
function showCocktailImg(dataObj) {
  let cocktailImg = `<img class= 'grow' id="cocktail" src="${dataObj.strDrinkThumb}" alt="drink">`
  document.querySelector('#recepie-data').insertAdjacentHTML('beforeend', cocktailImg)
}


//////////////////////////////SEARCH Button
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
  removeLiquor()
  removeLeftSidebar()
  removeRightSidebar()
})

//////////////////////////////Removes previous SEARCH
function removeLiquor() {
  const appendElement = document.querySelector('#liquor-data')
  while (appendElement.lastChild) {
    appendElement.removeChild(appendElement.lastChild)
  }
}
function removeLeftSidebar() {
  const appendElement = document.querySelector('#recepie')
  while (appendElement.lastChild) {
    appendElement.removeChild(appendElement.lastChild)
  }
}
function removeRightSidebar() {
  const appendElement = document.querySelector('#recepie-data')
  while (appendElement.lastChild) {
    appendElement.removeChild(appendElement.lastChild)
  }
}

///// Get dataObj.strDrink.idDrink and us it to go through another API to get 

//// FROM https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch

///USE ID ${} TO PULL FROM https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17840

///Get recepie, 


// let drinkId = ${dataObj.idDrink}

async function searchFromId(id) {
  const searchURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  try {
    let response = await axios.get(searchURL);
    let data = response.data.drinks[0]
    // console.log(response.data)
    showRecepie(data)
    showIngredients(data)
    showCocktailName(data)
    showCocktailImg(data)
    // console.log(data)
  } catch (error) {
  console.log(`bob err 2nd api: ${error}`)
  }
}

function showRecepie(dataObj) {
  let recepieText = `<h3 id="drink-recepie">${dataObj.strInstructions}</h3>`
  document.querySelector('#recepie').insertAdjacentHTML('beforeend', recepieText)
}

////////// SEE IF YOU CAN DO SOMETHING LIKE ${dataObj.strMeasure[i]}
function showIngredients(dataObj) {
    let ingredientText = `
  <li id="drink-recepie">${dataObj.strIngredient1}, ${dataObj.strMeasure1} </li>
  <li id="drink-recepie">${dataObj.strIngredient2}, ${dataObj.strMeasure2}</li>
  <li id="drink-recepie">${dataObj.strIngredient3}, ${dataObj.strMeasure3}</li>
  <li id="drink-recepie">${dataObj.strIngredient4}, ${dataObj.strMeasure4}</li>
  `
  document.querySelector('#recepie').insertAdjacentHTML('beforeend', ingredientText)
  // console.log(dataObj[21])
}


// function showIngredients(dataObj) {
//   // let j = 21;
//   // while (j !== 'null') { j++ }
//   // let k = 36;
//   // while (k !== 'null') {k++}
//     let ingredientText = `
//   <li id="drink-recepie">${dataObj.strIngredient1}, ${dataObj.strMeasure1} </li>
//   <li id="drink-recepie">${dataObj.strIngredient2}, ${dataObj.strMeasure2}</li>
//   <li id="drink-recepie">${dataObj.strIngredient3}, ${dataObj.strMeasure3}</li>
//   <li id="drink-recepie">${dataObj.strIngredient4}, ${dataObj.strMeasure4}</li>
//   `
//   document.querySelector('#recepie').insertAdjacentHTML('beforeend', ingredientText)
//   // console.log(dataObj[21])
// }