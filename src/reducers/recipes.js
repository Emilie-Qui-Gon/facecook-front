import { 
  LOAD_RECIPES_FROM_API, 
  SAVE_RECIPES, 
  LOAD_RECIPES_FROM_API_PRIVATE, 
  SAVE_RECIPES_PRIVATE,
  ADD_RECIPE,
  CHANGE_SELECT_RECIPE,
  CHANGE_SELECT_CATEGORY_RECIPE,
  SAVE_MODIFY_RECIPE,
  DELETE_A_RECIPE,
  DELETE_RECIPE,
  CHANGE_SELECT_MODIFY_RECIPE,
  CHANGE_SELECT_MODIFY_CATEGORY_RECIPE,
  ADD_MODIFY_ONE_RECIPE,
  MODIFY_RECIPE,
  MODIFY_A_RECIPE
} 
from 'src/actions/recipes';

export const initialState = {
    list: [],
    id: '',
    loadPublic: false,
    loadPrivate: false,
    avatarRecipe: '',
    title: '',
    description: '',
    status: '',
    ingredients: '',
    instructions: '',
    category: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        list: action.recipes,
      };
    case LOAD_RECIPES_FROM_API:
      return {
        ...state,
        loadPublic: true,
      };
    case SAVE_RECIPES_PRIVATE:
      return {
        ...state,
        list: action.recipes,
      };
    case LOAD_RECIPES_FROM_API_PRIVATE:
      return {
        ...state,
        loadPrivate: true,
      };
      case ADD_RECIPE:
       return {
         ...state,
          [action.name]: action.value,
      };
    case CHANGE_SELECT_RECIPE:
      return {
        ...state,
        status: action.newSelect,
      };
      case CHANGE_SELECT_CATEGORY_RECIPE:
      return {
        ...state,
        category: action.newSelectCategory,
      };
      case SAVE_MODIFY_RECIPE:
      return {
        ...state,
        title: action.recipe.title,
        description: action.recipe.description,
        status: action.recipe.status,
        ingredients: action.recipe.ingredients,
        instructions: action.recipe.instructions,
        category: action.recipe.category,
        id: action.recipe.id,
      };
      case DELETE_A_RECIPE:
      return {
        ...state,
        title: action.recipe.title,
        description: action.recipe.description,
        status: action.recipe.status,
        ingredients: action.recipe.ingredients,
        instructions: action.recipe.instructions,
        category: action.recipe.category,
      };
      case DELETE_RECIPE:
      return {
        ...state,
        id: action.id,
      };
      case CHANGE_SELECT_MODIFY_RECIPE:
      return {
        ...state,
        status: action.newSelect,
      };
      case CHANGE_SELECT_MODIFY_CATEGORY_RECIPE:
        return {
          ...state,
          category: action.newSelectCategory,
        };
      case ADD_MODIFY_ONE_RECIPE:
        return {
          ...state,
            [action.name]: action.value,
        };
      case MODIFY_RECIPE:
        return {
          ...state,
          id: action.id,
        };
      case MODIFY_A_RECIPE:
        return {
          ...state,
          title: action.recipe.title,
          description: action.recipe.description,
          status: action.recipe.status,
          ingredients: action.recipe.ingredients,
          instructions: action.recipe.instructions,
          category: action.recipe.category,
        };
    default:
      return state;
  }
};

export default reducer;