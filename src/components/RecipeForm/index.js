import React from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

import './recipe-form.scss';

const RecipeForm = ({ changeSelect,
  description,
  ingredients,
  instructions,
  title,
  onChange,
  changeSelectCategory,
  recipeSubmit,
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
        <h1 className="description__box__title">Ajouter une Recette</h1>
        {/* <label className="description__label" htmlFor="avatar-recipe">Choisir une image : </label>
        <input className="description__input-parcourir" type="file" id="avatar-recipe" name="avatar-recipe"accept="image/png, image/jpeg" onChange="" value=""></input> */}
        <div className="description__box__details">
          <div className="description__box__details__infos">

          <input type="text" className="description__box__details__infos__input-titre" placeholder='Titre de la recette' name='title' onChange={handleChangeRecipe} value={title} required="required"></input>
            <input type="text" className="description__box__details__infos__input-description" placeholder='Description de la recette' onChange={handleChangeRecipe} value={description} required="required" name='description'></input>
            <select className="description__box__details__infos__select" control='select' name="status" required="required" onChange={handleSelect}>
              <option placeholder='placeholder' value=''>Définir la visibilité</option>
              <option value='1'>Privé</option>
              <option value='2'>Public</option>
              <option value='3'>Personnalisé</option>
            </select>

            <select className="description__box__details__infos__select" control='select' name="category" required="required" onChange={handleSelectCategory}>
              <option value='placeholder' value=''>Choisir une catégorie</option>
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
            <textarea className="description__box__details__ingredients__detail" placeholder='Ingrédients...' onChange={handleChangeRecipe} value={ingredients} name='ingredients' required="required"></textarea>
          </div>

        </div>
        <textarea className="description__box__details__instructions" placeholder='Instructions de la recette...' onChange={handleChangeRecipe} value={instructions} name='instructions' required="required"></textarea>
       
        <input className="description__box__details__button-form" type="submit" value="Valider" />
      </div>
   </form>

  );
};

RecipeForm.propTypes = {
  changeSelect: PropTypes.func.isRequired,
  description: PropTypes.string,
  ingredients: PropTypes.string,
  instructions: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  changeSelectCategory: PropTypes.func.isRequired,
  recipeSubmit: PropTypes.func.isRequired,
}

export default RecipeForm;