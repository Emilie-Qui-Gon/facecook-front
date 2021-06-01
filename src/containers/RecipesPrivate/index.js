import { connect } from 'react-redux';
import RecipesPrivate from 'src/components/MyRecipes/RecipesPrivate';

import { loadRecipesFromApiPrivate } from 'src/actions/recipes';
import { withRouter } from 'react-router-dom';

import { findRecipe } from 'src/selectors/recipes';

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


const container = connect(mapStateToProps, mapDispatchToProps)(RecipesPrivate)

const containerWithRouter = withRouter(container);

export default containerWithRouter;