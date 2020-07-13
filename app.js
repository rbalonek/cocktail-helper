async function liquorSearch(drink) {
  const searchURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`;
  try {
    let response = await axios.get(searchURL);
    let data = response.data.drinks[0]
    removeLiquor()
    // liquorResults(data.data.Search)
    // console.log(liquorList.strDrink)
    showCocktailName(data)
    // console.log(response.data)
  } catch (error) {
  console.log(`bobs error: ${error}`)
  }
}
liquorSearch()


function showCocktailName(dataObj) {
  let cocktailName = `
  <h2 id="drink-name">${dataObj.strDrink}</h2> 
  <p id="drink-name">${dataObj.idDrink}</p>
  <img id="cocktail" src="${dataObj.strDrinkThumb}" alt="drink">
  `
  document.querySelector('#liquor-data').insertAdjacentHTML('beforeend', cocktailName)
}

// function showCocktailImg(dataObj) {
//   let cocktailImg = `<img id="cocktail" src="${dataObj.strDrink.strDrinkThumb}" alt="drink">`
//   document.querySelector('#result-img').insertAdjacentElement("beforeend", cocktailImg)
// }
//<p id="drink-name">${dataObj.idDrink}</p>

// function showRecepie(dataObj) {
//   let recepieText = `<h2 id="drink-name">${dataObj.strDrink}</h2>`
//   document.querySelector('#cocktail-recepie').insertAdjacentElement("beforeend", recepieText)
// }

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
})

function removeLiquor() {
  const appendElement = document.querySelector('#liquor-data')
  while (appendElement.lastChild) {
    appendElement.removeChild(appendElement.lastChild)
  }
}


///// Get dataObj.strDrink.idDrink and us it to go through another API to get 

//// FROM https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch

///USE ID ${} TO PULL FROM https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17840

///Get recepie, 