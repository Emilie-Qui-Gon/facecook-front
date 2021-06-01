// == public recipes

// action type LOAD_RECIPES_FROM_API
export const LOAD_RECIPES_FROM_API = 'LOAD_RECIPES_FROM_API';

// action creator loadRecipeFromApi
export const loadRecipesFromApi = () => ({
  type: LOAD_RECIPES_FROM_API,
});

// action type SAVE_RECIPES
export const SAVE_RECIPES = 'SAVE_RECIPES';

// action creator saveRecipes
export const saveRecipes = (recipes) => ({
  type: SAVE_RECIPES,
  // shorthand property
  recipes,
});

// == private recipes

// action type LOAD_RECIPES_FROM_API_PRIVATE
export const LOAD_RECIPES_FROM_API_PRIVATE = 'LOAD_RECIPES_FROM_API_PRIVATE';

// action creator loadRecipeFromApi
export const loadRecipesFromApiPrivate = () => ({
  type: LOAD_RECIPES_FROM_API_PRIVATE,
});

// action type SAVE_RECIPES_PRIVATE
export const SAVE_RECIPES_PRIVATE = 'SAVE_RECIPES_PRIVATE';

// action creator saveRecipes
export const saveRecipesPrivate = (recipes) => ({
  type: SAVE_RECIPES_PRIVATE,
  // shorthand property
  recipes,
});

// action type ADD_RECIPE
export const ADD_RECIPE = 'ADD_RECIPE';

// action creator ADD_RECIPE
 export const addRecipe = (value, name) => ({
   type: ADD_RECIPE,
   value,
   name,
   
 });

// action type CHANGE_SELECT
export const CHANGE_SELECT_RECIPE = 'CHANGE_SELECT_RECIPE';

// action creator  CHANGE_SELECT_RECIPE
export const changeSelectRecipe = (value) => ({
  type: CHANGE_SELECT_RECIPE,
  newSelect: value,
});

// action type CHANGE_SELECT_CATEGORY_RECIPE
export const CHANGE_SELECT_CATEGORY_RECIPE = 'CHANGE_SELECT_CATEGORY_RECIPE';

// action creator  CHANGE_SELECT_CATEGORY_RECIPE
export const changeSelectCategoryRecipe = (value) => ({
  type: CHANGE_SELECT_CATEGORY_RECIPE,
  newSelectCategory: value,
});


// action type ADD_NEW_RECIPE
export const ADD_NEW_RECIPE = 'ADD_NEW_RECIPE';

// action creator addNewRecipe
export const addNewRecipe = () => ({
  type: ADD_NEW_RECIPE,
});

// action type SAVE_MODIFY_RECIPE
export const SAVE_MODIFY_RECIPE = 'SAVE_MODIFY_RECIPE';

// action creator saveModifyRecipe
export const saveModifyRecipe = (recipe) => ({
  type: SAVE_MODIFY_RECIPE,
  recipe,
});

// action type DELETE_RECIPE
export const DELETE_RECIPE = 'DELETE_RECIPE';

// action creator deleteRecipe
export const deleteRecipe = (id) => ({
  type: DELETE_RECIPE,
  id,
});

// action type DELETE_A_RECIPE
export const DELETE_A_RECIPE = 'DELETE_A_RECIPE';

// action creator deleteARecipe
export const deleteARecipe = (recipe) => ({
  type: DELETE_A_RECIPE,
  recipe,
});

// action type DELETE_RECIPE_ALL
export const DELETE_RECIPE_ALL = 'DELETE_RECIPE_ALL';


// action creator deleteRecipeAll
export const deleteRecipeAll = () => ({
  type: DELETE_RECIPE_ALL,
});

// == MODIFY A RECIPE

// action type CHANGE_SELECT_MODIFY_RECIPE
export const CHANGE_SELECT_MODIFY_RECIPE = 'CHANGE_SELECT_MODIFY_RECIPE';

// action creator  CHANGE_SELECT_MODIFY_RECIPE
export const changeSelectModifyRecipe = (value) => ({
  type: CHANGE_SELECT_MODIFY_RECIPE,
  newSelect: value,
});

// action type CHANGE_SELECT_MODIFY_CATEGORY_RECIPE
export const CHANGE_SELECT_MODIFY_CATEGORY_RECIPE = 'CHANGE_SELECT_MODIFY_CATEGORY_RECIPE';

// action creator  CHANGE_SELECT_CATEGORY_RECIPE
export const changeSelectModifyCategoryRecipe = (value) => ({
  type: CHANGE_SELECT_MODIFY_CATEGORY_RECIPE,
  newSelectCategory: value,
});

// action type ADD_MODIFY_RECIPE
export const ADD_MODIFY_RECIPE = 'ADD_MODIFY_RECIPE';

// action creator addNewRecipe
export const addModifyRecipe = () => ({
  type: ADD_MODIFY_RECIPE,
});

// action type ADD_MODIFY_ONE_RECIPE
export const ADD_MODIFY_ONE_RECIPE = 'ADD_MODIFY_ONE_RECIPE';

// action creator ADD_MODIFY
 export const addModifyOneRecipe = (value, name) => ({
   type: ADD_MODIFY_ONE_RECIPE,
   value,
   name,
 });

 // action type MODIFY_RECIPE_ALL
export const MODIFY_RECIPE_ALL = 'MODIFY_RECIPE_ALL';


// action creator deleteRecipeAll
export const ModifyRecipeAll = () => ({
  type: MODIFY_RECIPE_ALL,
});

// action type MODIFY_RECIPE
export const MODIFY_RECIPE = 'MODIFY_RECIPE';

// action creator deleteRecipe
export const modifyRecipe = (id) => ({
  type: MODIFY_RECIPE,
  id,
});
// action type MODIFY_A_RECIPE
export const MODIFY_A_RECIPE = 'MODIFY_A_RECIPE';

// action creator deleteARecipe
export const modifyARecipe = (recipe) => ({
  type: MODIFY_A_RECIPE,
  recipe,
});
