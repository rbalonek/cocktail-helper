const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka`

const liquorSearch = async () => {
  try {
    const searchURL = BASE_URL;
    const response = await axios.get(searchURL);
    const liquorList = Object.values(response.data.drinks)
    // liquorResults(data.data.Search)
    // console.log(liquorList.strDrink)
    function nameLiquor() {
      for (i = 0; i < liquorList.length; i++){
        // ///drink Name
        console.log(liquorList[i].strDrink)
        // ///drink Thumbnail
        // console.log(liquorList[i].strDrinkThumb) 
        // ///drink ID (for recepie)
        // console.log(liquorList[i].idDrink)
            }
    }
    nameLiquor()
  } catch (error) {
  console.log(`bobs error: ${error}`)
  }
}
liquorSearch()