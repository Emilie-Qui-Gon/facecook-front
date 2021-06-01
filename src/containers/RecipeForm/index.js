import { connect } from 'react-redux';

import { addRecipe, 
    changeSelectRecipe, 
    changeSelectCategoryRecipe, 
    addNewRecipe } from 'src/actions/recipes';

import RecipeForm from 'src/components/RecipeForm';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, stringf
const mapStateToProps = (state, ownProps) => ({
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (value, name) => {
        dispatch(addRecipe(value, name));
    },
    changeSelect: (newSelect) => {
        dispatch(changeSelectRecipe(newSelect));
    },
    changeSelectCategory: (newSelectCategory) => {
        dispatch(changeSelectCategoryRecipe(newSelectCategory));
    },
    recipeSubmit: () => {
        dispatch(addNewRecipe());
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
