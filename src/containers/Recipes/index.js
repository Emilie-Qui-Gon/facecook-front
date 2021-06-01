import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Recipes from 'src/components/Recipes';

import { loadRecipesFromApi } from 'src/actions/recipes';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes.list,
  pseudonym: state.user.pseudonym,
  id: state.recipes.list.id,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadRecipes: () => {
    dispatch(loadRecipesFromApi());
  }
});


const container = connect(mapStateToProps, mapDispatchToProps)(Recipes)

const containerWithRouter = withRouter(container);

export default containerWithRouter;