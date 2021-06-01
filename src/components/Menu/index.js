import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './menu.scss';

const Menu = ({ isLogged, pseudonym, handleLogout, isMenuOpen }) => {

  // isLogged et !isLogged permet de gérer l'affichage ou non 
  // des différents menus selon le status

  const classMenu = classnames('menu', { 'menu--open': isMenuOpen });

  return(
  <nav className={classMenu}>
    <NavLink
      className="menu__link"
      to="/"
      exact
      activeClassName="menu__link--active"
    >
      {isLogged && (
        <div className="menu__pseudo" onClick={handleLogout}><i className="fas fa-user-alt"></i> {pseudonym} </div>
      )}
      <h1><i className="fas fa-home"></i> </h1>
      Accueil
    </NavLink>

    <NavLink
      className="menu__link"
      to="/recettes"
      exact
      activeClassName="menu__link--active"
    ><h1><i className="fas fa-utensils"></i> </h1>
      Recettes
    </NavLink>

    {isLogged && (
      <NavLink
        className="menu__link"
        to="/mes-recettes"
        exact
        activeClassName="menu__link--active"
      ><h1><i className="fas fa-utensils"></i> </h1>
      Mes recettes
      </NavLink>
    )}

    {!isLogged && (
    <NavLink
      className="menu__link"
      to="/connexion"
      exact
      activeClassName="menu__link--active"
    ><h1><i className="fas fa-arrow-alt-circle-right"></i> </h1>
      Connexion
      </NavLink>
    )}

    {!isLogged && (
    <NavLink
      className="menu__link"
      to="/inscription"
      exact
      activeClassName="menu__link--active"
    ><h1><i className="fas fa-clipboard-check"></i> </h1>
      Inscription
      </NavLink>
    )}



    {isLogged && (
      <NavLink
        className="menu__link"
        to="/ajouter-une-recette"
        exact
        activeClassName="menu__link--active"
      ><h1><i className="fas fa-plus"></i> </h1>
        Ajouter une recette
      </NavLink>
    )}

    {isLogged && (
      <NavLink
        className="menu__link"
        to="/modifier-mon-profil"
        exact
        activeClassName="menu__link--active"
      ><h1><i className="fas fa-user-edit"></i> </h1>
      Modifier mon profil
      </NavLink>
    )}

    {isLogged && (
    <NavLink
      className="menu__link"
      to="/mes-amis"
      exact
      activeClassName="menu__link--active"
    ><h1><i className="fas fa-users"></i> </h1>
      Mes amis
      </NavLink>
    )}

    <NavLink
      className="menu__link"
      to="/contact"
      exact
      activeClassName="menu__link--active"
    >
      <h1><i className="fab fa-github"></i> </h1>
      Contact
    </NavLink> 
  </nav>

  );
};

Menu.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  pseudonym: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
  // isMenuOpen: propTypes.bool.isRequired,
}

export default Menu;

