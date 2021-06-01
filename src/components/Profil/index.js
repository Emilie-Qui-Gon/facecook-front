import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

import ModifyProfil from 'src/containers/ModifyProfil';

import './profil.scss';

const Profil = ({handleLogout, pseudonym, status, avatar}) => {
  let history = useHistory();

  const logout = () => {
    history.push("/");
    handleLogout();
  }

  return (
  <div className="profil-box"> 
    <div className="profil">
      <h2 className="profil__menu">Mon Profil</h2>
      
      <div className="profil__container">
        <Card className="profil__card" id="modif-card">
          <Image src={`http://ec2-35-175-104-202.compute-1.amazonaws.com/images/avatars/${avatar}`} wrapped ui={false} />
          <Card.Content className="profil__content">
            <Card.Header className="profil__name">
              {pseudonym}
            </Card.Header>
            <Card.Description className="profil__title">
              Visibilité : { status == 1 ? 'privé' : 'public' }
            </Card.Description>
          </Card.Content>
          <div className="profil__button">
            <button className="profil__button-primary"
              onClick={logout}
              >
              Se déconnecter
            </button>
          </div>
        </Card>
        
          <ModifyProfil />
     
      </div>
    </div>
  </div>
  );
};

Profil.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  pseudonym: PropTypes.string.isRequired,
}

export default Profil;
