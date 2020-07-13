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
  let liquorInfo = `<h2 id="drink-name">${dataObj.strDrink}</h2>`
  document.querySelector('#liquor-data').insertAdjacentHTML('beforeend', liquorInfo)
}

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
