export function findRecipe(recipes = [], searchedSlug = null) {
    const recipe = recipes.find((testedRecipe) => {
      return testedRecipe.slug === searchedSlug;
    });
    return recipe;
  }
  
  export function getTitleByRecipesNumber(recipeNumber) {
    if (recipeNumber === 1) {
      return 'Découvrez notre première recette';
    }
    if (recipeNumber > 1) {
      return 'Découvrez nos recettes';
    }
    return 'Aucune recette pour le moment';
  }
  
  export function getRecipesWithFavorite(state) {
    const { list, favorites } = state.recipes;
  
    return list.map(
      (recipe) => (
        {
          ...recipe,
          favorite: favorites.find((favorite) => favorite.id === recipe.id) !== undefined,
        }
      ),
    );
  }