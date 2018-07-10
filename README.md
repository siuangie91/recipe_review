Recipe Review -- Favorite and Rate Recipes
=============================================

## Demo ##

__Live link__: http://projects.angiesiudevworks.com/recipereview/

__Dev mode__:
Run `npm install` and then `npm start`. Additionally, if you'd like to see the Jest/Enzyme tests, run `npm run test`.

_All images are from my personal Instagram._

## Implementation Decisions: ##
_This is a front-end-only implementation._

### Interface ###
__Login__
* Email field validates on keyup. 
* A password is considered valid if it is at least 8 characters long.
* Login button is enabled only when both email and password are considered valid.

__Recipe Review__
* Click on any of the recipes (`<RecipeThumb />`) to open it and display more detail (`<OpenedRecipe />`).
* Inside `<OpenedRecipe />`, click on the heart icon to favorite it or the stars to update its rating. The icons will be updated accordingly in the `<RecipeThumb />` as well.
    * Click the close icon or the blocker (the `<div>` used to block out the `<RecipeThumb />`s underneath it) to close the `<OpenedRecipe />`.

__Favoriting__
* A boolean property called `favedBool` was added using a reducer to enable easy toggling of true or false for favoriting. (See `/src/reducers/recipes_reducer.js`.)

__Rating__
* Star icons from [Font Awesome](https://fontawesome.com/) were used for displaying and updating the rating. Because it would be more complicated to allow the user to select only a fraction of an icon, each recipe's rating is rounded up using `Math.ceil()`. This allowed for rating updates based on the index/key of the star icon.

