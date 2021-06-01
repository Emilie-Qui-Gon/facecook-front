import { connect } from 'react-redux';

import { loadRecipesFromApiPrivate } from 'src/actions/recipes';

import MyRecipes from 'src/components/MyRecipes';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
    recipe: state.recipes.list,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
    loadRecipesPrivate: () => {
        dispatch(loadRecipesFromApiPrivate());
      },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyRecipes);