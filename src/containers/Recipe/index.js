import { connect } from 'react-redux';
import { deleteRecipe, deleteRecipeAll, modifyRecipe, ModifyRecipeAll } from 'src/actions/recipes';

import Recipe from 'src/components/Recipes/Recipe';



// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  recipes: state.recipes.list,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  handeDeleteId: (id) => {
        dispatch(deleteRecipe(id))  
        setTimeout(() => {
              dispatch(deleteRecipeAll())
      }, 500)
    },
    handleModifyId: (id) => {
      dispatch(modifyRecipe(id))  
      // setTimeout(() => {
      //       dispatch(ModifyRecipeAll())
      // }, 500)
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);