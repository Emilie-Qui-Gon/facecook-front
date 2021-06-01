import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import RecipesPrivate from 'src/containers/RecipesPrivate';

import './my-recipes.scss';

const MyRecipes = ({loadRecipesPrivate}) => {
  // on veut demander le chargement des recettes
  // Donc, dès l'appel du composant recettes
  // on charge les recettes privées
  
  useEffect(
    loadRecipesPrivate,
    [],
  );

  return (
    
        <RecipesPrivate />
   
  );
};

MyRecipes.propTypes = {
  loadRecipesPrivate: PropTypes.func.isRequired,
}

export default MyRecipes;
