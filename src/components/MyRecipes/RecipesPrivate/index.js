import React from 'react';
import PropTypes from 'prop-types';

import RecipeRepos from './RecipeRepos';

import './recipess.scss';

const RecipesPrivate = ({recipe, changeRadio}) => {

  return ( 

<div className="recipes">
      <h1 className="recipes__title">Mes Recettes favorites...</h1>
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

RecipesPrivate.propTypes = {
  // changeRadio: PropTypes.func.isRequired,
}

export default RecipesPrivate;
