import React from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

import './recipeedit.scss';

const RecipeEdit = ({changeSelect,
  description, 
  ingredients, 
  instructions,
  title, 
  onChange,
  changeSelectCategory,
  recipeSubmit
}) => { 

  const handleSelect = (evt) => {
    const newSelect = evt.target.value;
    changeSelect(newSelect);
  };

  const handleSelectCategory = (evt) => {
    const newSelectCategory = evt.target.value;
    changeSelectCategory(newSelectCategory);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    recipeSubmit();
    history.push("/");
  };

  const handleChangeRecipe = (evt) => {
    const name = evt.target.getAttribute('name');
    onChange(evt.target.value, name);
  }

  let history = useHistory();

  return (
    <form onSubmit={handleSubmit} className="description" >
        <div className="description__box">
          <h1 className="description__box__title">Modifier une Recette</h1>
          {/* <label className="description__label" htmlFor="avatar-recipe">Choisir une image : </label>
          <input className="description__input-parcourir" type="file" id="avatar-recipe" name="avatar-recipe"accept="image/png, image/jpeg" onChange="" value=""></input> */}
          <div className="description__box__details">
            <div className="description__box__details__infos">
            <input type="text" className="description__box__details__infos__input-titre" placeholder='Titre de la recette' name='title' onChange={handleChangeRecipe} required="required" value={title}></input>
              <input type="text" className="description__box__details__infos__input-description" placeholder='Description de la recette' required="required" onChange={handleChangeRecipe} value={description} required="required" name='description'></input>
              <select className="description__box__details__infos__select" control='select' name="status" required="required" onChange={handleSelect}>
                <option placeholder='placeholder' value=''>Définir la visibilité</option>
                <option value='1'>Privé</option>
                <option value='2'>Public</option>
                <option value='3'>Personnalisé</option>
              </select>
              <select className="description__box__details__infos__select" control='select' name="category" required="required" onChange={handleSelectCategory}>
                <option placeholder='placeholder' value=''>Choisir une catégorie</option>
                <option value='1'>Entrées</option>
                <option value='2'>Plats</option>
                <option value='3'>Desserts</option>
                <option value='4'>Patisserie</option>
                <option value='5'>Pâtes</option>
                <option value='6'>Viande</option>
                <option value='7'>Poisson</option>
              </select>
            </div>
            <div className="description__box__details__ingredients">
              <textarea className="description__box__details__ingredients__detail" placeholder='Ingrédients...' onChange={handleChangeRecipe} value={ingredients} required="required" name='ingredients'></textarea>
            </div>
          </div>
          <textarea className="description__box__details__instructions" placeholder='Instructions de la recette...' onChange={handleChangeRecipe} value={instructions} required="required" name='instructions'></textarea>
        
          <input className="description__box__details__button-form" type="submit" value="Valider" />
        </div>
    </form>

  );
};

RecipeEdit.propTypes = {
  changeSelect: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  changeSelectCategory: PropTypes.func.isRequired,
  recipeSubmit: PropTypes.func.isRequired,
}

export default RecipeEdit;
