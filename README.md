# Project Overview

##  Make me a DRINK!


## Project Description

This application will take the users input of a liquor type (Vodka, Gin, Tequila ect...), and return a list of possible 
cocktails they can make, along with a step by step recepie, and picture of a finished professionally made cocktail.

## API and Data Sample

https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17840

```
"drinks": [
        {
            "idDrink": "17840",
            "strDrink": "Affinity",
            "strGlass": "Cocktail glass",
            "strInstructions": "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. 		Strain into a cocktail glass.",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wzdtnn1582477684.jpg",
            "strIngredient1": "Scotch",
            "strIngredient2": "Sweet Vermouth",
            "strIngredient3": "Dry Vermouth",
            "strIngredient4": "Orange bitters",
	    }
```

## Wireframes

[wireFrame Link](https://wireframe.cc/JDtQ9f)


#### MVP 

1. Search using spirit name 
2. view ingredients needed for drink 
3. view drink recipe / preparation 
4. view ingredients of drink. 
5. see an img of completed drink

#### PostMVP  

1. fun css that animates images
2. Design html/css to make it look like a bar
3. Make an interactive ’speed rack’ image so you can just click on img of popular spirits.
4. 'email this recipe' feature (as a recepie card w/ image).

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Mon July 13| Build basic Structure of HTML, CSS and start implementation of API | Complete
|Tues July 14| Continue API implementation and test results  | Complete
|Wed July 15| Make sure CSS is complient with different sizes  | Complete
|Thurs July 16| Clean up, add additional features if time allows | Complete
|Fri July 17| final clean up / present | Incomplete

## Priority Matrix

[Priority Matrix](https://drive.google.com/file/d/1I8h4LY3Nndz2afWAAJcvyN-wVZEoDX9R/view?usp=sharing)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Building out basic HTML / CSS frame | H | 3hrs| 2hrs | 2hrs |
| Apllying basic flex-box to different sized screens | H | 2hrs| 3hrs | 3hrs |
| Forming basic Javascript API implementation | H | 3hrs| 3hrs | 3hrs |
| Apllying and testing API functionality | H | 6hrs| 5hrs | 5hrs |
| Cleaning up CSS / flex-box to fit output results | M | 2hrs| 4hrs | 4hrs |
| Finish Cleaning up CSS / flex-box to fit output results | M | 3hrs| 4hrs | 4hrs |
| Add extra features to CSS (background Image and basic feel of page) | M | 5hrs| 5hrs | 5hrs |
| Cleaning up CSS / flex-box to fit output results | M | 3hrs| 3hrs | 3hrs |
| Add in any additional features from post MVP list | M | 5hrs| 6hrs | 6hrs |
| Clean up / catch up / finish anything needed for presentation | M | 4hrs| 3hrs | 3hrs |
| Total | H | 36hrs| 38hrs | 38hrs |

## Code Snippet

I noticed that the only way to get all the data I wanted was to search by liquorID, but I didn't want the user to have to use a drop down menu, so I did one API for the user to search by Liquor name and had that call the other API to get the data I wanted. I was happy I was able to put that together without any help. 

```
async function liquorSearch(drink) {
  const searchURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`;
  for (let i = 0; i < 5; i++)
  try {
    let response = await axios.get(searchURL);
    let data = response.data.drinks[Math.floor((Math.random() * 30))]
    searchFromId(data.idDrink)
  } catch (error) {
  console.log(`bobs error: ${error}`)
  }
}
async function searchFromId(id) {
  const searchURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  try {
    let response = await axios.get(searchURL);
    let data = response.data.drinks[0]
    showCocktailName(data)
    showRecepie(data)
    showIngredients(data)
    showCocktailImg(data)
  } catch (error) {
  console.log(`bob err 2nd api: ${error}`)
  }
}
```

## Change Log
 I first put together the HTML, CSS and connected it to the API and search. For all the information I wanted, I put the outputs of drink Name, drink Recepie, drink Ingredients, and drink Image. 
 
 My original plan was to have an individual section in a container for each set of outputs:
    DRINK NAME
 RECEPIE   IMAGE
   INGREDIENTS
 
 This would help so I could move them around as the screen changed sizes. 
 
 Unfortunately, the API was giving back information that was sometimes out of order with eachother, and the array order varied for certain drinks. This made me go back and place all the info (drink name, recepie, and ingredients) in one section, and have the image floating next to them. It just looked cleaner this way. 
 
 After that, I added more CSS elements to the text and made the pictures for the drinks and social media links pop when hovered over. 
 
 Finally, I tried to simplify all my code while breaking almost everything at some point, going on a walk, coming back to my computer, and making sense of everything. 
