import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './recipeRepo.scss';

const RecipeRepo = ({title, category, slug, image}) => {
  return (
    <>
          <Card>
          <Image src={`http://ec2-35-175-104-202.compute-1.amazonaws.com/images/recipes/${image}`} wrapped ui={false} />
          <Card.Content>
            <Card.Header>
              <NavLink 
                  className="recipe-repo__link"
                  to={`recette-perso/${slug}`}
                  >
                  {title}
                </NavLink>
                </Card.Header>
          </Card.Content>
          <Card.Meta>
              <span className='category-recipe'>{category['name']}</span>
          </Card.Meta>
          </Card>
    </>   
  );
};
RecipeRepo.propTypes = {
  title: PropTypes.string.isRequired,
  // category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
}

export default RecipeRepo;
