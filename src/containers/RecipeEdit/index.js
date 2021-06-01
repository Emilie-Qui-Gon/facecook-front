import { connect } from 'react-redux';

import { changeSelectModifyRecipe,
    changeSelectModifyCategoryRecipe,
    addModifyRecipe,
    addModifyOneRecipe
} from 'src/actions/recipes';

import RecipeEdit from 'src/components/RecipeEdit';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
    id: state.recipes.id,
    title: state.recipes.title,
    description: state.recipes.description,
    status: state.recipes.status,
    ingredients: state.recipes.ingredients,
    instructions: state.recipes.instructions,
    category: state.recipes.category,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (value, name) => {
        dispatch(addModifyOneRecipe(value, name));
    },
    changeSelect: (newSelect) => {
        dispatch(changeSelectModifyRecipe(newSelect));
    },
    changeSelectCategory: (newSelectCategory) => {
        dispatch(changeSelectModifyCategoryRecipe(newSelectCategory));
    },
    recipeSubmit: () => {
        dispatch(addModifyRecipe());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEdit);