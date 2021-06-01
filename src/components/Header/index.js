import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({toggle}) => {
  // toggle bool qui est faux par défaut 
  // pour le menu burger
  // au clic il passe à true

  return(
  <div className="header">
     <h1 className="header__title">Facecook <i className="fas fa-cookie-bite"></i></h1>
     <div onClick={toggle} className="header__div-burger"><i className="fas fa-hamburger" ></i></div>
  </div>
  )
};
Header.propTypes = {
  toggle: PropTypes.func.isRequired,
}

export default Header;
