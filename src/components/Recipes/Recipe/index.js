import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

import './recipe.scss';

const Recipe = ({ id, title, slug, description, ingredients, image, user, instructions, pseudonym, handeDeleteId, handleModifyId }) => {

    useEffect(
        () => {
            handleModifyId(id);
        },
        [],
    );

    const classNameButton = (user['pseudonym'] == pseudonym ? 'recipe__button' : 'recipe__button--none');

    const handleDelete = (evt) => {
        const id = evt.target.value;
        handeDeleteId(id);
        history.push("/");
    };

    let history = useHistory();

    return (

        <div className="recipe">


            <div className="recipe__box">
                <h2 className="recipe__name">Ma recette de ...</h2>
                <h3 className="recipe__title">{title} !</h3>

                <div className="recipe__detail">
                    <div className="recipe__details">
                        <h2 className="recipe__details__name">Ma recette de ...</h2>
                        <h3 className="recipe__details__title">{title} !</h3>
                    </div>
                    <div className="recipe__image">
                        <img src={`http://ec2-35-175-104-202.compute-1.amazonaws.com/images/recipes/${image}`} alt="" className="recipe__image__img" />
                    </div>
                    <div className="recipe__ingredients-instructions">
                        <div className="recipe__description">
                            <p className="recipe__content">"{description}"</p>
                            <p className="recipe__author">Par {user['pseudonym']} <i className="fas fa-user"></i></p>
                        </div>

                        <div className="recipe__ingredient">
                            <h3 className="recipe__ingredient__h3">Ingrédients</h3>
                            <p>{ingredients}</p>
                        </div>
                        <div className="recipe__instructions">
                            <h3 className="recipe__instructions__h3">Instructions</h3>
                            <p>' {instructions} ' <br /></p>
                        </div>
                        <div className={classNameButton}>
                            <Button variant="outline-warning" value={id} ><NavLink className="recette--link" to={`/modifier-ma-recette/${slug}`} exact>Modifier <i className="fas fa-pencil-alt"></i></NavLink></Button>
                            <Button variant="outline-warning" value={id} onClick={handleDelete}>Supprimer <i className="fas fa-trash-alt"></i></Button>
                        </div>
                    </div>
                </div>




            </div>
        </div>

    )
};

Recipe.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired,
    // user: PropTypes.string,
    instructions: PropTypes.string.isRequired,
    pseudonym: PropTypes.string.isRequired,
    handeDeleteId: PropTypes.func.isRequired,
    handleModifyId: PropTypes.func.isRequired,
}
export default Recipe;
