import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import RecipeRepos from './RecipeRepos';

import './recipes.scss';

const Recipes = ({ loadRecipes, recipe, changeRadio }) => {
  // on veut demander le chargement des recettes
  // Donc, dès l'appel du composant recettes
  // on charge les recettes publiques
  useEffect(
    loadRecipes,
    [],
  );

  return (
    <div className="recipes">
      <h1 className="recipes__title">Découvrez les dernières Recettes Publiques !</h1>
      <div className="recipes__div">
        <form className="recipes__div__form" action="">
          <label id="recipes-repo__radio1" htmlFor="name">Nom</label>
          <input className="recipes-repo__input" type="radio" name="rdo" id="name" onChange={changeRadio} />
          <label id="recipes-repo__radio2" htmlFor="category">Catégorie</label>
          <input className="recipes-repo__input" type="radio" name="rdo" id="category" onChange={changeRadio} />
          <label id="recipes-repo__radio3" htmlFor="date">Date</label>
          <input className="recipes-repo__input" type="radio" name="rdo" id="date" onChange={changeRadio} />
        </form>
      </div>
      <div className="recipes__content">
        {recipe.map((list) =>
          <RecipeRepos
            key={list.id}
            {...list}
          />
        )}
      </div>
    </div>
  );
};

Recipes.propTypes = {
  // changeRadio: PropTypes.func.isRequired,
  loadRecipes: PropTypes.func.isRequired,
}

export default Recipes;
